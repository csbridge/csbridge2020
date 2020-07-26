"""
File: move_to_center.py
-------------------
Moves a square from the left edge to the center of the screen.
"""

import time
from graphics import Canvas

SIZE = 100
DELAY = 0.1

def main():
    canvas = Canvas()
    canvas.set_canvas_title("Move to Center")

    x = 0
    y = (canvas.get_canvas_height() - SIZE)/2
    # draw a square on the left of the screen
    square = canvas.create_rectangle(x, y,
                                     x + SIZE, y + SIZE)
    canvas.set_color(square, "black")

    # move until we get to the center
    target_x = (canvas.get_canvas_width() - canvas.get_width(square))/2
    while canvas.get_left_x(square) < target_x:
        canvas.move(square, 5, 0)   # move 5 pixels to the right
        time.sleep(DELAY) # animation pause
        canvas.update()

    canvas.mainloop()

def get_color(x, y):
    if is_green(x, y):
        return "green"
    return "blue"

def is_green(x, y):
    return x > y

if __name__ == "__main__":
    main()
