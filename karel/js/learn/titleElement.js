function TitleElement(xPos, text) {
   var that = {};
   
   var HEIGHT_FRACTION = 0.7;

   var dim = {};
   dim['left'] = xPos;
   dim['top'] = (1 - HEIGHT_FRACTION) / 2;
   dim['height'] = HEIGHT_FRACTION;

   
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, 'headerDiv', dim);
   that.div.className = 'nonFadeInDiv';
   var textSpan = document.createElement('p');
   textSpan.innerHTML = text;
   textSpan.className = 'titleText';
   that.div.appendChild(textSpan);

   disableSelection(textSpan);

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
      var centerHeight = $('#headerDiv').height();
      var height = that.heightFraction * centerHeight;
      textSpan.style.fontSize = height + 'px';
      textSpan.style.lineHeight = height + 'px';
   }
   that.setText = function(text) {
      textSpan.innerHTML = text;
   }
   return that;
}
