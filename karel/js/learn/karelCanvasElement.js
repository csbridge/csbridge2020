function KarelCanvasElement(dim, parentId) {
   var that = {};
   that.div = document.createElement('canvas');
   that = MakeAbsoluteDiv(that, parentId, dim);
   that.inheritVisibility();
   
   that.getCanvas = function() {
      return that.div;
   }


   that.resize();
   return that;
}
