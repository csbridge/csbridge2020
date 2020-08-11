"""
File: one_line_draw.py
----------------------
Simple drawing program for one line art.
"""

from graphics import Canvas


def main():
    canvas = Canvas()
    previous_x = -1
    previous_y = -1

    while True:
        canvas.wait_for_click()
        current_x = canvas.get_mouse_x()
        current_y = canvas.get_mouse_y()

        if previous_x >= 0:
            line = canvas.create_line(previous_x, previous_y, current_x, current_y)
            canvas.set_outline_width(line, 10)
            canvas.set_fill_color(line, 'green')

        canvas.update()

        previous_x = current_x
        previous_y = current_y


if __name__ == '__main__':
    main()
