import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;

public class Piglet extends ConsoleProgram {

	private RandomGenerator rgen = new RandomGenerator();

	public void run() {

	}

	/* Use this function to see if the user wants to roll again. It will return true if the user
	 * enters "yes" or "Yes". All other inputs will cause this function to return false.
	 */
	private boolean readUserInput(String prompt) {
		String response = readLine(prompt);
		return response.equals("yes") || response.equals("Yes");
	}
}
