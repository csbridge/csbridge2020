"""
File: draw_trees.py
----------------
This program draws several trees on a canvas.
"""

from graphics import Canvas

# These constants tell the graphics canvas how big to be.  You can ignore them.
CANVAS_WIDTH = 800
CANVAS_HEIGHT = 400

TRUNK_WIDTH = 20  # The width of each tree trunk. Use this!
TRUNK_HEIGHT = 80  # The height of each tree trunk. Use this!
LEAVES_RADIUS = 30  # The radius of the tree "leaf". Use this!


def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    canvas.set_canvas_title("Draw Trees")

    draw_tree(canvas, 50, 150)
    draw_tree(canvas, 100, 300)
    draw_tree(canvas, 500, 200)
    draw_tree(canvas, 300, 250)
    draw_tree(canvas, 700, 310)

    canvas.mainloop()


def draw_tree(x, y):
    """
    The draw_tree method draws a tree with the base of its trunk
    centered at the provided (x, y) position.
    """
    # TODO: Your code here


if __name__ == "__main__":
    main()
