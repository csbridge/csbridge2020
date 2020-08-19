"""
File: colored_shapes.py
-------------------
A program that adds shapes at random locations on the canvas.  The user can specify both
the type of shape and the color to use via interactors.
"""

from graphics import Canvas
import random

# The min and max dimensions for the shapes added to the canvas.
MIN_SHAPE_SIZE = 10
MAX_SHAPE_SIZE = 50


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Colored Shapes")

    # Create the interactors (text field and 2 buttons)
    canvas.create_text_field("Color", Canvas.TOP)
    canvas.create_button("Create Oval", Canvas.TOP)
    canvas.create_button("Create Rectangle", Canvas.TOP)

    while True:
        button_clicks = canvas.get_new_button_clicks()
        for button_click in button_clicks:

            # Get the contents of the color text field
            color = canvas.get_text_field_text("Color")

            # Create the shape corresponding to the button clicked, of the specified color
            if button_click == "Create Oval":
                create_random_oval_with_color(canvas, color)
            elif button_click == "Create Rectangle":
                create_random_rectangle_with_color(canvas, color)

        canvas.update()

    canvas.mainloop()


def create_random_oval_with_color(canvas, color):
    """
    Creates an oval with a random size and location on the canvas, with the given color.
    """
    width = random.randint(MIN_SHAPE_SIZE, MAX_SHAPE_SIZE)
    height = random.randint(MIN_SHAPE_SIZE, MAX_SHAPE_SIZE)
    x = random.randint(0, canvas.get_canvas_width() - width)
    y = random.randint(0, canvas.get_canvas_height() - height)

    # Create with given color
    oval = canvas.create_oval(x, y, x + width, y + height)
    canvas.set_color(oval, color)


def create_random_rectangle_with_color(canvas, color):
    """
    Creates a rectangle with a random size and location on the canvas, with the given color.
    """
    width = random.randint(MIN_SHAPE_SIZE, MAX_SHAPE_SIZE)
    height = random.randint(MIN_SHAPE_SIZE, MAX_SHAPE_SIZE)
    x = random.randint(0, canvas.get_canvas_width() - width)
    y = random.randint(0, canvas.get_canvas_height() - height)

    # Create with given color
    rect = canvas.create_rectangle(x, y, x + width, y + height)
    canvas.set_color(rect, color)


if __name__ == '__main__':
    main()
