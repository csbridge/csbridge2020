import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.MouseEvent;
import java.util.ArrayList;
import javax.swing.JButton;
import acm.graphics.GMath;
import acm.graphics.GRect;
import acm.program.ConsoleProgram;


public class SoundConsole extends ConsoleProgram{
	
	private static final double A = 110.00 * 2;  // A note frequency
	private static final double B = 123.50 * 2;  // B note frequency
	private static final double C = 130.81 * 2;  // C note frequency
	private static final double D = 146.83 * 2;  // D note frequency
	private static final double E = 164.81 * 2;  // E note frequency
	private static final double G = 196.00 * 2;  // G note frequency
	
	private static final int NOTE_LENGTH = Audio.SAMPLES_PER_SECOND / 4;

	public void run() {
		// Read this code, then replace it with your own.
		
		// Gets the list of numbers that represents a C note
		ArrayList<Double> example = Audio.getNoteSamples(C, NOTE_LENGTH);
		
		// Plays a list of numbers that represent sound.
		Audio.play(example);
		
		// Loads a list of notes for the song ode to joy
		ArrayList<String> songNotes = Audio.getNotes("odetojoy.txt");
	}

}
