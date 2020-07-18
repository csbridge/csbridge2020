"""
File: illusion1.py
----------------
Draw a grid of black rectangles separated by white lines.
"""

from graphics import Canvas

# These constants tell the graphics canvas how big to be.  You can ignore them.
CANVAS_WIDTH = 540
CANVAS_HEIGHT = 430

SIZE = 100  # The size of each dimension of the square. use this!
GAP = 10  # The space between two squares. Use this!


#################################### Main #####################################
def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("Illusion 1")

    # TODO: your code here
    # Make sure to use methods!

    canvas.mainloop()


#################################### Start #####################################
if __name__ == '__main__':
    main()
