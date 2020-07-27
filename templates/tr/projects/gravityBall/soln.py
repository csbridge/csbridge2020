"""
File: gravity_ball.py
-------------------
A ball bounces as if due to gravity.
"""

import time
from graphics import Canvas

SIZE = 20
DELAY = 0.02    # 20 milliseconds
GRAVITY = 0.5
DAMPING = 0.7

def main():
    canvas = Canvas()
    canvas.set_canvas_title("Gravity Ball")

    # draw a ball on the top left corner
    ball = canvas.create_oval(0, 0, SIZE, SIZE)
    canvas.set_color(ball, "black")

    # variables for velocity
    vx = 3
    vy = 0

    while True:
        # update vy
        vy += GRAVITY

        # should the ball bounce?
        if (canvas.get_top_y(ball) > (canvas.get_canvas_height() - SIZE)) \
                    and (vy > 0):
            vy = vy * -DAMPING

        # move
        canvas.move(ball, vx, vy)

        # animation pause. refresh canvas
        time.sleep(DELAY)
        canvas.update()

    canvas.mainloop()

if __name__ == "__main__":
    main()
