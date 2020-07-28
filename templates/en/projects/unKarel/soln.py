from karel.stanfordkarel import *

"""
File: un_karel.py
------------------------
This program makes Karel builds houses, as work for the UN.
"""

def main():
    while front_is_clear():
        move()
        if beepers_present():
            build_house()

def build_house():
    """
    Constructs a single house centered around Karel's current position.
	  You can assume that there is a beeper present at the start state.
	  At the end of the function, Karel will be facing east on the bottom-
	  right corner of the house.
    """
    pick_beeper()
    turn_around()
    move()
    turn_right()
    place_three()
    turn_right()
    move()
    turn_right()
    place_three()
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
    Places three beepers in a row and moves three times!
    """
    for i in range(3):
        put_beeper()
        move()

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
