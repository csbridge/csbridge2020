/**
 * StaticClass: KarelView
 * Usage: KarelView.draw(canvasModel, karelModel, context);
 * --------------------------------------------------------
 * KarelView supports a public static method draw which can
 * render a karelModel onto a canvas using a given drawing
 * context.
 */

KarelView = {};

KarelView.getCornerX = function(canvasModel, col) {
   return canvasModel.getWorldLeft() + col * canvasModel.getCornerSize();
}

KarelView.getCornerY = function(canvasModel, row) {
   return canvasModel.getWorldTop() + row * canvasModel.getCornerSize();
}

//-------------------- DRAW KAREL ------------------//
KarelView.getImage = function(karelModel) {
	switch(karelModel.getDirection()){
		case Const.KAREL_NORTH: return karelImages.karelNorth; 	
		case Const.KAREL_SOUTH: return karelImages.karelSouth;
		case Const.KAREL_EAST: return karelImages.karelEast;
		case Const.KAREL_WEST: return karelImages.karelWest;	
	}
	return null;
}

KarelView.getTinyImage = function(karelModel) {
	switch(karelModel.getDirection()){
		case Const.KAREL_NORTH: return karelImages.karelNorthTiny; 	
		case Const.KAREL_SOUTH: return karelImages.karelSouthTiny;
		case Const.KAREL_EAST: return karelImages.karelEastTiny;
		case Const.KAREL_WEST: return karelImages.karelWestTiny;	
	}
	return null;
}

KarelView.getSmallImage = function(karelModel) {
	switch(karelModel.getDirection()){
		case Const.KAREL_NORTH: return karelImages.karelNorthSmall; 	
		case Const.KAREL_SOUTH: return karelImages.karelSouthSmall;
		case Const.KAREL_EAST: return karelImages.karelEastSmall;
		case Const.KAREL_WEST: return karelImages.karelWestSmall;	
	}
	return null;
}

KarelView.getKarelImage = function(cornerSize, karelModel) {
	if (cornerSize <= Const.KAREL_TINY_SIZE) {
		return KarelView.getTinyImage(karelModel);
	} else if (cornerSize <= Const.KAREL_SMALL_SIZE) {
		return KarelView.getSmallImage(karelModel);
	} else {
		return KarelView.getImage(karelModel);
	}
	return null;
}

KarelView.drawKarel = function(canvasModel, karelModel, c) {
   var cornerSize = canvasModel.getCornerSize();

   var image = KarelView.getKarelImage(cornerSize, karelModel);
   if (typeof image == "undefined" || image == null) {
		alert('karel image loading fail!');
	}
	
	var karelX = KarelView.getCornerX(canvasModel, karelModel.getKarelCol());
	var karelY = KarelView.getCornerY(canvasModel, karelModel.getKarelRow());
	
	//draw karel one pixel smaller on all sides
	c.drawImage(image,karelX+1, karelY+1, cornerSize-2, cornerSize-2);
}

//----------------- DRAW WORLD -----------------//


KarelView.drawBorder = function(canvasModel, c) {

   var borderLeft = canvasModel.getWorldLeft() - Const.BORDER_SIZE;
   var borderTop = canvasModel.getWorldTop() - Const.BORDER_SIZE;
   var borderWidth = canvasModel.getWorldWidth() + Const.BORDER_SIZE*2;
   var borderHeight = canvasModel.getWorldHeight() + Const.BORDER_SIZE*2;
   c.fillStyle = "#000";
	c.fillRect(borderLeft, borderTop, borderWidth, borderHeight);

	c.fillStyle = "#fff";
	c.fillRect(canvasModel.getWorldLeft(), canvasModel.getWorldTop(), 
	   canvasModel.getWorldWidth(), canvasModel.getWorldHeight());
}

KarelView.getBeeperSize = function(canvasModel) {
   var cornerSize = canvasModel.getCornerSize();
   return cornerSize * Const.BEEPER_SIZE_FRACTION;
}

KarelView.drawBeepers = function(canvasModel, karelModel, c) {
   var beeperSize = KarelView.getBeeperSize(canvasModel);
   var cornerSize = canvasModel.getCornerSize();
	
	c.fillStyle = "#000";
	c.font = "bold 14px courier";
	c.textAlign = "center";
	c.textBaseline = "middle";

	for (var rIndex = 0; rIndex < karelModel.getNumRows(); rIndex++) {
		for (var cIndex = 0; cIndex < karelModel.getNumCols(); cIndex++) {
         var x = KarelView.getCornerX(canvasModel, cIndex) + (cornerSize)/2;
			var y = KarelView.getCornerY(canvasModel, rIndex) + (cornerSize)/2;
			var numBeepers = karelModel.getNumBeepers(rIndex, cIndex);
			if (numBeepers > 0) {
			   var label = '';
			   if (numBeepers > 1) label = numBeepers;
            KarelView.drawBeeper(c, x, y, beeperSize, label);
         }
		}
	}
}

KarelView.drawBeeper = function(ctx, x, y, sqSize, label) {
   var beeperSize = sqSize * Const.BEEPER_SIZE_FRACTION;
   var ps = Math.round(sqSize * Const.BEEPER_LABEL_FRACTION);
   ps = Math.min(ps, Const.BEEPER_LABEL_MAX_SIZE);
   if (ps < Const.BEEPER_LABEL_MIN_SIZE) ps = 0;
   ctx.save();
   ctx.fillStyle = Const.BEEPER_FILL_COLOR;
   ctx.beginPath();
   ctx.moveTo(x - beeperSize / 2, y);
   ctx.lineTo(x, y + beeperSize / 2);
   ctx.lineTo(x + beeperSize / 2, y);
   ctx.lineTo(x, y - beeperSize / 2);
   ctx.lineTo(x - beeperSize / 2, y);
   ctx.fill();
   ctx.stroke();
   ctx.restore();
   ctx.save();
   if (ps && label) {
      ctx.fillStyle = "black";
      ctx.font = ps + "pt " + Const.BEEPER_LABEL_FONT;
      //alert(ctx.measureText(label).width);
      var x0 = x; // - ctx.measureText(label).width / 2;
      var y0 = y + ps * Const.BEEPER_LABEL_DY;
      ctx.fillText(label, x0, y0);
   }
   ctx.restore();
};

KarelView.drawCorners = function(canvasModel, karelModel, c) {
   var crossSize = canvasModel.getCornerSize() * Const.CROSS_FRACTION;
   var cornerSize = canvasModel.getCornerSize();

	for (var rIndex = 0; rIndex < karelModel.getNumRows(); rIndex++) {
		for (var cIndex = 0; cIndex < karelModel.getNumCols(); cIndex++) {
			

			var squareLeft = KarelView.getCornerX(canvasModel, cIndex);
			var squareTop = KarelView.getCornerY(canvasModel, rIndex);
			var squareColor = karelModel.getSquareColor(rIndex, cIndex);

			if (squareColor != null) {
				c.fillStyle = squareColor;
				c.fillRect(squareLeft, squareTop, cornerSize, cornerSize);
			} else {				
				
				if (crossSize > Const.MIN_CROSS_SIZE) {
					var x = squareLeft + (cornerSize - crossSize)/2;
					var y = squareTop + (cornerSize - crossSize)/2;
					c.drawImage(karelImages.cross, x, y, crossSize, crossSize);
				} else {
					var x = squareLeft + (cornerSize)/2;
					var y = squareTop + (cornerSize)/2;
					var size = Math.max(1, crossSize/2);
					c.beginPath();
					c.arc(x, y, size, 0, Math.PI*2, true); 
					c.closePath();
					c.fillStyle = 'blue';
					c.fill();
				}
			}
		}
	}
}

KarelView.drawBackground = function(canvasModel, karelModel, c) {
   if (typeof karelImages.cross == "undefined" || karelImages.cross == null) {
		alert('image loading fail!');
	}
	KarelView.drawBorder(canvasModel, c);
   KarelView.drawCorners(canvasModel, karelModel, c);
   KarelView.drawBeepers(canvasModel, karelModel, c);
}


KarelView.drawWalls = function(canvasModel, karelModel, c) {
   var cornerSize = canvasModel.getCornerSize();
   var wallThickness = cornerSize * Const.WALL_THICKNESS_FRACTION;
	if (wallThickness < 2) wallThickness = 2;
	if (wallThickness > 3) wallThickness = 3;
	c.fillStyle = "#000";

	for (var rIndex = 0; rIndex < karelModel.getNumRows(); rIndex++) {
		for (var cIndex = 0; cIndex < karelModel.getNumCols(); cIndex++) {

			if (karelModel.hasTopWall(rIndex, cIndex)) {
				var x = KarelView.getCornerX(canvasModel, cIndex) - wallThickness/2;
				var y = KarelView.getCornerY(canvasModel, rIndex) - wallThickness/2;
				c.fillRect(x, y, cornerSize + wallThickness, wallThickness);
			} 

			if (karelModel.hasRightWall(rIndex, cIndex)) {
				var x = KarelView.getCornerX(canvasModel, cIndex + 1) - wallThickness/2;
				var y = KarelView.getCornerY(canvasModel, rIndex) - wallThickness/2;
				c.fillRect(x, y, wallThickness, cornerSize + wallThickness);
			} 
		}
	}
}

KarelView.draw = function(canvasModel, karelModel, c) {
   KarelView.drawBackground(canvasModel, karelModel, c);
   KarelView.drawKarel(canvasModel, karelModel, c);
   KarelView.drawWalls(canvasModel, karelModel, c);
}
