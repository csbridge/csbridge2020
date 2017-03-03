/**
 * Class: Karel Importer
 * --------------
 * Creates the elements that compose a Karel IDE including
 * A run button, a stop button, a world choser a text editor
 * and a canvas. Wires up all the elements so that you can
 * program Karel! The elements can have their style modified using
 * css.
 *
 * Assumes that the necessary Karel libraries have already been imported.
 *
 * Usage: In the body of an HTML page you can include the line
 * <script src="js/importKarelIde.js"></script>
 */
function ImportKarelIde(settings) {

   // User Interface Constants
   var KAREL_IDE_ID = 'karelIde';
   var WORLDS = [
      '60x60.w',
      '50x50.w',
      '30x30.w',
      '15x15.w',
      '14x13.w',
      '12x12.w',
      '9x9.w',
      '8x2.w',
      '7x12.w',
      '1x6.w',
      '4x4.w',
      '1x1.w',
      'maze.w',
   ];   
   var INITIAL_WORLD = '15x15.w';
   var INITIAL_CODE = "//This is a comment \n\nfunction run() {\n   while(frontIsClear()){\n      putBeeper();\n      move();\n   }\n}\n\nrun();";

   importIde();

   function populateSetting(settingName, defaultValue) {
      if (typeof settings[settingName] == 'undefined') {
         settings[settingName] = defaultValue;
      }
   }

   function populateSettings() {
      if (typeof settings  == "undefined"){
         settings = {};
      }
      populateSetting('debugButtons', false);
      populateSetting('editor', true);
      populateSetting('initialWorld', INITIAL_WORLD);
   }
   

   /**
    * Function: Create Image Button
    * -------------
    * Makes a button with an image that lives in src. 
    * Returns the button
    */
   function createImageButton(parent, src, id) {
      var button = document.createElement('button');
      var buttonImage = document.createElement('img');
      buttonImage.setAttribute('src', src);
      buttonImage.setAttribute('height', 30);
      buttonImage.setAttribute('width', 30);
      button.appendChild(buttonImage);
      button.id = id;
      parent.appendChild(button);
      return button;
   }

   /**
    * Create Text Button
    * -------------
    * Makes a button with the given label 
    * Returns the button
    */
   function createTextButton(parent, label, id) {
      var button = document.createElement('button');
      button.innerHTML = label;
      button.id = id;
      parent.appendChild(button);
      return button;
   }

   /**
    * Add Text
    * -------------
    * Adds some HTML to the given parent
    */
   function addText(parent, text) {
      parent.innerHTML += text;
   }

   /**
    * Add Space
    * -------------
    * Adds a space to the given parent.
    */
   function addSpace(parent) {
      addText(parent, '&nbsp;');
   }

   /**
    * Add World Drop Down
    * -------------------
    * Adds the world drop down interactor and adds in all the worlds.
    * Assumes that the INITIAL_WORLD is in the list of worlds.
    */
   function addWorldDropDown(parent) {
      addText(parent, 'World:'); 
      var worldSelector = document.createElement('select');
      worldSelector.id = 'worldSelector';
      worldSelector.setAttribute('name', 'world');
      worldSelector.setAttribute('size', 0);
      parent.appendChild(worldSelector);

      for(var i = 0; i < WORLDS.length; i++ ) {
         worldName = WORLDS[i];
         var optionElem = document.createElement('option');
         optionElem.setAttribute('value', i);
         optionElem.innerHTML = worldName;
         if (worldName == settings.initialWorld) {
            optionElem.setAttribute('selected', 'yes');
         }
         worldSelector.appendChild(optionElem);
      }
      return worldSelector;
   }

   function addDebugButtons(karelDiv, karelIde) {
      moveButton = createTextButton(karelDiv, 'move', 'moveButton');
      turnLeftButton = createTextButton(karelDiv, 'turnLeft', 'turnButton');
      putBeeperButton = createTextButton(karelDiv, 'pickBeeper', 'pickButton');
      pickBeeperButton = createTextButton(karelDiv, 'putBeeper', 'putButton');
      $('#moveButton').click(karelIde.stepMove);
      $('#turnButton').click(karelIde.stepTurnLeft);
      $('#pickButton').click(karelIde.stepPickBeeper);
      $('#putButton').click(karelIde.stepPutBeeper);
   }

   function createKarelDiv() {
      var karelDiv = document.createElement('div');
      karelDiv.className = 'karelIde';
      document.body.appendChild(karelDiv);
      return karelDiv;
   }

   function createCodeEditor(karelDiv) {
      var code = document.createElement('div');
      code.innerHTML = INITIAL_CODE;
      code.className = 'code';
      code.id        = 'code';
      karelDiv.appendChild(code); 
      var editor = ace.edit('code');
      editor.setTheme('ace/theme/jeremys');
      var JavaScriptMode = require("ace/mode/javascript").Mode;
      editor.getSession().setMode(new JavaScriptMode());
      code.style.fontSize='16px';
      window._editor = editor;
      return editor; 
   }

   function createKarelCanvas(karelDiv) {
      var canvas = document.createElement('canvas');
      canvas.className = 'canvas';
      karelDiv.appendChild(canvas);
      return canvas;
   }

   function createButtonBar(karelDiv) {
      var buttonBar = document.createElement('div');
      karelDiv.appendChild(buttonBar);
      if (settings.editor) { 
         buttonBar.className = 'buttonBar';
         var playButton = createImageButton(buttonBar, 'images/playButton.png', 'playButton');
         addSpace(buttonBar);
         var stopButton = createImageButton(buttonBar, 'images/stopButton.png', 'stopButton');
         addSpace(buttonBar);
      }
      if (settings.worldSelector) {
         var worldSelector = addWorldDropDown(buttonBar);
      }
   }

   function wireUpButtonBar(karelIde) {
      $('#playButton').click(karelIde.playButton);
      $('#stopButton').click(karelIde.stopButton);
      $('#worldSelector').change(
         function() {
            var worldName = $("#worldSelector option:selected").text();
		      karelIde.changeWorld(worldName);
		   }
      );
   }

   function importIde() {
      populateSettings();
      var karelDiv = createKarelDiv();
      createButtonBar(karelDiv); 
      var editor = null;
      if (settings.editor) { 
         editor = createCodeEditor(karelDiv);
      } 
      var canvas = createKarelCanvas(karelDiv);
      var initialWorld = settings.initialWorld;
      karelIde = KarelIde(editor, canvas, initialWorld);
      wireUpButtonBar(karelIde);
      if (settings.debugButtons) {
         addDebugButtons(karelDiv, karelIde);
      }
   }
}
