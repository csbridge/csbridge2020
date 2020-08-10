"""
File: half_green.py
-------------------
Draws circles randomly, where circles in the top-right half are green
and circles in the bottom-left half are blue.
"""

from graphics import Canvas
import random
import time

# The size of the canvas
CANVAS_WIDTH = 500
CANVAS_HEIGHT = 500

# The diameter of each circle
CIRCLE_SIZE = 20

# The number of circles to draw
NUM_CIRCLES = 1000


def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("Half Green")

    # Draw 1000
    for i in range(NUM_CIRCLES):
        x = random.randint(0, canvas.get_canvas_width() - CIRCLE_SIZE)
        y = random.randint(0, canvas.get_canvas_height() - CIRCLE_SIZE)

        circle = canvas.create_oval(x, y, x + CIRCLE_SIZE, y + CIRCLE_SIZE)

        # Set both the fill and outline color to be either green or blue
        canvas.set_color(circle, get_color(x, y))

        canvas.update()
        time.sleep(0.002)

    canvas.mainloop()


def get_color(x, y):
    """
    Returns the name of the color the circle with top-left coordinate (x, y)
    should have.  Since (0, 0) is the top-left corner of the canvas, x increases
    as we go to the right, and y increases as we go down.  So the line y = x is
    the diagonal line from top-left to bottom right.  If y < x, the dot is above
    this line (in the top-right corner), so it's green.  If y >= x, the dot is at
    or below this line (in the bottom-left corner, so it's blue.
    """
    if x > y:
        return "green"
    return "blue"


if __name__ == "__main__":
    main()
