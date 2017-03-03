import acm.program.*;
import acm.graphics.*;
import acm.util.*;

import java.awt.Color;
import java.awt.event.*;
import java.util.ArrayList;

public class BouncingBalls extends GraphicsProgram {
	private static final double BALL_SIZE = 20;
	private static final double N_BALLS = 50;
	
	private ArrayList<GOval> balls;
	private ArrayList<Double> ballVx;
	private ArrayList<Double> ballVy;
	private RandomGenerator rg = new RandomGenerator();
	
	public void run() {
		createBalls();
		while(true) {
			animateBalls();
			pause(10);
		}
	}

	private void animateBalls() {
		for(int i = 0; i < N_BALLS; i++) {
			GOval ball = balls.get(i);
			if(ball.getX() > getWidth() || ball.getX() < 0) {
				reflectX(i);
			}
			if(ball.getY() > getHeight() || ball.getY() < 0) {
				reflectY(i);
			}
			ball.move(ballVx.get(i), ballVy.get(i));
		}
	}

	private void reflectY(int i) {
		ballVy.set(i, -ballVy.get(i));
	}

	private void reflectX(int i) {
		ballVx.set(i, -ballVx.get(i));
	}

	private void createBalls() {
		balls = new ArrayList<GOval>();
		ballVx = new ArrayList<Double>();
		ballVy = new ArrayList<Double>();
		for(int i = 0; i < N_BALLS; i++) {
			double x = rg.nextDouble(0, getWidth() - BALL_SIZE);
			double y = rg.nextDouble(0, getHeight()- BALL_SIZE);
			
			double vx = rg.nextDouble(1, 3);
			double vy = rg.nextDouble(1, 3);
			
			GOval ball = new GOval(x, y, BALL_SIZE, BALL_SIZE);
			ball.setFilled(true);
			ball.setColor(rg.nextColor());
			add(ball);
			balls.add(ball);
			ballVx.add(vx);
			ballVy.add(vy);
		}
	}

	
}
