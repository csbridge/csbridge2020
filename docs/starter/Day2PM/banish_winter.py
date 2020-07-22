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
    for i in range(8):      # world is 9 spaces wide, we start on 1
        if front_is_clear():
            move()
        else:
            fix_tree()

def fix_tree():
    """
    Climbs to the top of one tree, adds leaves, and descends
    other side of tree.  When this method is called, Karel is assumed to
    be facing east at the bottom of the tree to fix, and when the method
    is done Karel will be facing east immediately after the tree which has
    now been fixed.
    """
    turn_left()
    climb_tree()
    turn_right()
    place_leaves()
    turn_right()
    move_to_bottom()
    turn_left()

def move_to_bottom():
    """
    Moves in a straight line in the direction Karel is facing up to a wall.
    Used for moving from the top to the bottom of a tree.
    """
    while front_is_clear():
        move()

def climb_tree():
    """
    Move up to and one space past the end of a wall/tree trunk.
    """
    while right_is_blocked():
        move()

def place_leaves():
    """
    Adds four leaves, in the required pattern to the top of a tree.
    """
    for i in range(4):
        put_beeper()
        move()
        turn_left()
    move()

def turn_right():
    turn_left()
    turn_left()
    turn_left()

# There is no need to edit code beyond this point
if __name__ == "__main__":
    run_karel_program()
