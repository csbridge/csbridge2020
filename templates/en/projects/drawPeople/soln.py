"""
File: draw_people.py
-------------------
Draws several people standing at specific (x, y) coordinates.
"""

from graphics import Canvas

BODY_WIDTH = 20
BODY_HEIGHT = 60
ARMS_WIDTH = 40
ARMS_HEIGHT = 40
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
    # body is centered horizontally at x
    # bottom of body should be at specified y
    body_y = y - BODY_HEIGHT
    body_x = x - BODY_WIDTH/2
    body = canvas.create_rectangle(body_x,
                                   body_y,
                                   body_x + BODY_WIDTH,
                                   body_y + BODY_HEIGHT)
    canvas.set_color(body, "black")

    # arms should be at same height as the body
    arms_x = x - ARMS_WIDTH/2
    arms = canvas.create_rectangle(arms_x,
                                   body_y,
                                   arms_x + ARMS_WIDTH,
                                   body_y + ARMS_HEIGHT)
    canvas.set_color(arms, "black")

    # bottom of head should be top of body
    head_y = body_y - HEAD_DIAMETER
    head_x = x - HEAD_DIAMETER/2
    head = canvas.create_oval(head_x, head_y,
                              head_x + HEAD_DIAMETER,
                              head_y + HEAD_DIAMETER)
    canvas.set_color(head, "blue")


if __name__ == "__main__":
    main()
