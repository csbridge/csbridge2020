function KarelEditorElement(dim, parentId) {

   var FONT_SIZE_FRACTION = 0.05;
   var GUTTER_FRACTION = 0.14;

   var that = {};

   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);
   //document.getElementById(parentId).appendChild(that.div);

   that.div.className = 'code';
   that.div.id        = 'code';
   that.editor = ace.edit('code');
   that.editor.setTheme('ace/theme/jeremys');
   var JavaScriptMode = require("ace/mode/javascript").Mode;
   that.editor.getSession().setMode(new JavaScriptMode());
   
   // this line turns off automatic error detection
   that.editor.getSession().setUseWorker(false);
   
   that.div.style.fontSize='20px';

   that.getEditor = function() {
      return that.editor;
   }

   that.setCode = function(code) {
      
      that.editor.getSession().setValue(code);
   }

   function animateCharType() {
      while(true) {
         if (that.animateIndex >= that.code.length ) {
            that.animateCallback();
            that.animateCallback();
            return;
         }
         var nextChar = that.code.charAt(that.animateIndex);
         that.animateIndex += 1;
         if (nextChar != '\r') break;
      }
      
      that.editor.insert(nextChar);
      setTimeout(animateCharType, 60);
      
   }

   that.animateCode = function(code, callback) {
      that.code = code;
      that.animateIndex = 0;
      that.animateCallback = callback;
      animateCharType();      
   }

   var resize = that.resize;
   that.resize = function() {
      resize();
      var fontSize = that.height * FONT_SIZE_FRACTION;
      //that.div.style.fontSize= fontSize + 'px';
      //that.div.style.lineHeight = fontSize + 'px';
      //var gutter = document.getElementById('ace_gutter');
      //gutter.style.width = that.width * GUTTER_FRACTION + 'px';
      that.editor.renderer.onResize();
   }

   return that;

}
