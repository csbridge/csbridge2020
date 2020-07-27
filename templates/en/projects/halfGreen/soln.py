"""
File: half_green.py
-------------------
Draws circles randomly, where circles in the top-right half are green
and circles in the bottom-left half are blue.
"""

import random
import time
from graphics import Canvas

CANVAS_WIDTH = 500
CANVAS_HEIGHT = 500
SIZE = 20

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("Half Green")

    for i in range(1000):
        x = random.randint(0, canvas.get_canvas_width() - SIZE)
        y = random.randint(0, canvas.get_canvas_height() - SIZE)

        circle = canvas.create_oval(x, y, x + SIZE, y + SIZE)
        canvas.set_color(circle, get_color(x, y))

        canvas.update()
        time.sleep(0.002)

    canvas.mainloop()

def get_color(x, y):
    if is_green(x, y):
        return "green"
    return "blue"

def is_green(x, y):
    return x > y

if __name__ == "__main__":
    main()
