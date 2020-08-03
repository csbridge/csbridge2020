"""
File: rolldice.py
--------------------
An example simulating rolling two dice
"""
import random

NUM_SIDES = 6
def main():
    die1 = random.randint(1, NUM_SIDES)
    die2 = random.randint(1, NUM_SIDES)
    total = die1 + die2
    print('Dice have ' + str (NUM_SIDES) + 'sides each.')
    print('First die: ' + str(die1))
    print('Second die: ' + str(die2))
    print('Total of two dice: ' + str(total))


# This provided line is required at the end of a Python file
# to call the main() function.
if __name__ == '__main__':
    main()
