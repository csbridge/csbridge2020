"""
File: target.py
-------------------
Draws a target.
"""

from graphics import Canvas

BIG_CIRCLE_RADIUS = 150
MEDIUM_CIRCLE_RADIUS = 100
SMALL_CIRCLE_RADIUS = 50

def main():
    """
    You should write your code between the two lines written
    already that set up the canvas.
    You should replace this comment with a better, more descriptive one.
    """
    canvas = Canvas()
    canvas.set_canvas_title("Target")

    # TODO: your code here

    canvas.mainloop()

# call the function
if __name__ == '__main__':
    main()
