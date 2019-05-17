function KarelIdeButtons(dim, parentId, karelIde) {
   var BORDER_HEIGHT = 0.04;

   var that = {};
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);
   that.div.id = 'ideButtonBar';
   that.inheritVisibility();

   var border = {};
   var borderDim = {left:0, top:1-BORDER_HEIGHT, width:1, height:BORDER_HEIGHT};
   border.div = document.createElement('div');
   border = MakeAbsoluteDiv(border, 'ideButtonBar', borderDim);
   border.div.id = 'ideButtonBarBorder';


   var BUTTON_HEIGHT = 0.6;
   var BUTTON_WIDTH = 0.15;
   var BUTTON_LEFT_SPACING = 0.01;
   var BUTTON_SPACING = 0.02;
   var runDim = {
      left:BUTTON_SPACING,
      top:(1-BUTTON_HEIGHT)/2,
      width:BUTTON_WIDTH,
      height:BUTTON_HEIGHT
   };
   var resetDim = {
      left:BUTTON_LEFT_SPACING + BUTTON_SPACING + BUTTON_WIDTH,
      top:(1-BUTTON_HEIGHT)/2,
      width:BUTTON_WIDTH,
      height:BUTTON_HEIGHT
   };
   that.runButton = TextButton(runDim, 'Run', 'ideButtonBar', karelIde.playButton);
   //that.resetButton = TextButton(resetDim, 'Goal', 'ideButtonBar', karelIde.stopButton);
   that.runButton.inheritVisibility();
   //that.resetButton.inheritVisibility();
   var resize = that.resize;
   that.resize = function() {
      resize();
      border.resize();
      that.runButton.resize();
      //that.resetButton.resize();
   }
   that.resize();
   return that;
}
