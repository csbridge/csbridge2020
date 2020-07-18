"""
File: starterstff
---------------
Draw a red and white target symbol in the center of the screen.
"""

from graphics import Canvas

# The sizes of the concentric circles
BIG_CIRCLE_RADIUS = 150
MEDIUM_CIRCLE_RADIUS = 100
SMALL_CIRCLE_RADIUS = 50


#################################### Main #####################################
def main():
    canvas = Canvas()
    canvas.set_canvas_title("Target")

    # TODO: your code here
    # Make sure to use methods!

    canvas.mainloop()


#################################### Start #####################################
if __name__ == '__main__':
    main()
