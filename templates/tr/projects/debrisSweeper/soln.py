"""
File: debris_sweeper.py
-------------------
Puts a random collection of debris (ovals) on the screen
and then allows the user to click and remove the debris.
"""

import random
from graphics import Canvas

# minimum and maximum size of a piece of debris
MIN_DEBRIS_SIZE = 50
MAX_DEBRIS_SIZE = 150

# number of pieces of debris
NUM_DEBRIS_PIECES = 100

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
    for i in range(NUM_DEBRIS_PIECES):
        create_single_debris_piece(canvas)

def create_single_debris_piece(canvas):
    width = random.uniform(MIN_DEBRIS_SIZE, MAX_DEBRIS_SIZE)
    height = random.uniform(MIN_DEBRIS_SIZE, MAX_DEBRIS_SIZE)
    x = random.uniform(0, canvas.get_canvas_width() - width)
    y = random.uniform(0, canvas.get_canvas_height() - height)

    piece = canvas.create_oval(x, y, x + width, y + height)
    canvas.set_color(canvas.get_random_color())


def remove_debris(canvas, x, y):
    item = canvas.find_closest(x, y)
    if item is not None:
        canvas.delete(item)

if __name__ == "__main__":
    main()
