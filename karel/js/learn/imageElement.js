function ImageElement(dim, src, parentId) {
   var that = {};
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);
   that.image = document.createElement('img');
   that.image.setAttribute('src', src);
   that.image.className = 'nonFadeInDiv';
   that.image.style.height = "100%";
   that.image.style.width = "100%";
   that.div.appendChild(that.image);
   

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
      that.image.style.height = that.div.style.height + 'px';
      that.image.style.width = that.div.style.width + 'px';
   }
   
   return that;
}
