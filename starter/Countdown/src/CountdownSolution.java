import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;


public class CountdownSolution extends GraphicsProgram {
	/** Width and height of application window in pixels */
    public static int APPLICATION_WIDTH = 600;
    public static int APPLICATION_HEIGHT = 400;
    
    /** Total time, in seconds. **/
    public static int TOTAL_TIME = 10;
    /** Animation loop delay **/
    public static int DELAY = 1000;
    
    /** Class variables you'll need **/
    private GLabel countdownLabel;
    private int countdown;
    
	public void run() {
		setup();
		while (countdown > 0) {
			pause(DELAY);
			update();
		}
		cleanup();
	}
	
	/*
	 * GLabel positioning: https://stanford.edu/~stepp/cppdoc/GLabel-class.html
	 */
	public void setup() {
		countdown = TOTAL_TIME;
		countdownLabel = new GLabel(formatIntToString(countdown));
		countdownLabel.setFont("Consolas-200");
		double labelX = (getWidth() - countdownLabel.getWidth())/2;
		double labelY = (getHeight() + countdownLabel.getAscent())/2;
		add(countdownLabel, labelX, labelY);
	}
	
	public void update() {
		countdown -= 1;
		countdownLabel.setLabel(formatIntToString(countdown));
	}
	
	public String formatIntToString(int x) {
		if (x < 10) {
			return "0" + x;
		} else {
			return "" + x;
		}
	}
	
	public void cleanup() {
		remove(countdownLabel);
		GLabel finishLabel = new GLabel("Time's up!");
		finishLabel.setFont("Consolas-60");
		double labelX = (getWidth() - finishLabel.getWidth())/2;
		double labelY = (getHeight() + finishLabel.getAscent())/2;
		add(finishLabel, labelX, labelY);
	}

}
