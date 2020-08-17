"""
File: draw_people.py
-------------------
This program implements a function called draw_person that draws a graphical
person with its feet centered at a given (x, y) coordinate.  This program draws
multiple people on the canvas using this function.
"""

from graphics import Canvas


# Body dimensions
BODY_WIDTH = 20
BODY_HEIGHT = 60

# Arm dimensions
ARMS_WIDTH = 40
ARMS_HEIGHT = 40

# Head size
HEAD_DIAMETER = 40


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Draw People")

    draw_person(canvas, 50, 150)
    draw_person(canvas, 100, 300)
    draw_person(canvas, 500, 200)
    draw_person(canvas, 300, 250)
    draw_person(canvas, 700, 310)

    canvas.mainloop()


def draw_person(canvas, x, y):
    """
    Draws a graphical person with its feet centered at the given coordinate.
    The person is drawn with a green body, black arms on the sides (drawn as one
    rectangle), and a blue head).
    """

    body_top_left_y = y - BODY_HEIGHT

    """
    The arms are a single rectangle "behind" the body
    to appear as two separate rectangles.
    """
    arms_x = x - ARMS_WIDTH / 2
    arms = canvas.create_rectangle(arms_x,
                                   body_top_left_y,
                                   arms_x + ARMS_WIDTH,
                                   body_top_left_y + ARMS_HEIGHT)
    canvas.set_color(arms, "green")

    """
    The body is a single rectangle "in front of" the arms
    that stretches from the bottom of the person to its head.
    """
    body_top_left_x = x - BODY_WIDTH / 2
    body = canvas.create_rectangle(body_top_left_x,
                                   body_top_left_y,
                                   body_top_left_x + BODY_WIDTH,
                                   body_top_left_y + BODY_HEIGHT)
    canvas.set_color(body, "black")

    # The head is a blue oval on top of the body and arms.
    head_top_left_y = body_top_left_y - HEAD_DIAMETER
    head_top_left_x = x - HEAD_DIAMETER / 2
    head = canvas.create_oval(head_top_left_x,
                              head_top_left_y,
                              head_top_left_x + HEAD_DIAMETER,
                              head_top_left_y + HEAD_DIAMETER)
    canvas.set_color(head, "blue")


if __name__ == "__main__":
    main()
