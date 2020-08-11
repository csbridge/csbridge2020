"""
File: stamp_tool.py
-------------------
This program lets you move the mouse to move a "stamp" around the screen,
and wherever you click it "stamps" (adds a copy of the stamp shape) to that
location.
"""

from graphics import Canvas

STAMP_SIZE = 50


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Stamp Tool")

    stamp_tool = draw_stamp(canvas, canvas.get_mouse_x(), canvas.get_mouse_y(), 'blue')
    while True:
        clicks = canvas.get_new_mouse_clicks()
        for click in clicks:
            draw_stamp(canvas, click.x, click.y, 'black')

        # stamp tool should be topmost
        canvas.raise_to_front(stamp_tool)
        center_stamp(canvas, stamp_tool, canvas.get_mouse_x(), canvas.get_mouse_y())
        canvas.update()

    canvas.mainloop()


def draw_stamp(canvas, x, y, color):
    """
    Draws a stamp (rect) of the given color centered around the given location.
    Returns the rectangle drawn.
    """
    rect = canvas.create_rectangle(x - STAMP_SIZE / 2, y - STAMP_SIZE / 2,
                                   x + STAMP_SIZE / 2, y + STAMP_SIZE / 2)
    canvas.set_color(rect, color)
    return rect


def center_stamp(canvas, stamp, x, y):
    """
    Repositions the given stamp (rect) to be centered around the given location.
    """
    canvas.moveto(stamp, x - canvas.get_width(stamp) / 2, y - canvas.get_height(stamp) / 2)


if __name__ == "__main__":
    main()
