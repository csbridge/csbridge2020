from karel.stanfordkarel import *

"""
File: invert_beeper.py
------------------------
Invert all the beepers so that, where there was a beeper previously 
there is no beeper... and where there was no beeper previously, there is a 
beeper.
"""

def main():
    invert_row()
    return_to_west()
    while left_is_clear():
        turn_left()
        move()
        turn_right()
        invert_row()
        return_to_west()

def invert_row():
    """
    Invert a single row. At the start, Karel should be facing east from
	  the west side of the row. After Karel should be facing east from the
	  east side of the same row, and all beepers in the row will be inverted.
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
    Turn around and go back to the wall that you came from!
    """
    turn_around()
    while front_is_clear():
        move()
    turn_around()

def turn_around():
    turn_left()
    turn_left()

def turn_right():
    turn_left()
    turn_left()
    turn_left()

# There is no need to edit code beyond this point
if __name__ == "__main__":
    run_karel_program()
