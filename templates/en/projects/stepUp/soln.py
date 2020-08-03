from karel.stanfordkarel import *

"""
File: step_up.py
------------------------
Your first example Karel program. Have Karel pick up the beeper in front
of it and place it on top of the ledge.
(This is a comment. Your computer will ignore it.)
"""


def main():
    """
    When you start your program, this code will be executed.
    """
    move()
    pick_beeper()
    turn_left()
    move()
    turn_right()
    move()
    put_beeper()
    move()


def turn_right():
    """
    Defines a new command called turn_right that makes
    Karel turn right by turning left 3 times.
    """

    # this is a single-line comment. Computers ignore it.
    turn_left()
    turn_left()
    turn_left()


# There is no need to edit code beyond this point

if __name__ == "__main__":
    run_karel_program()
