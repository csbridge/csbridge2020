import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;


public class BorderSnake extends GraphicsProgram {

	/** Width and height of application window in pixels */
    public static int APPLICATION_WIDTH = 500;
    public static int APPLICATION_HEIGHT = 500;
    
	/** Snake constants **/
	public static int SNAKE_LENGTH = 5; // blocks
	public static int SQUARE_LENGTH = 32;
	public static int SQUARE_GAP = 4; // separation between body parts of snake
	public static int NORTH = 0;
	public static int WEST = 1;
	public static int SOUTH = 2;
	public static int EAST = 3;
	
	/** Animation loop delay **/
	public static int DELAY = 200;
	
    /** Snake, an ArrayList of squares **/
	private ArrayList<GRect> snake;
	private int snakeDirection = EAST;
	
	public void run() {
		// your code goes here...
	}

	public void makeSnake() {
		// your code goes here...

	}
	
	public boolean frontIsClear() {

		// your code goes here...
		return false;
	}
	

	public void moveSnake() {
		// your code goes here...

	}

	public void turnLeft() {
		// your code goes here...
	}
	
}
