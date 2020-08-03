from karel.stanfordkarel import *

"""
File: beeper_line.py
------------------------------
Places a row of beepers on the bottom row of Karel's world.
Works with any size world.
"""


def main():
    while front_is_clear():
        put_beeper()
        move()

    """
    the line below is necessary to place the final beeper.
    the number of times Karel moves is one less than the number
    of times Karel places a beeper (if the world is five squares
    wide, we place 5 beepers, but only move 4 times).
    """
    put_beeper()


# There is no need to edit code beyond this point

if __name__ == "__main__":
    run_karel_program()
