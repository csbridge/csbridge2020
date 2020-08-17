"""
File: robot_face.py
-------------------
Draws an awesome robot face with eyes and a mouth, using functions.
It also includes the text "Robot Face" at the top of the window.
"""

from graphics import Canvas

# The dimensions of the robot face
FACE_WIDTH = 300
FACE_HEIGHT = 350

# The diameter of each robot eye
EYE_DIAMETER = 70

# The distance from the top of the head to the top of the eyes
EYE_Y_OFFSET = 40

# The distance between the left eye and right eye
EYE_X_SEPARATION = 40

# The dimensions of the robot mouth
MOUTH_WIDTH = 150
MOUTH_HEIGHT = 30

# The distance from the top of the head to the top of the mouth
MOUTH_Y_OFFSET = 200

# The distance from the top of the screen to the center of the text
LABEL_Y = 40


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Robot Face")

    draw_head(canvas)
    draw_mouth(canvas)
    draw_eyes(canvas)
    draw_label(canvas)

    canvas.mainloop()


def draw_head(canvas):
    """
    Draws a yellow rectangle in the center of the screen representing the head
    for the robot.
    """
    x = (canvas.get_canvas_width() - FACE_WIDTH) / 2
    y = (canvas.get_canvas_height() - FACE_HEIGHT) / 2
    head = canvas.create_rectangle(x, y, x + FACE_WIDTH, y + FACE_HEIGHT)
    canvas.set_fill_color(head, "yellow")


def draw_mouth(canvas):
    """
    Draws the mouth as a black rectangle at the appropriate offset from the top of the face,
    centered horizontally.
    """
    head_x = (canvas.get_canvas_width() - FACE_WIDTH) / 2
    head_y = (canvas.get_canvas_height() - FACE_HEIGHT) / 2

    mouth_x = head_x + (FACE_WIDTH - MOUTH_WIDTH) / 2

    # mouth offset is from top of the head
    mouth_y = head_y + MOUTH_Y_OFFSET

    mouth = canvas.create_rectangle(mouth_x, mouth_y,
                                    mouth_x + MOUTH_WIDTH, mouth_y + MOUTH_HEIGHT)
    canvas.set_fill_color(mouth, "black")


def draw_eyes(canvas):
    """
    Draws both eyes as filled ovals at the appropriate offset from the top of the face,
    centered horizontally and spaced apart according to EYE_X_SEPARATION.
    """
    head_y = (canvas.get_canvas_height() - FACE_HEIGHT) / 2

    # eye offset is from the top of the head
    eye_y = head_y + EYE_Y_OFFSET

    eye_x = canvas.get_canvas_width() / 2 - EYE_X_SEPARATION / 2 - EYE_DIAMETER
    draw_eye(canvas, eye_x, eye_y, "blue")

    eye_x += EYE_DIAMETER + EYE_X_SEPARATION
    draw_eye(canvas, eye_x, eye_y, "green")


def draw_eye(canvas, x, y, color):
    """
    Draws an eye (a circle) with top-left corner at the specified location, and with the
    specified fill color.  The eye is EYE_DIAMETER big.
    """
    eye = canvas.create_oval(x, y, x + EYE_DIAMETER, y + EYE_DIAMETER)
    canvas.set_fill_color(eye, color)


def draw_label(canvas):
    """
    Draws a "Robot Face" text label on the screen centered horizontally, in large font.
    """
    label = canvas.create_text(canvas.get_canvas_width() / 2, LABEL_Y, "Robot Face")
    canvas.set_font(label, "Times New Roman", 44)


if __name__ == "__main__":
    main()
