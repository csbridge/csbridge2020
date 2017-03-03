function StaticKarelCanvas(worldName) {
   var that = {};
   that.div = document.createElement('canvas');
   that = MakeAbsoluteDiv(that, 'centerAreaDiv');
   that.div.setAttribute('src', './images/imageButtonFrame.png');

   var karelIde = KarelIde(null, that.div, worldName);

   var resize = that.resize;
   that.resize = function() {
      resize();
      var centerHeight = $('#' + 'centerAreaDiv').height();
      var centerWidth = $('#' + 'centerAreaDiv').height();
      var width = that.widthFraction * centerWidth;
      var height = that.heightFraction * centerHeight;
      karelIde.resizeCanvas(width, height);
   }

   that.getIde = function() {
      return karelIde;
   }
   
   that.resize();

   return that;
}
