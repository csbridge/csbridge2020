function ProgramElement(dim,parent,startWorld,code) {
   var that = {};

   
   that.div = document.createElement('div');
   that.div.id = 'ide';
   that = MakeAbsoluteDiv(that, parent, dim);
   that.div.className = 'nonFadeInDiv';

   var BUTTON_HEIGHT_PIXELS = 0;
   
   var canvasDim = {left:0, top:0, width:1, height:1};
   var buttonBarDim = {left:0, top:0, width:1, height:1};

   var karelDiv = that.div; 
   
   var canvas = KarelCanvasElement(canvasDim, 'ide');
   
   var karelIde = KarelIde(null, canvas.getCanvas(), startWorld);

   //var buttonBar = KarelIdeButtons(buttonBarDim, 'ide', karelIde);

   
   that.resize = function() {
      var centerHeight = $('#' + parent).height();
      var centerWidth = $('#' + parent).width();

      var ideWidth = dim.width * centerWidth;
      ideWidth = Math.max(ideWidth, Const.MIN_IDE_WIDTH + Const.PADDING * 2);
      var ideHeight = dim.height * centerHeight;
      var ideLeft = dim.left * centerWidth;
      var ideTop = dim.top * centerHeight;
      
      that.div.style.width = ideWidth + 'px';
      that.div.style.height = ideHeight + 'px';
      that.div.style.left = ideLeft + 'px';
      that.div.style.top = ideTop + 'px';
      
      var canvasWidth = ideWidth;
      var canvasHeight = ideHeight - BUTTON_HEIGHT_PIXELS;
      canvasHeight = Math.max(canvasHeight, 0);
      var canvasLeft = ideLeft;
      var canvasTop = BUTTON_HEIGHT_PIXELS;

      canvas.div.style.left = 0 + 'px';
      canvas.div.style.top = BUTTON_HEIGHT_PIXELS + 'px';
      canvas.div.style.width = canvasWidth + 'px';
      canvas.div.style.height = canvasHeight + 'px';
   
      karelIde.resizeCanvas(canvasWidth, canvasHeight);
      //if(buttonBar) {
      //   buttonBar.resize();
      //}
   }

   that.run = function() {
      karelIde.runSpecificCode(code);
   }

   that.getIde = function() {
      return karelIde;
   }
   
   that.resize();


   return that;
}
