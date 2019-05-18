// TODO: comment this program

import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;

import sun.misc.Cleaner;

/**
 * Draws a Mystery Square that changes color
 * -----------------------------------------
 * Really does what it says.
 */
public class MysterySquare extends GraphicsProgram {

    private static final int SIZE = 400;
    private static final int DELAY = 1000;

	private static RandomGenerator rg = new RandomGenerator();
	
	public void run() {
		// Draw a square in the center of the screen.
		GRect rect = new GRect(SIZE, SIZE);
		double x = (getWidth() - rect.getWidth()) / 2;
		double y = (getHeight() - rect.getHeight()) / 2;
		rect.setFilled(true);
		add(rect, x, y);
		
		// Change its color every second.
		while(true) {
			rect.setColor(rg.nextColor()); 
			pause(DELAY);
		}
	}
}