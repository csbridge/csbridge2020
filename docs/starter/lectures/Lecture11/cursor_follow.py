"""
File: cursor_follow.py
----------------------
Draw a circle that is following the cursor.
"""

from graphics import Canvas

DIAMETER = 100


def main():
    canvas = Canvas()
    circle = canvas.create_oval(0, 0, DIAMETER, DIAMETER)
    canvas.set_color(circle, 'green')
    while True:
        cursor_x = canvas.get_mouse_x()
        cursor_y = canvas.get_mouse_y()
        canvas.move_to(circle, cursor_x - DIAMETER / 2, cursor_y - DIAMETER / 2)
        canvas.update()


if __name__ == '__main__':
    main()
