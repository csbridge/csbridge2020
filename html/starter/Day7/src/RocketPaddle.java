import acm.program.*;
import acm.graphics.*;
import acm.util.*;

import java.awt.Color;
import java.awt.event.*;
import java.util.ArrayList;

public class RocketPaddle extends GraphicsProgram {
	
	// constants
	public static final int APPLICATION_HEIGHT = 600;
	private static final double BALL_SIZE = 10;
	private static final int PADDLE_Y = APPLICATION_HEIGHT - 50;
	private static final int PADDLE_WIDTH = 100;
	private static final int PADDLE_HEIGHT = 20;
	
	// the list of rockets
	private ArrayList<GOval> rocketList;
	private GRect paddle;
	
	public void run() {
		rocketList = new ArrayList<GOval>();
		createPaddle();
		addMouseListeners();
		while(true) {
			animateRockets();
			pause(2);
		}
	}
	
	public void mouseMoved(MouseEvent e){
		double x = e.getX() - PADDLE_WIDTH/2;
		paddle.setLocation(x, PADDLE_Y);
	}
	
	public void mousePressed(MouseEvent e) {
		double x = e.getX();
		double y = PADDLE_Y;
		GOval r = new GOval(x, y, BALL_SIZE, BALL_SIZE);
		r.setFilled(true);
		r.setColor(Color.BLUE);
		
		// add the rocket to the screen
		add(r);
		
		// add the rocket to the list
		rocketList.add(r);
	}

	private void animateRockets() {
		// loop over list backwards so that we can safely remove
		// from the list.
		for(int i = rocketList.size() - 1; i >= 0; i--) {
			GOval oval = rocketList.get(i);
			
			// move the rocket
			oval.move(0, -5);
			
			// remove the rocket?
			if(oval.getY() < 0) {
				remove(rocketList.get(i));
				rocketList.remove(i);
			}
		}
	}
	
	private void createPaddle() {
		paddle = new GRect(0, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT);
		paddle.setFilled(true);
		add(paddle);
	}
}
