/** 
 * Class: Karel
 * ------------
 * The Karel class is the controller (as in MVC) of Karel and
 * Karel's world. Karel is implemented using an underlying
 * KarelModel which is rendered using a static KarelView
 * draw method.
 */
function Karel(canvasModel) {

   var that = {};

   var karelModel = KarelModel();
   
	that.draw = function(c) {
	   KarelView.draw(canvasModel, karelModel, c);
	}

	that.move = function() {
      karelModel.move();
	}

	that.turnLeft = function() {
      karelModel.turnLeft();
	}

	that.turnRight = function() {
      karelModel.turnRight();
	}

	that.turnAround = function() {
      karelModel.turnAround();
	}

	that.paintCorner = function(color) {
      karelModel.paintCorner(color);
	}

	that.putBeeper = function() {
      karelModel.putBeeper();
	}

	that.pickBeeper = function() {
      karelModel.pickBeeper();
	}
	
   that.turnAround = function() {
      karelModel.turnAround();
   }

   that.paintCorner = function(color) {
      karelModel.paintCorner(color);
   }

	that.beepersPresent = function() {
		return karelModel.beeperPresent();
	}

	that.noBeepersPresent = function() {
		return !karelModel.beeperPresent();
	}

   that.frontIsClear = function() {
      return karelModel.frontIsClear();
	}

	that.frontIsBlocked = function() {
      return !karelModel.frontIsClear();
	}

	that.random = function(p) {
      var prob = 0.5;
      if (p != undefined) {
         prob = p;
      }
      return Math.random() > prob;
	}

	that.rightIsClear = function() {
		return karelModel.rightIsClear();
	}

	that.rightIsBlocked = function() {
		return !karelModel.rightIsClear();
	}

	that.leftIsClear = function() {
		return karelModel.leftIsClear();
	}

   that.leftIsBlocked = function() {
		return !karelModel.leftIsClear();
	}
	
	that.facingNorth = function() {
		return karelModel.facingNorth();	
	}

	that.notFacingNorth = function() {
		return !karelModel.facingNorth();	
	}

	that.facingSouth = function() {
		return karelModel.facingSouth();	
	}

	that.notFacingSouth = function() {
		return !karelModel.facingSouth();	
	}

	that.facingEast = function() {
		return karelModel.facingEast();	
	}

	that.notFacingEast = function() {
		return !karelModel.facingEast();	
	}

	that.facingWest = function() {
		return karelModel.facingWest();	
	}

	that.notFacingWest = function() {
		return !karelModel.facingWest();	
	}

   that.loadWorld = function(text, canvasModel) {
      karelModel.loadWorld(text, canvasModel);
   }

   that.getModel = function() {
      return karelModel;
   }

	return that;
}

Karel.instructions = {
   move: 1, turnLeft: 1, putBeeper: 1, pickBeeper: 1,
   turnRight: 2, turnAround: 2, paintCorner: 2
};

Karel.predicates = {
   frontIsClear:1, frontIsBlocked:1,
   leftIsClear:1, leftIsBlocked:1,
   rightIsClear:1, rightIsBlocked:1,
   beepersPresent:1, noBeepersPresent:1,
   beepersInBag:1, noBeepersInBag:1,
   facingNorth:1, notFacingNorth:1,
   facingEast:1, notFacingEast:1,
   facingSouth:1, notFacingSouth:1,
   facingWest:1, notFacingWest:1,
   cornerColorIs:2, random:2
};





