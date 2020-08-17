"""
File: checkerboard.py
---------------------
This program draws a square of a checkerboard.
"""

from graphics import Canvas

SQUARE_SIZE = 60
SQUARES = 8


def main():
    canvas = Canvas()
    draw_square(canvas, True)
    canvas.mainloop()


def draw_square(canvas, black):
    square = canvas.create_rectangle(0, 0, SQUARE_SIZE, SQUARE_SIZE)
    if black:
        color = 'black'
    else:
        color = 'white'
    canvas.set_color(square, color)


if __name__ == '__main__':
    main()
