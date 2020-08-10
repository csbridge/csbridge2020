"""
File: checkerboard.py
---------------------
This program draws a line of a checkerboard.
"""

from graphics import Canvas

SQUARE_SIZE = 60
SQUARES = 8


def main():
    canvas = Canvas()
    black = True
    for x in range(SQUARES):
        draw_square(canvas, x, black)
        black = not black
    canvas.mainloop()


def draw_square(canvas, x, black):
    square = canvas.create_rectangle(x * SQUARE_SIZE, 0, (x + 1) * SQUARE_SIZE, SQUARE_SIZE)
    if black:
        color = 'black'
    else:
        color = 'white'
    canvas.set_color(square, color)


if __name__ == '__main__':
    main()
