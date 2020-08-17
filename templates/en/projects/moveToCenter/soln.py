"""
File: move_to_center.py
-------------------
Moves a square from the left edge to the center of the screen.
"""

import time
from graphics import Canvas

SQUARE_SIZE = 100
ANIMATION_DELAY_SECONDS = 0.02
SQUARE_MOVE_AMOUNT = 2


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Move to Center")

    # draw a square on the left side of the screen, centered
    y = (canvas.get_canvas_height() - SQUARE_SIZE) / 2
    square = canvas.create_rectangle(0, y, SQUARE_SIZE, y + SQUARE_SIZE)
    canvas.set_color(square, "black")

    # move horizontally until we get to the center
    target_x = (canvas.get_canvas_width() - canvas.get_width(square)) / 2
    while canvas.get_left_x(square) < target_x:
        canvas.move(square, SQUARE_MOVE_AMOUNT, 0)
        time.sleep(ANIMATION_DELAY_SECONDS)
        canvas.update()

    canvas.mainloop()


if __name__ == "__main__":
    main()
