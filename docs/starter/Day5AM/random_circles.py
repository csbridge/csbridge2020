"""
File: random_circles.py
-------------------
Draws 10 random circles such that each circle is on the screen.
"""

import random
from graphics import Canvas

# The number of circles to draw
NUM_CIRCLES = 10

def main():
    """
    You should write your code between the two lines written
    already that set up the canvas.
    You should replace this comment with a better, more descriptive one.
    """
    canvas = Canvas()
    canvas.set_canvas_title("Random Circles")

    # TODO: your code here

    canvas.mainloop()

# call the function
if __name__ == '__main__':
    main()
