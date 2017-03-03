import acm.graphics.*;
import acm.program.GraphicsProgram;
import java.awt.Color;

public class DrawPeople extends GraphicsProgram {

	public void run() {
		drawPerson(50, 150);
		drawPerson(100, 300);
		drawPerson(500, 200);
		drawPerson(300, 250);
		drawPerson(700, 310);
	}

	private void drawPerson(int x, int y) {
		GRect body = new GRect(20, 80);
		body.setColor(Color.BLACK);
		body.setFilled(true);
		add(body, x - body.getWidth()/2, y - body.getHeight());
		
		GRect arms = new GRect(40, 40);
		arms.setColor(Color.BLACK);
		arms.setFilled(true);
		add(arms, x - arms.getWidth()/2, y - 60);
		
		GOval head = new GOval(40, 40);
		head.setColor(Color.BLUE);
		head.setFilled(true);
		add(head, x - 20, y - 100);
	}
}