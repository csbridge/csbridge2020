function MakeAbsoluteDiv(that, parentId, dim) {
   that.widthFraction = dim.width;
   that.heightFraction = dim.height;
   that.leftFraction = dim.left;
   that.topFraction = dim.top;

   that.init = function() {
      that.div.className = 'absoluteDiv';
      document.getElementById(parentId).appendChild(that.div);
   }
   
   that.fadeOut = function(time) {
      $(that.div).fadeOut(time);
   }
   
   that.deleteDiv = function() {
      document.getElementById(parentId).removeChild(that.div);
   }

   that.inheritVisibility = function() {
      that.div.style.display = 'inherit';
   }

   that.resize = function() {
      var centerHeight = $('#' + parentId).height();
      var centerWidth = $('#' + parentId).width();

      that.width = that.widthFraction * centerWidth;
      that.height = that.heightFraction * centerHeight;
      that.left = that.leftFraction * centerWidth;
      that.top = that.topFraction * centerHeight;

      that.div.style.left = that.left + 'px';
      that.div.style.top = that.top + 'px';
      that.div.style.width = that.width + 'px';
      that.div.style.height = that.height + 'px';
   }

   that.init();

   return that;
}
