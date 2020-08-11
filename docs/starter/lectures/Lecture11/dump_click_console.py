"""
File: dump_click_console.py
---------------------------
This program waits for the first click and writes the mouse coordinates in the console.
"""

from graphics import Canvas


def main():
    canvas = Canvas()

    canvas.wait_for_click()

    click_x_coord = canvas.get_mouse_x()
    click_y_coord = canvas.get_mouse_y()

    print(click_x_coord, click_y_coord)


if __name__ == '__main__':
    main()
