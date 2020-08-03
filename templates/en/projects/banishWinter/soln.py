from karel.stanfordkarel import *

"""
File: banish_winter.py
------------------------
Karel should add leaves to the top of each tree in the world
from left to right to spruce up campus for the spring.
The world is of width 9, but it may have any number of trees
of any height.
"""


def main():
    # world is 9 spaces wide, we start on 1
    for i in range(8):
        if front_is_clear():
            move()
        else:
            fix_tree()


def fix_tree():
    """
    Karel climbs to the top of one tree, adds leaves, and descends the
    other side of tree.  When this function is called, Karel is assumed to
    be facing east towards the bottom of the tree to fix, and when the function 
    is done Karel will be facing east immediately after the tree which has
    now been fixed.
    """
    turn_left()
    climb_tree()
    turn_right()
    place_leaves()
    turn_right()
    move_to_wall()
    turn_left()


def move_to_wall():
    """
    Moves in a straight line in the direction Karel is facing until a wall.
    """
    while front_is_clear():
        move()


def climb_tree():
    """
    Karel climbs a tree by moving as long as its right is blocked.
    After this function finishes, Karel will be facing the same direction
    as it was originally, but will be one space past the last square where
    its right was blocked.
    """
    while right_is_blocked():
        move()


def place_leaves():
    """
    Adds four leaves, in a square pattern to the top of a tree.
    Assumes Karel is facing east in the bottom left corner of the square
    it wants to make with beepers.  When the function finishes, Karel
    will be one square to the east facing east, standing on the bottom right
    corner of a newly-created square of beepers.
    """
    for i in range(4):
        put_beeper()
        move()
        turn_left()
    move()


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
