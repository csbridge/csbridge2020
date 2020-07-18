"""
File: carbondating.py
------------------
This program runs carbon dating (how cool!)
First, it prints out a lookup table that maps the percent
of c14 remaining to the number of years the sample has been
dead for, for the first 20 half lives.

Then, it prompts the user to enter a percent of c14, and it
will output the age of that sample.  It will reprompt the user
until they enter -1, at which point the program will terminate.
"""
import math

C14_HALF_LIFE = 5700

def main():
	lookup_table()
	calculate_ages()

def lookup_table():
	'''
	Print out a table that maps the percent of c14
	remaining to the number of years the sample has
	been dead for, for the first 20 half lives.
	'''
	print("Carbon Dating Lookup Table")
	print("Percent C-14 Remaining: years passed")
	print("--------------------------")

	percent = 100.0
	for i in range(20):
		print(str(percent) + "%: " + str(i * C14_HALF_LIFE) + " years")
		percent /= 2

def calculate_ages():
	'''
	Continually prompt the user for a percentage of c14, and print
	out the age of that sample.  If the user enters -1 as the percentage,
	stop prompting.
	'''

	# Blank line for spacing
	print()

	percent = float(input("What percent of natural carbon-14 does your sample have? "))
	while percent != -1:
		print(str(percent) + " carbon-14...")
		age = (math.log(percent / 100) / math.log(0.5)) * C14_HALF_LIFE
		print("Your sample is " + str(age) + " years old.")
		print()

		percent = float(input("What percent of natural carbon-14 does your sample have? "))


if __name__ == '__main__':
    main()