"""
File: gravity_ball.py
-------------------
A ball bounces as if due to gravity.  Specifically, each frame the y velocity increases
downward to simulate gravity, and each time it bounces it loses some of its y velocity
to simulate damping.
"""

import time
from graphics import Canvas

BALL_DIAMETER = 20
ANIMATION_DELAY_SECONDS = 0.02

# The amount to add each frame to the y velocity to simulate the pull of gravity
GRAVITY = 0.5

# The amount by which to multiply the y velocity each time we bounce (simulates losing energy)
DAMPING = 0.7


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Gravity Ball")

    # draw a ball on the top left corner
    ball = canvas.create_oval(0, 0, BALL_DIAMETER, BALL_DIAMETER)
    canvas.set_color(ball, "black")

    # variables for velocity
    vx = 3
    vy = 0

    while True:
        # update vy
        vy += GRAVITY

        # should the ball bounce?
        if (canvas.get_top_y(ball) > (canvas.get_canvas_height() - canvas.get_height(ball))) and vy > 0:
            # Dampen the velocity and invert the velocity
            vy = vy * -DAMPING

        canvas.move(ball, vx, vy)
        time.sleep(ANIMATION_DELAY_SECONDS)
        canvas.update()

    canvas.mainloop()


if __name__ == "__main__":
    main()
