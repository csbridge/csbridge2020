function CanvasModel(canvasWidth, canvasHeight) {

   var that = {};

   var cornerSize;
   var worldLeft;
   var worldTop;
   var worldWidth;
   var worldHeight;

   var worldRows;
   var worldCols;

   that.getWidth = function() {
      return canvasWidth;
   }

   that.getHeight = function() {
      return canvasHeight;
   }

   that.resizeCanvas = function(width, height, worldLoaded) {
      canvasWidth = width;
      canvasHeight = height;
      if (worldLoaded) {
         that.setKarelDimensions(worldRows, worldCols);
      }
   }

   that.setKarelDimensions = function(rows, cols) {
      worldRows = rows;
      worldCols = cols;
      cornerSize = Const.MAX_CORNER_SIZE;
		worldWidth = cols * cornerSize;
		worldHeight = rows * cornerSize;
		var maxWorldWidth = canvasWidth - Const.BORDER_SIZE * 2;
		var maxWorldHeight = canvasHeight - Const.BORDER_SIZE * 2;
		if(worldWidth > maxWorldWidth || worldHeight > maxWorldHeight) {
			var xScale = maxWorldWidth / worldWidth;
			var yScale = maxWorldHeight / worldHeight;
			var maxScale = Math.min(xScale, yScale);
			//var maxScale = Math.min(maxScale, 0.4);
			worldWidth = worldWidth * maxScale;
			worldHeight = worldHeight * maxScale;
			cornerSize = cornerSize * maxScale;
		}

		worldTop = (maxWorldHeight - worldHeight)/2 + Const.BORDER_SIZE;
		worldLeft =  Const.BORDER_SIZE;
   }

   that.getCornerSize = function() {
      return cornerSize;
   }

   that.getWorldLeft = function() {
      return worldLeft;
   }

   that.getWorldTop = function() {
      return worldTop;
   }

   that.getWorldWidth = function() {
      return worldWidth;
   }

   that.getWorldHeight = function() {
      return worldHeight;
   }

   return that;

}
