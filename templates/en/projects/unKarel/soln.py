from karel.stanfordkarel import *

"""
File: un_karel.py
------------------------
This program makes Karel builds houses, as work for the UN.  Karel will
build a house on each spot marked by a beeper in the bottom row
of the world.
"""


def main():
    while front_is_clear():
        move()
        if beepers_present():
            build_house()


def build_house():
    """
    Constructs a single house centered around Karel's current position.
    Assumes that there is a beeper present at that location.
    At the end of the function, Karel will be facing east on the bottom-
    right corner of the house, one square to the east of Karel's original
    position.
    """

    # Build the left column of the house first
    pick_beeper()
    turn_around()
    move()
    turn_right()
    place_three()

    # Build the middle column of the house second
    turn_right()
    move()
    turn_right()
    place_three()

    # Build the right column of the house last
    turn_left()
    move()
    turn_left()
    place_three()
    turn_around()
    move_to_wall()
    turn_left()


def move_to_wall():
    """
    Move forward until Karel hits a wall.
    """
    while front_is_clear():
        move()


def place_three():
    """
    Places three beepers in a row and moves three times!  Assumes
    that there is enough space in front of Karel to move 3 times.
    After this function executes, Karel will be 3 spaces further
    in the direction it is facing, immediately after the last square
    where it put down a beeper.
    """
    for i in range(3):
        put_beeper()
        move()


def turn_around():
    """
    Karel turns 180 degrees - e.g. if Karel is facing east, now Karel will
    face west.  If Karel is facing north, Karel will now face south.
    """
    turn_left()
    turn_left()


def turn_right():
    """
    Karel turns right - e.g. if Karel is facing east, now Karel will face
    south.  If Karel is facing north, Karel will now face east.
    """
    for i in range(3):
        turn_left()


# There is no need to edit code beyond this point

if __name__ == "__main__":
    run_karel_program()
