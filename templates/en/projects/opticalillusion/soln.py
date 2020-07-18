"""
File: optical_illusion.py
------------------------
This program draws two optical illusions - a checkerboard pattern and an off-checkerboard pattern.
"""

from graphics import Canvas


#################################### Main #####################################
def main():
    main_illusion1()
    main_illusion2()


######################### Illusion 1 ######################

# These constants tell the graphics canvas how big to be.  You can ignore them.
CANVAS_WIDTH_1 = 540
CANVAS_HEIGHT_1 = 430

SIZE = 100  # The size of each dimension of the square. use this!
GAP = 10  # The space between two squares. Use this!


def main_illusion1():
    canvas = Canvas(CANVAS_WIDTH_1, CANVAS_HEIGHT_1)
    canvas.set_canvas_title("Illusion 1")

    num_squares_x = int((CANVAS_WIDTH_1 + GAP) / (SIZE + GAP))
    num_squares_y = int((CANVAS_HEIGHT_1 + GAP) / (SIZE + GAP))

    for i in range(num_squares_x):
        for j in range(num_squares_y):
            draw_square1(canvas, i, j)

    canvas.mainloop()


def draw_square1(canvas, i, j):
    """
    Draws a black square at the given i, j coordinate in the grid of squares.
    E.g. (0, 0) draws the top-left square, (1, 0) draws the top second-from-left square, etc.
    """
    x = i * (SIZE + GAP)
    y = j * (SIZE + GAP)
    rect = canvas.create_rectangle(x, y, x + SIZE, y + SIZE)
    canvas.set_fill_color(rect, "black")


######################### Illusion 2 ######################
"""
Warning: This is an extension! You should only do it if
you finish Illusion1.
"""

# These constants tell the graphics canvas how big to be.  You can ignore them.
CANVAS_WIDTH_2 = 800
CANVAS_HEIGHT_2 = 500

ROW_HEIGHT = 50
NUM_ROWS = 10


def main_illusion2():
    canvas = Canvas(CANVAS_WIDTH_2, CANVAS_HEIGHT_2)
    canvas.set_canvas_title("Illusion 2")

    for i in range(NUM_ROWS):
        draw_row(canvas, i)

    canvas.mainloop()


def draw_row(canvas, i):
    """
    Draws a single illusion row of squares and the adjacent line.
    i is the y direction.  ROW_HEIGHT is also the square width.
    """
    canvas.create_line(0, i * ROW_HEIGHT, canvas.get_canvas_width(), i * ROW_HEIGHT)

    num_squares = int((canvas.get_canvas_width() + ROW_HEIGHT / 2) / (2 * ROW_HEIGHT))
    for j in range(num_squares):
        draw_square2(canvas, i, j)


def draw_square2(canvas, i, j):
    """
    Draws a black square at the given i, j coordinate in the grid of squares.
    E.g. (0, 0) draws the top-left square, (1, 0) draws the top second-from-left square, etc.
    """
    offset = (i % 3) * (ROW_HEIGHT / 4)
    x = offset + j * (2 * ROW_HEIGHT)
    y = i * ROW_HEIGHT
    rect = canvas.create_rectangle(x, y, x + ROW_HEIGHT, y + ROW_HEIGHT)
    canvas.set_fill_color(rect, "black")


#################################### Start #####################################
if __name__ == '__main__':
    main()
