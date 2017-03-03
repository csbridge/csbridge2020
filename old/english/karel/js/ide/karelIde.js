

/**
 * Class: Karel IDE
 * ---------
 * This is the main class for the Karel Ide. It provides the 
 * API availible to manipulate Karel. This class is in charge
 * of maintaining the karelImages singleton and making sure
 * that Karel doesn't try to render before images have been
 * loaded.
 */
function KarelIde(editor, canvas, initialWorld) {

   // I am using the class style described in JavaScript the good parts
   var that = {};

   // constants
   var ACTION_HEARTBEATS = 10;
   var HEART_BEAT = 10;	
   var REFRESH_HEARTBEATS = 100;
   var DEFAULT_CANVAS_WIDTH = 370;
   var DEFAULT_CANVAS_HEIGHT = 370;
   var COOKIE_NAME = 'karelCode';

   // instance variables
   if (canvas)var context = canvas.getContext('2d');
   var actionCountdown = ACTION_HEARTBEATS;
   var refreshCountdown = REFRESH_HEARTBEATS;
   var worldName = initialWorld;
   var canvasModel = CanvasModel(DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT);
   var worldLoaded = false;

   var karel = Karel(canvasModel);
   var compileEngine = null;

   // state flags
   var animating = false;
   var imagesReady = false;
   var numActions = 0;
   var silent = false;

   /**
    * Function: Init
    * --------------
    * Setup the variables, create a animation callback loop
    * and load images.
    */ 
   function init() {
      if (canvas) {
         canvas.width = canvasModel.getWidth();
         canvas.height = canvasModel.getHeight();
      }
      if (!karelImages.haveCalledLoadImages()) {
         karelImages.loadImages(imagesLoaded);
      } else if (!karelImages.haveLoadedAllImages()) {
         karelImages.addListener(imagesLoaded);
      } else {
         imagesLoaded();
      }
      setInterval(heartbeat, HEART_BEAT);	
   }

   //--------------- PUBLIC METHODS ---------------------//

   /**
    * Function: Stop Button
    * Usage: $('#stopButton').click(karelIde.stopButton);
    * ---------------------
    * Public method that stops animation and resets the current world.
    */
   that.stopButton = function() {
      animating = false;
      loadWorld(worldName);
   }

   that.resizeCanvas = function(width, height) {
      canvasModel.resizeCanvas(width, height, worldLoaded);
      canvas.width = canvasModel.getWidth();
      canvas.height = canvasModel.getHeight();
      if (worldLoaded) {
         draw();
      }
   }

   /**
    * Function: Play Button
    * Usage: $('#playButton').click(karelIde.playButton);
    * --------------
    * Runs the code from the IDE editor without reseting Karel's world.
    * "Compiles" the code and then sets the animation
    * flag to be true so that the program starts rendering Karel's progress.
    * Should be called when the play button is pressed.
    */
   that.playButton = function (playCallback) {
      that.runCode(playCallback);
   }

   /**
    * Function: Change World
    * ------------
    * Sets the world to be the given fileName. Assumes that the fileName given
    * exists (doesn't do any checking).
    */
   that.changeWorld = function(fileName) {
      worldName = fileName;
      if (imagesReady) {
         loadWorld(fileName);
      }
   }

   /**
    * Function: Step Move Karel
    * ---------------
    * Make Karel take a single step forward.
    */
   that.stepMove = function() {
      step(karel.move);
   }

   /**
    * Step Turn Left Karel
    * ---------------
    * Make Karel turn left once.
    */
   that.stepTurnLeft = function() {
      step(karel.turnLeft);
   }

   /**
    * Function: Step Turn Right Karel
    * ---------------
    * Make Karel turn right once.
    */
   that.stepTurnRight = function() {
      step(karel.turnRight);
   }

   /**
    * Step Put Beeper Karel
    * ---------------
    * Make Karel place a single beeper.
    */
   that.stepPutBeeper = function() {
      step(karel.putBeeper);
   }

   /**
    * Function: Step Pick Beeper Karel
    * ---------------
    * Make Karel pick up a single beeper.
    */
   that.stepPickBeeper = function() {
      step(karel.pickBeeper);
   }

   /**
    * Function: Get Model
    * -------------------
    * Returns the model of karel used by this ide
    */
    that.getModel = function() {
      return karel.getModel();
    }

    that.setCode = function(code) {
      if (editor == null) return null;
      return editor.getSession().setValue(code);
    }

    that.getCode = function() {
      return getCode();
    }

    that.setSilent = function(newSilent) {
      silent = newSilent;
    }

    that.runUnitTest = function(inputWorld, outputWorld, callback) {
       var tempIde1 = KarelIde(editor, null, inputWorld);
       var tempIde2 = KarelIde(editor, null, outputWorld);
       var simulationOver = function(error) {
         var passed = tempIde1.getModel().equals(tempIde2.getModel());
         callback(passed && !error);
       }
       tempIde1.setSilent(true);
       tempIde1.runCode(simulationOver);
    }

    that.runSpecificCode = function(code, finishedCallback) {
      compileEngine = getCompiler();

      that.stopButton();

      try {
         compileEngine.compile(code);
      } catch (compilerError) {
         if (!silent) {
            alert(compilerError);
         }
         finishedCallback(true);
         return;
      }

      if(silent) {
         return runCodeNoDisplay(finishedCallback);
      }

      that.playCallback = finishedCallback;
      animating = true;
    }

    that.runCode = function(finishedCallback) {
      if (!worldLoaded) throw new Error('TRIED TO RUN BEFORE WORLD LOADED');
      var code = getCode();
      that.runSpecificCode(code, finishedCallback)
      
   }

   that.resize = function() {
    
   }

   


   //----------------------------- PRIVATE METHODS --------------------------//

   function runCodeNoDisplay(finishedCallback) {
      try {
         while(true) {
            var done = compileEngine.executeStep();
            if(done) {
               if(finishedCallback) finishedCallback(false);
               break;
            }
         }      
      } catch (karelError) {
         if(finishedCallback) finishedCallback(true);
      }
   }

   function getCompiler() {
       if (Const.USE_COMPILER) return KarelCompiler(karel);
       return KarelEvalEngine(karel);
    }

   /**
    * Function: Step
    * ----
    * Make karel execute a single action (the passed in stepFunction).
    * Clears karel of any errors and turns on animation so that karel will
    * animate the action.
    */
   function step(stepFunction) {
      try {
         stepFunction();
      } catch (msg) {
         alert(msg);
      }
      draw();
   }

   /**
    * Function: ImagesLoaded
    * ------------
    * This method is the callback for when images have finished loading. 
    * Updates the imagesReady flag and loads the current world.
    * Usage: karelImages.loadImages(imagesLoaded);
    */
   function imagesLoaded() {
      imagesReady = true;
      loadWorld(worldName);
   }

   /**
    * Function: WorldFileLoaded
    * ------------
    * This method is the callback for when a world has finished loading. 
    * Updates the karelWorld instance and redraws the canvas.
    * Usage: loadDoc(worldUrl, worldFileLoaded);
    */
   function worldFileLoaded(text) {	
      karel.loadWorld(text, canvasModel);
      draw();
      worldLoaded = true;
   }

   /**
    * Funciton: Load World
    * ----------
    * Loads a new Karel World. Assumes that images have already been
    * preloaded.
    */
   function loadWorld(worldName) {
      worldName += '.w'
      if (!imagesReady) {
         alert('load world called before images ready');
      }
      if (worldName == '15x15.w') {
         worldFileLoaded('Dimension: (15,15)');
      } else if (worldName == '7x7.w') {
         worldFileLoaded('Dimension: (7,7)');
      }else {
         var url = "karel/worlds/" + worldName;
         loadDoc(url, worldFileLoaded);
      }
   }

   /**
    * Function: Heartbeat
    * ---------
    * Animation callback method which is executed once every HEART_BEAT
    * milliseconds. Only updates and draws if the animating flag is true
    */
   function heartbeat() {
      if (animating) {;
         update();
         draw();
      }
   }

   /**
    * Function: Update
    * ------
    * Updates the world once every ACTION_HEATRTBEATS number of heartbeats.
    */
   function update() {
      actionCountdown = actionCountdown - 1;
      if (actionCountdown == 0 ) {
         try {
            animating = !compileEngine.executeStep();
            if(!animating && that.playCallback) that.playCallback(false);
            numActions += 1;
         } catch (karelError) {
            if (!silent) {
               alert(karelError);
            }
            animating = false;
            numActions = 0;
            if(that.playCallback) that.playCallback(true);
         }
         actionCountdown = ACTION_HEARTBEATS;
      }
   }

   /**
    * Function: Draw
    * ----
    * Clears the canvas and draws a new version of Karel. Assumes that a
    * world has been loaded. Draws Karel infront of beepers but behind walls.
    */
   function draw() {
      if (canvas) {
         clear();
         karel.draw(context);
      }
   }

   /**
    * Function: Clear
    * -----
    * Clears the canvas by filling it with a rectangle colored BACKGROUND_COLOR
    */
   function clear() {
      context.clearRect (0, 0, canvasModel.getWidth(), canvasModel.getHeight());
      //context.fillStyle = Const.BACKGROUND_COLOR;
     // context.fillRect(0, 0, canvasModel.getWidth(), canvasModel.getHeight());
   }

   /**
    * Function: Get Code
    * -----
    * Returns the code in the Karel IDE as a String.
    */
   function getCode() {
      if (editor == null) return null;
      return editor.getSession().getValue();
   }

   // Initialize and return the instance (based on JavaScript the
   // Good Parts)
   init();
   return that;
}

