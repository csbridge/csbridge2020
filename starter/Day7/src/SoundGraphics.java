import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.MouseEvent;
import java.util.ArrayList;

import javax.swing.JButton;

import acm.graphics.GMath;
import acm.graphics.GRect;
import acm.program.*;


public class SoundGraphics extends GraphicsProgram{

	private static final double C = 130.81 * 2;  // C note frequency
	private static final double D = 146.83 * 2;  // D note frequency
	private static final double E = 164.81 * 2;  // E note frequency
	private static final double G = 196.00 * 2;  // G note frequency
	private static final double B = 123.47 * 2;  // B note frequency
	private static final double A = 220.00 * 2;  // A note frequency

	private static final int NUM_ROWS = 5;
	private static final int NUM_COLS = 20;
	private static final int SQUARE_SIZE = 60;
	public static final int APPLICATION_HEIGHT = SQUARE_SIZE * NUM_ROWS + 40;
	public static final int APPLICATION_WIDTH = SQUARE_SIZE * NUM_COLS;

	private static final int NOTE_LENGTH = Audio.SAMPLES_PER_SECOND / 2;

	public void run() {
		// your code here...

	}

}
