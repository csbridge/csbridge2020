"""
File: starterstff
---------------
This program draws a red and white target symbol in the center of the screen.
"""

from graphics import Canvas

# The sizes of the concentric circles
BIG_CIRCLE_RADIUS = 150
MEDIUM_CIRCLE_RADIUS = 100
SMALL_CIRCLE_RADIUS = 50


#################################### Main #####################################
def main():
    canvas = Canvas()
    canvas.set_canvas_title("Target")

    make_centered_circle(canvas, BIG_CIRCLE_RADIUS, "red")
    make_centered_circle(canvas, MEDIUM_CIRCLE_RADIUS, "white")
    make_centered_circle(canvas, SMALL_CIRCLE_RADIUS, "red")

    canvas.mainloop()


def make_centered_circle(canvas, radius, color):
    """
    Draws a centered circle with the given radius and color on the canvas.
    """
    circle = canvas.create_oval(canvas.get_canvas_width() / 2 - radius,
                                canvas.get_canvas_height() / 2 - radius,
                                canvas.get_canvas_width() / 2 + radius,
                                canvas.get_canvas_height() / 2 + radius)
    canvas.set_fill_color(circle, color)
    canvas.set_outline_color(circle, color)


#################################### Start #####################################
if __name__ == '__main__':
    main()
