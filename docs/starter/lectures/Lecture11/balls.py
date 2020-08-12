from graphics import Canvas
from time import sleep
import random

COLORS = ['black', 'white', 'blue', 'green', 'yellow', 'grey']


def add_ball(canvas, balls):
    diameter = random.randint(20, 70)
    ball = canvas.create_oval(0, 0,  diameter, diameter)
    color = COLORS[random.randint(0, len(COLORS)-1)]
    canvas.set_color(ball, color)
    balls.append(ball)


def main():
    canvas = Canvas()
    canvas.set_canvas_background_color('lime')
    balls = []
    add_ball(canvas, balls)
    while True:
        if random.randint(0, 100) > 98:
            add_ball(canvas, balls)
        animation_step(canvas, balls)
        stop_balls_out(canvas, balls)
        sleep(1/90)
        canvas.update()


def stop_balls_out(canvas, balls):
    balls_to_remove = []
    for ball in balls:
        if ball_is_out(canvas, ball):
            balls_to_remove.append(ball)
    for ball in balls_to_remove:
        balls.remove(ball)


def ball_is_out(canvas, ball):
    return canvas.get_left_x(ball) < 0 or canvas.get_left_x(ball) > canvas.get_canvas_width() \
           or canvas.get_top_y(ball) < 0 or canvas.get_top_y(ball) > canvas.get_canvas_height()


def animation_step(canvas, balls):
    for ball in balls:
        canvas.move(ball, random.randint(-1, 3), random.randint(-1, 4))


if __name__ == '__main__':
    main()
