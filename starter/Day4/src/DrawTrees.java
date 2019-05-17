import acm.graphics.*;
import acm.program.GraphicsProgram;
import java.awt.Color;

public class DrawTrees extends GraphicsProgram {

	private static final int TRUNK_WIDTH = 20;
	private static final int TRUNK_HEIGHT = 20;
	private static final int LEAVES_RADIUS = 30;
	
	public void run() {
		drawTree(50, 150);
		drawTree(100, 300);
		drawTree(500, 200);
		drawTree(300, 250);
		drawTree(700, 310);
	}

	/** 
	 * Method: Draw Tree
	 * -----------------
	 * The draw tree method draws a tree with the base of 
	 * its trunk centered at the provided (x, y) position:
	 */
	private void drawTree(int x, int y) {
		// your code here...
	}
}