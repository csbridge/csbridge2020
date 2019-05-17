/*
 * File: Karel.js
 * --------------
 * This file defines the Karel class, but also includes a set of
 * definitions that are common to all files in the JSKarel package.
 */

/*
 * Class: Karel
 * ------------
 * The Karel class encapsulates the properties that pertain to the
 * robot itself.
 */

function Karel() {
   this.pt = new Point(1, 1);
   this.dir = EAST;
   this.nBeepers = 0;
   this.world = null;
}

Karel.prototype.toString = function() {
   return "Karel @ " + this.pt + " " + this.dir;
}

/* Karel instructions */

Karel.instructions = {
   move: 1, turnLeft: 1, putBeeper: 1, pickBeeper: 1,
   turnRight: 2, turnAround: 2, paintCorner: 2
};

Karel.prototype.move = function() {
   if (this.frontIsBlocked()) throw new Error("Karel is blocked");
   this.pt = Karel.adjacentCorner(this.pt, this.dir);
}

Karel.prototype.turnLeft = function() {
   this.dir = Direction.leftFrom(this.dir);
}

Karel.prototype.turnRight = function() {
   this.dir = Direction.rightFrom(this.dir);
}

Karel.prototype.turnAround = function() {
   this.dir = Direction.opposite(this.dir);
}

Karel.prototype.putBeeper = function() {
   if (this.getBeepersInBag(this.pt) == 0) {
      throw new Error("No beepers in bag");
   }
   this.setBeepersInBag(DECREMENT);
   this.world.setBeepersOnCorner(this.pt, INCREMENT);
};

Karel.prototype.pickBeeper = function() {
   if (this.world.getBeepersOnCorner(this.pt) == 0) {
      throw new Error("No beepers on corner");
   }
   this.setBeepersInBag(INCREMENT);
   this.world.setBeepersOnCorner(this.pt, DECREMENT);
};

Karel.prototype.paintCorner = function() {
   throw new Error("The paintCorner instruction is not yet implemented");
};

/* Karel predicates */

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

Karel.prototype.frontIsClear = function() {
   return !this.world.checkWall(this.pt, this.dir);
};

Karel.prototype.frontIsBlocked = function() {
   return this.world.checkWall(this.pt, this.dir);
};

Karel.prototype.leftIsClear = function() {
   return !this.world.checkWall(this.pt, Direction.leftFrom(this.dir));
};

Karel.prototype.leftIsBlocked = function() {
   return this.world.checkWall(this.pt, Direction.leftFrom(this.dir));
};

Karel.prototype.rightIsClear = function() {
   return !this.world.checkWall(this.pt, Direction.rightFrom(this.dir));
};

Karel.prototype.rightIsBlocked = function() {
   return this.world.checkWall(this.pt, Direction.rightFrom(this.dir));
};

Karel.prototype.beepersPresent = function() {
   return this.world.getBeepersOnCorner(this.pt) > 0;
};

Karel.prototype.noBeepersPresent = function() {
   return this.world.getBeepersOnCorner(this.pt) == 0;
};

Karel.prototype.beepersInBag = function() {
   return this.getBeepersInBag() > 0;
};

Karel.prototype.noBeepersInBag = function() {
   return this.getBeepersInBag() == 0;
};

Karel.prototype.facingNorth = function() {
   return this.dir === NORTH;
};

Karel.prototype.notFacingNorth = function() {
   return this.dir !== NORTH;
};

Karel.prototype.facingEast = function() {
   return this.dir === EAST;
};

Karel.prototype.notFacingEast = function() {
   return this.dir !== EAST;
};

Karel.prototype.facingSouth = function() {
   return this.dir === SOUTH;
};

Karel.prototype.notFacingSouth = function() {
   return this.dir !== SOUTH;
};

Karel.prototype.facingWest = function() {
   return this.dir === WEST;
};

Karel.prototype.notFacingWest = function() {
   return this.dir !== WEST;
};

Karel.prototype.random = function(p) {
   if (p === undefined) p = 0.50;
   return Math.random() < p;
};

/* Karel methods */

Karel.prototype.getBeepersInBag = function() {
   return this.nBeepers;
}

Karel.prototype.setBeepersInBag = function(n) {
   if (n == INCREMENT) {
      if (this.nBeepers != INFINITY) {
         this.nBeepers++;
      }
   } else if (n == DECREMENT) {
      if (this.nBeepers != INFINITY && this.nBeepers != 0) {
         this.nBeepers--;
      }
   } else {
      this.nBeepers = n;
   }
};

Karel.prototype.getLocation = function() {
   return this.pt;
};

Karel.prototype.setLocation = function(pt) {
   this.pt = pt;
};

Karel.prototype.getDirection = function() {
   return this.dir;
};

Karel.prototype.setDirection = function(dir) {
   this.dir = dir;
};

/* Class methods */

Karel.adjacentCorner = function(pt, dir) {
   switch (dir) {
    case NORTH: return new Point(pt.x, pt.y + 1);
    case EAST:  return new Point(pt.x + 1, pt.y);
    case SOUTH: return new Point(pt.x, pt.y - 1);
    case WEST:  return new Point(pt.x - 1, pt.y);
   }
   throw "Internal error: Illegal direction value " + dir;
};

/* Global constants */

var INFINITY = 100000000;
var INCREMENT = -1;
var DECREMENT = -2;
