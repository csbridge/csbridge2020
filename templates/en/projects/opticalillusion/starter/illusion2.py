"""
File: illusion2.py
----------------
Warning: This is an extension! You should only do it if
you finish Illusion1.
"""

from graphics import Canvas

# These constants tell the graphics canvas how big to be.  You can ignore them.
CANVAS_WIDTH = 800
CANVAS_HEIGHT = 500

ROW_HEIGHT = 50
NUM_ROWS = 10


#################################### Main #####################################
def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("Illusion 2")

    # TODO: your code here
    # Make sure to use methods!

    canvas.mainloop()


#################################### Start #####################################
if __name__ == '__main__':
    main()
