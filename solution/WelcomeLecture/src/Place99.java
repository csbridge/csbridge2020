

import stanford.karel.*;

public class Place99 extends Karel {
	
	public void run() {
		move();
		place9999();
		move();
	}
	
	// this new method places 99 beepers
	private void place9999() {
		for(int i = 0; i < 9999; i++) {
			putBeeper();
		}
	}

}
