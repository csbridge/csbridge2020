'''
File: piglet.py
--------------------
This program plays the 1-player dice game "Piglet". Each turn,
the player rolls a die - if it's a 1, then the game is over and
they get a score of 0. Otherwise, the value is added to their
total and the player chooses whether or not to roll again. The
player tries to get the highest score possible.
'''

import random

def main():
	print("Welcome to Piglet!")
	dice_sum = 0
	roll_again = True

	die = random.randint(1, 6)
	print("You rolled a " + str(die) + "!")

	# Loop until we roll a 1 or player doesn't want to re-roll.
	while die != 1 and roll_again:
		dice_sum += die
		roll_again = input("Roll again? ") == "yes"
		if roll_again:
			die = random.randint(1, 6)
			print("You rolled a " + str(die) + "!")

	if die == 1:
		dice_sum = 0

	print("You got " + str(dice_sum) + " points.")


if __name__ == '__main__':
    main()