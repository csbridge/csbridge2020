"""
File: checkerboard.py
---------------------
This program draws a checkerboard.
"""

from graphics import Canvas

SQUARE_SIZE = 60
SQUARES = 8


def main():
    canvas = Canvas()
    black = True
    for y in range(SQUARES):
        for x in range(SQUARES):
            draw_square(canvas, x, y, black)
            black = not black
        black = not black
    canvas.mainloop()


def draw_square(canvas, x, y, black):
    square = canvas.create_rectangle(x * SQUARE_SIZE, y * SQUARE_SIZE, (x+1) * SQUARE_SIZE, (y+1) * SQUARE_SIZE)
    if black:
        color = 'black'
    else:
        color = 'white'
    canvas.set_color(square, color)


if __name__ == '__main__':
    main()
