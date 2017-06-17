import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;

public class Fibonacci extends ConsoleProgram {
	
	public void run() {
		fibonacci(60);
		fibonacci(500);
	}
	
	private void fibonacci(int max_term) {
		int t1 = 0;
		int t2 = 1;
		while (t1 < max_term) {
			println(t1);
			int t3 = t1 + t2;
			t1 = t2;
			t2 = t3;
		}

	}
}
