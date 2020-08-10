"""
File: checkerboard.py
---------------------
This program draws a checkerboard that is as high as the canvas.
"""

from graphics import Canvas

SQUARE_SIZE = 10
SQUARES = 8


def main():
    canvas = Canvas()
    black = True
    y = 0
    while y * SQUARE_SIZE <= canvas.get_canvas_height():
        for x in range(SQUARES):
            draw_square(canvas, x, y, black)
            black = not black
        black = not black
        y += 1
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
