
// Karel World class	
function KarelWorld(appWidth, appHeight) {

	var BORDER_SIZE = 2;
	var CROSS_FRACTION = 0.25;
	var MIN_CROSS_SIZE = 5;

	var cornerSize;

	var rows, cols;

	var worldWidth, worldHeight;

	var top, left;
	var bottom, right;

	var beepers, virtualBeepers;
	var walls;

	var squareColors = new Array();

	this.draw = function(c) {
		if (typeof karelImages.cross == "undefined" || karelImages.cross == null) {
			alert('image loading fail!');
		}
		c.fillStyle = "#000";
		c.fillRect(left - BORDER_SIZE, top - BORDER_SIZE, worldWidth + BORDER_SIZE*2, worldHeight + BORDER_SIZE*2);

		c.fillStyle = "#fff";
		c.fillRect(left, top, worldWidth, worldHeight);

		var crossSize = cornerSize * CROSS_FRACTION;

		for (var rIndex = 0; rIndex < rows; rIndex++) {
			for (var cIndex = 0; cIndex < cols; cIndex++) {
				

				var squareLeft = left + cIndex * cornerSize;
				var squareTop = top + rIndex * cornerSize;
				var squareColor = squareColors[rIndex][cIndex];

				if (squareColor != null) {
					c.fillStyle = squareColor;
					c.fillRect(squareLeft, squareTop, cornerSize, cornerSize);
				} else {				
					
					if (crossSize > MIN_CROSS_SIZE) {
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
		beepers.draw(c, cornerSize);
	}

	this.drawWalls = function(c) {
		walls.draw(c, cornerSize);
	}

	this.loadWorld = function(worldText, karel) {

		var lines = worldText.split("\n");

		// get world dimension
		var dimensionTxt = lines[0];
		var dimensionStrings = lines[0].split(":");

		rows = parseInt(dimensionStrings[1]);
		cols = parseInt(dimensionStrings[2]);

		// reset variables
		cornerSize = Const.DEFAULT_CORNER_SIZE;
		worldWidth = cols * cornerSize;
		worldHeight = rows * cornerSize;

		var canvasWidth = appWidth - BORDER_SIZE * 2;
		var canvasHeight = appHeight - BORDER_SIZE * 2;
		if(worldWidth > canvasWidth || worldHeight > canvasHeight) {
			var xScale = canvasWidth / worldWidth;
			var yScale = canvasHeight / worldHeight;
			var maxScale = Math.min(xScale, yScale);
			worldWidth = worldWidth * maxScale;
			worldHeight = worldHeight * maxScale;
			cornerSize = cornerSize * maxScale;
		}

		top = (appHeight - worldHeight)/2;
		left = (appWidth - worldWidth)/2;

		bottom = top + worldHeight;
		right = left + worldWidth;

		beepers = new Beepers(rows, cols, left, top);
		virtualBeepers = new Beepers(rows, cols, left, top);
		walls = new Walls(rows, cols, left, top);

		for (var i = 0; i < rows; i++) {
			squareColors[i] = new Array();
			for (var j = 0; j < cols; j++) {
				squareColors[i][j] = null;
			}
		}

		karel.reset(rows - 1, 0);

		// load world details
		for (var i = 1; i < lines.length; i++) {
			loadLine(lines[i], karel);
		}

	}

	this.getCornerSize = function() {
		return cornerSize;
	}

	function loadLine(line, karel) {
		var elements = line.split(":");
		if (elements.length != 3) {
			return;
		}
		var key = elements[0];
		var v1 = parseInt(elements[1]);
		var v2 = parseInt(elements[2]);

		if (key == "karel")  {
			karel.reset(v1, v2);
		} else if (key == "top")  {
			walls.addTopWall(v1, v2);
		} else if (key == "right") {
			walls.addRightWall(v1, v2);
		} else if (key == "beeper") {
			beepers.putBeeper(v1, v2);
			virtualBeepers.putBeeper(v1, v2);
		}
	}

	this.isMoveValid = function(startX, startY, endX, endY) {
		if(endX < 0 || endX >= cols) return false;
		if(endY < 0 || endY >= rows) return false;
		
		if(startX + 1 == endX && walls.rightWall(startY, startX)) return false;
		if(startX - 1 == endX && walls.rightWall(endY, endX)) return false;

		if(startY + 1 == endY && walls.topWall(endY, endX)) return false;
		if(startY - 1 == endY && walls.topWall(startY, endX)) return false;

		return true;
	}

	this.putBeeper = function(r, c) {
		beepers.putBeeper(r, c);
	}

	this.putVirtualBeeper = function(r, c) {
		virtualBeepers.putBeeper(r, c);
	}

	this.pickBeeper = function(r, c) {
		beepers.pickBeeper(r, c);

	}

	this.paintCorner = function(r, c, color) {
		squareColors[r][c] = color;
	}

	this.pickVirtualBeeper = function(r, c) {
		if (virtualBeepers.beeperPresent(r, c)) {
			virtualBeepers.pickBeeper(r, c);
		}
	}

	this.virtualBeeperPresent = function(r, c) {
		return virtualBeepers.beeperPresent(r, c);
	}

	this.beeperPresent = function(r, c) {
		return beepers.beeperPresent(r, c);
	}

	this.getRows = function() {
		return rows;
	}

	this.getCols = function() {
		return cols;
	}

	this.getBottom = function() {
		return bottom;
	}

	this.getTop = function() {
		return top;
	}

	this.getLeft = function() {
		return left;
	}
}


