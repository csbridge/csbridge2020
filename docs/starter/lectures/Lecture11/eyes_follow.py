"""
File: eyes_follow.py
--------------------
Draw half a head, the eyes follow the cursor.
"""

from graphics import Canvas


def main():
    canvas = Canvas()
    draw_head(canvas)
    draw_eye_shape(canvas, True)
    draw_eye_shape(canvas, False)
    left_pupil = get_drawn_pupil(canvas, True)
    right_pupil = get_drawn_pupil(canvas, False)

    while True:
        cursor_x = canvas.get_mouse_x()
        if canvas.mouse_is_on_canvas():
            move_pupils(canvas, cursor_x, left_pupil, right_pupil)
        canvas.update()

    canvas.mainloop()


def draw_head(canvas):
    head = canvas.create_oval(canvas.get_canvas_width() / 8, canvas.get_canvas_height() / 2,
                              canvas.get_canvas_width() * 7 / 8, canvas.get_canvas_height() * 3 / 2)
    canvas.set_fill_color(head, 'grey')


def draw_eye_shape(canvas, eye_is_left):
    if eye_is_left:
        eye_shape = canvas.create_oval(canvas.get_canvas_width() * 3 / 9, canvas.get_canvas_height() * 2 / 3,
                                       canvas.get_canvas_width() * 4 / 9, canvas.get_canvas_height())
    else:
        eye_shape = canvas.create_oval(canvas.get_canvas_width() * 5 / 9, canvas.get_canvas_height() * 2 / 3,
                                       canvas.get_canvas_width() * 6 / 9, canvas.get_canvas_height())
    canvas.set_fill_color(eye_shape, 'white')


def get_drawn_pupil(canvas, pupil_is_left):
    if pupil_is_left:
        pupil = canvas.create_oval(canvas.get_canvas_width() * 7 / 18, canvas.get_canvas_height() * 9 / 12,
                                       canvas.get_canvas_width() * 8 / 18, canvas.get_canvas_height() * 11 / 12)
    else:
        pupil = canvas.create_oval(canvas.get_canvas_width() * 11 / 18, canvas.get_canvas_height() * 9 / 12,
                                       canvas.get_canvas_width() * 12 / 18, canvas.get_canvas_height() * 11 / 12)
    canvas.set_fill_color(pupil, 'black')
    return pupil


def move_pupils(canvas, x, left_pupil, right_pupil):
    ratio = x / canvas.get_canvas_width()
    canvas.move_to(left_pupil, canvas.get_canvas_width() * (6+ratio) / 18, canvas.get_canvas_height() * 9 / 12)
    canvas.move_to(right_pupil, canvas.get_canvas_width() * (10+ratio) / 18, canvas.get_canvas_height() * 9 / 12)


if __name__ == '__main__':
    main()