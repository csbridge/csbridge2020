from karel.stanfordkarel import *

"""
File: place_100.py
------------------------
This program makes Karel place a pile of 100 beepers. Good times.
"""


def main():
    move()

    # This for loop will repeat the code inside 100 times.
    for i in range(100):
        put_beeper()

    move()


# There is no need to edit code beyond this point

if __name__ == "__main__":
    run_karel_program()
