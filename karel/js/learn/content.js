function Content() {
   

   var that = {};
   var div = document.getElementById('content');

   that.resize = function(progressModel) {
      windowWidth = $(window).width(); 
      windowHeight = $(window).height();

      var topOffset = 0;
      var leftOffset = 0;
      if(progressModel.isAtHomescreen()) {
         topOffset = Const.HEADER_HEIGHT;
         leftOffset = Const.PADDING;
         windowHeight -= topOffset;
         windowWidth -= leftOffset * 2;
         windowWidth = Math.max(windowWidth, Const.MIN_IDE_WIDTH );
      }

      var widthScale = windowWidth / Const.LEARN_ASPECT_RATIO;
      var heightScale = windowHeight;
      var scale = Math.min(widthScale, heightScale);

      var width = Const.LEARN_ASPECT_RATIO * scale;
      var height = scale;

      var x = (windowWidth - width) / 2;
      var y = Math.min(windowHeight - height, 12);
      var y = Math.max(y, 0);
      
      div.style.width = width + 'px';
      div.style.height = height + 'px';
      div.style.top = topOffset + y + 'px';
      div.style.left = leftOffset + x + 'px';
   }

   that.getHeight = function() {
      return $('#content').height();
   }

   return that;
}
