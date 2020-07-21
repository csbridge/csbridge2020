"""
File: brickbreaker.py
----------------
YOUR DESCRIPTION HERE
"""

from graphics import Canvas
import time
import random

# How big is the playing area?
CANVAS_WIDTH = 600      # Width of drawing canvas in pixels
CANVAS_HEIGHT = 800     # Height of drawing canvas in pixels

# Constants for the bricks
N_ROWS = 8              # How many rows of bricks are there?
N_COLS = 10             # How many columns of bricks are there?
SPACING = 5             # How much space is there between each brick?
BRICK_START_Y = 50      # The y coordinate of the top-most brick
BRICK_HEIGHT = 20       # How many pixels high is each brick
BRICK_WIDTH = (CANVAS_WIDTH - (N_COLS+1) * SPACING ) / N_COLS

# Constants for the ball and paddle
BALL_SIZE = 40
PADDLE_Y = CANVAS_HEIGHT - 40   # The y coordinate of the paddle
PADDLE_HEIGHT = 20
PADDLE_WIDTH = 80

# Constants for the game
NTURNS = 3                      # The number of turns overall

def main():
    """
    You should write your code between the two lines written
    already that set up the canvas.
    You should replace this comment with a better, more descriptive one.
    """
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("Breakout")

    # TODO: your code here

    canvas.mainloop()


# There is no needt to edit code beyond this point

if __name__ == '__main__':
    main()
