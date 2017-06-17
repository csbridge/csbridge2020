import acm.graphics.*;
import acm.program.*;
import acm.util.RandomGenerator;

import java.awt.*;
import java.awt.event.MouseEvent;
import java.util.ArrayList;

public class CenteredLabel extends GraphicsProgram {
		
	public void run() {
		drawLabel("Coding Rocks!");
	}
	
	private void drawLabel(String labelText) {
		GLabel label = new GLabel(labelText);
		label.setFont("SansSerif-28");
		double x = (getWidth() - label.getWidth()) / 2;
		double y = (getHeight() + label.getAscent()) / 2;
		label.setLocation(x, y);
		add(label);
	}
}
