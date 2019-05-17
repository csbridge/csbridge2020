function KarelCodeElement() {
   var that = {};

   var dim = {'left':0, 'top':0, 'width':1, 'height':1};
   that.div = document.createElement('ide');
   that = MakeAbsoluteDiv(that, 'centerAreaDiv', dim);

   var karelDiv = createKarelDiv();
   //createButtonBar(karelDiv); 
   var editor = createCodeEditor(karelDiv);
   
   var canvas = createKarelCanvas(karelDiv);
   var initialWorld = settings.initialWorld;
   karelIde = KarelIde(editor, canvas, initialWorld);
   wireUpButtonBar(karelIde);
   if (settings.debugButtons) {
      addDebugButtons(karelDiv, karelIde);
   }

   var resize = that.resize;
   that.resize = function() {
      resize();
      //karelIde.resizeCanvas(that.width, that.height);
   }

   that.getIde = function() {
      return karelIde;
   }
   
   that.resize();

   return that;
}
