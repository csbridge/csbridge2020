function KarelCommandButton(dim, text, clickCallback) {

   var SIZE_REDUCTION = 0.45;

   var that = TextElement(dim, text, 'centerAreaDiv');
   that.textSpan.style.fontFamily = 'monospace';
   that.div.className = 'disabledRoundedButton';

   that.textSpan.onclick = function() {
      if (that.enabled) {
         clickCallback();
      }
   }

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
      var centerHeight = $('#centerAreaDiv').height();
      var height = that.heightFraction * centerHeight;
      that.textSpan.style.fontSize = height*SIZE_REDUCTION + 'px';
      that.textSpan.style.lineHeight = height + 'px';
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
