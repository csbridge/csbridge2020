import stanford.karel.*;

public class BeeperLine extends SuperKarel {
	
	public void run() {
		while(frontIsClear()) {
			putBeeper();
			move();
		}
		putBeeper();
	}

}
