import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;


public class BorderBox extends GraphicsProgram {

	/** Width and height of application window in pixels */
    public static int APPLICATION_WIDTH = 500;
    public static int APPLICATION_HEIGHT = 500;
    
	/** Box constants **/
	public static int SQUARE_LENGTH = 32;
	public static int SQUARE_GAP = 4; // gaps between movement
	public static int NORTH = 0;
	public static int WEST = 1;
	public static int SOUTH = 2;
	public static int EAST = 3;
	
	/** Animation loop delay **/
	public static int DELAY = 200;
	
    /** Your box, a square **/
	private GRect box;
	private int boxDirection = EAST;
	
	public void run() {
		makeBox();
		
		// copy over your BorderKarel.java code
		/*** Make sure to change move() to moveBox()!!! ***/
		
	}

	public void makeBox() {
		// your code goes here...

	}
	
	public boolean frontIsClear() {
		// your code goes here...
		return false;
	}
	
	public void moveBox() {
		// your code goes here...

	}
	
	public void turnLeft() {
		// your code goes here...
	}
	
}
