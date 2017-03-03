import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;

/**
 * Random Numbers
 * -----
 * Prints 1,000 random numbers between 0 and 100
 */
public class RandomNumbers extends ConsoleProgram {
	
	// A random number generator
	private RandomGenerator rg = new RandomGenerator();

	public void run() {
		// change this code to print 1000 random numbers
		// in the range 0 to 100.	
		int example = rg.nextInt(0, 10);
		println(example);	
	}
}
