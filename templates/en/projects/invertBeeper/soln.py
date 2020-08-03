from karel.stanfordkarel import *

"""
File: invert_beeper.py
------------------------
Invert all the beepers so that, where there was a beeper previously 
there is no beeper... and where there was no beeper previously, there is a 
beeper.
"""


def main():
    # There is always at least one row in the world
    invert_row()
    return_to_west()

    # Invert any remaining rows
    while left_is_clear():
        go_to_next_row()
        invert_row()
        return_to_west()


def go_to_next_row():
    """
    Karel moves up one row.  Assumes that there is a row above Karel,
    and that Karel is facing east.  After this function finishes, 
    Karel will be one row above its original position, facing east.
    """
    turn_left()
    move()
    turn_right()


def invert_row():
    """
    Invert a single row. At the start, Karel should be facing east from
    the west side of the row. After Karel should be facing east from the
    right side of the same row, and all beepers in the row will be inverted
    (e.g. no beeper -> beeper, beeper -> no beeper).
    """
    while front_is_clear():
        invert_beeper()
        move()
    invert_beeper()


def invert_beeper():
    """
    Inverts the beeper configuration on a square. If there was previously
    a beeper, it is picked up. If there was previously no beeper, a beeper
    is placed.
    """
    if beepers_present():
        pick_beeper()
    else:
        put_beeper()


def return_to_west():
    """
    Karel turns around and goes back to the wall in that direction.
    After this function, Karel will be facing the same direction as
    it originally was.
    """
    turn_around()
    while front_is_clear():
        move()
    turn_around()


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
