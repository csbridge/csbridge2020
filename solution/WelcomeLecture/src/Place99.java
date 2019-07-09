

import stanford.karel.*;

public class Place99 extends Karel {
	
	public void run() {
		move();
		for(int i = 0; i < 99; i++) {
			putBeeper();
		}
		move();
	}

}
