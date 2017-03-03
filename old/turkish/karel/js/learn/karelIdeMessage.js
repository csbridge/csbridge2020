function KarelIdeMessage(dim, parentId) {
   var that = {};
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);
   that.div.id = 'ideMessage';
   //that.inheritVisibility();

   return that;
}
