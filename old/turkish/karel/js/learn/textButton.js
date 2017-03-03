function TextButton(dim, text, parentId, clickCallback) {


   var that = TextElement(dim, text, parentId);
   that.div.className = 'roundedButton';

   var heightFraction = 1;
   that.enabled = true;

   that.textSpan.onclick = function() {
      if (that.enabled) {
         clickCallback();
      }
   }

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
      
      that.textSpan.style.fontSize = that.height * heightFraction + 'px';
      that.textSpan.style.lineHeight = that.height + 'px';
   }

   that.setHeightFraction = function(fraction) {
      heightFraction = fraction;
      that.resize();
   }

   that.setEnabled = function() {
      that.enabled = true;
      that.div.className = 'roundedButton';
   }

   that.setDisabled = function() {
      that.enabled = false;
      that.div.className = 'disabledRoundedButton';
   }
   
   return that;
}
