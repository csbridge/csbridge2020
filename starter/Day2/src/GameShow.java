

import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;

/**
 * Program: Game Show
 * -------------
 * Maybe you will win a big prize!
 */
public class GameShow extends ConsoleProgram {

	public void run() {
		
		int a = 5;
		int b = 20;
		println("" + b + a); 
		
		// This is to make the font larger
		setFont("Courier-24");
		
		// 0. Print instructions
		println("Welcome to the CSBridge Game Show!");
		println("Chose door 1, 2 or 3 and win a prize.");
		println("Be careful. If the program crashes, no");
		println("prize for you.");
		println("----------------------------------------");
		
		// 1. Get a door number from the user
		int doorChoice = readInt("choose a door: ");
		while(doorChoice < 1 || doorChoice > 3) {
			println("chose a door number between 1 and 3");
			doorChoice = readInt("choose a door: ");
		}
		
		// 2. Open the door
		double prize = 0;
		if(doorChoice == 1) {
			prize = 95/100 * 100 + 5;
		} 
		if(doorChoice == 2) {
			prize = 10;
		}
		if(doorChoice == 3) {
			prize = 8;
			prize = prize + 12;
		}
		
		// 3. Display the prize
		println("You win: " + prize + " TL");

	}
}