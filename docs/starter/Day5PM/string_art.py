"""
File: string_art.py
-------------------
Draws a curve using straight lines.
"""

from graphics import Canvas

# The size of the screen
CANVAS_WIDTH = 400
CANVAS_HEIGHT = 400

# The number of pixels between endpoints of the line
LINE_SPACING = 20

# The number of lines we will have to draw
NUM_LINES = APPLICATION_WIDTH // LINE_SPACING

def main():
    """
    You should write your code between the two lines written
    already that set up the canvas.
    You should replace this comment with a better, more descriptive one.
    """
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("String Art")

    # TODO: your code here

    canvas.mainloop()

# call the function
if __name__ == '__main__':
    main()
