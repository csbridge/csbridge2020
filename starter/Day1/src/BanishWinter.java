import stanford.karel.*;


public class BanishWinter extends SuperKarel {

	public void run() {
		for(int i = 0; i < 4; i++) {
			moveToTree();
			fixTree();
		}
		
	}

	private void fixTree() {
		turnLeft();
		climbTree();
		turnRight();
		placeLeaves();
		turnRight();
		moveToWall();
		turnLeft();
	}
	
	public void moveToTree() {
		moveToWall();
	}
	
	public void moveToWall() {
		while(frontIsClear()) {
			move();
		}
	}

	public void climbTree() {
		while(leftIsBlocked()) {
			move();
		}
	}
	
	public void placeLeaves() {
		for(int i = 0; i < 4; i++) {
			putBeeper();
			move();
			turnLeft();
		}
		move();
	}

}
