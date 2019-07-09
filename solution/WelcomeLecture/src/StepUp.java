import stanford.karel.*;

public class StepUp extends Karel {
	
	public void run() {
		move();
		pickBeeper();
		turnLeft();
		move();
		
		turnRight();
		
		move();
		putBeeper();
		move();
	}
	
	private void turnRight() {
		turnLeft();
		turnLeft();
		turnLeft();
	}

}
