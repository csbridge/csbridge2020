import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;


public class Countdown extends GraphicsProgram {
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
		/* YOUR CODE HERE */
		// Animation loop.
		cleanup();
	}
	
	/*
	 * Create a countdownLabel and center it.
	 * **ALSO** set up your countdown variable!!
	 * 
	 * To center a large label:
	 * 		label.setFont("Consolas-200");
	 *		double labelX = (getWidth() - countdownLabel.getWidth())/2;
	 *		double labelY = (getHeight() + countdownLabel.getAscent())/2;
	 *		add(label, labelX, labelY);
	 * GLabel positioning: https://stanford.edu/~stepp/cppdoc/GLabel-class.html
	 */
	public void setup() {

	}
	
	/*
	 * Helps you change your countdown number to a string for your label.
	 */
	public String formatIntToString(int x) {
		if (x < 10) {
			return "0" + countdown;
		} else {
			return "" + countdown;
		}
	}
	
	/*
	 * Time's Up!
	 */
	public void cleanup() {

	}

}
