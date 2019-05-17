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
		// your code here...
	}
	
	public String formatIntToString(int x) {
		return "" + x;
	}

}
