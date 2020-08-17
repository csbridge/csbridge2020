"""
File: hole_puncher.py
---------------------
This program lets you click anywhere on the canvas to
"punch a hole" (e.g. draw a black circle there).
"""

from graphics import Canvas

HOLE_RADIUS = 10


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Hole Puncher")

    # animation loop
    while True:
        clicks = canvas.get_new_mouse_clicks()
        for click in clicks:
            draw_hole(canvas, click.x, click.y)
        canvas.update()

    canvas.mainloop()


def draw_hole(canvas, x, y):
    """
    Draws a circle on the canvas centered at the given location.
    """
    oval = canvas.create_oval(x - HOLE_RADIUS, y - HOLE_RADIUS,
                              x + HOLE_RADIUS, y + HOLE_RADIUS)
    canvas.set_color(oval, 'black')


if __name__ == "__main__":
    main()
