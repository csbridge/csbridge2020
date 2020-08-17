"""
File: debris_sweeper.py
-------------------
Puts a random collection of debris (ovals) on the screen
and then allows the user to click and remove the debris.
"""

from graphics import Canvas
import random

# minimum and maximum size of a piece of debris
MIN_DEBRIS_SIZE = 50
MAX_DEBRIS_SIZE = 150

# number of pieces of debris
NUM_DEBRIS_PIECES = 2


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Debris Sweeper")

    create_debris(canvas)
    while True:
        clicks = canvas.get_new_mouse_clicks()
        for click in clicks:
            remove_debris(canvas, click.x, click.y)
        canvas.update()

    canvas.mainloop()


def create_debris(canvas):
    """
    Creates NUM_DEBRIS_PIECES pieces of "debris" (ovals) with random locations,
    sizes and colors.
    """
    for i in range(NUM_DEBRIS_PIECES):
        # Calculate a random location and size
        width = random.randint(MIN_DEBRIS_SIZE, MAX_DEBRIS_SIZE)
        height = random.randint(MIN_DEBRIS_SIZE, MAX_DEBRIS_SIZE)
        x = random.randint(0, canvas.get_canvas_width() - width)
        y = random.randint(0, canvas.get_canvas_height() - height)

        # Create with a random color
        piece = canvas.create_oval(x, y, x + width, y + height)
        canvas.set_color(piece, canvas.get_random_color())


def remove_debris(canvas, x, y):
    """
    Removes the debris (if any) at the given location.  If multiple pieces
    of debris are at this location, removes the one on the top.
    """
    item = canvas.find_element_at(x, y)
    if item:
        canvas.delete(item)


if __name__ == "__main__":
    main()
