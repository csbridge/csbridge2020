"""
File: favorite_number.py
-------------------
This program prompts the user to guess its secret number and gives the user
hints until they guess it correctly.
"""

# The number the user must guess
FAVORITE_NUMBER = 88


def main():
    print("Try and guess my favorite number (between 0 and 100)")

    guess = int(input("Guess: "))
    while guess != FAVORITE_NUMBER:

        # Give them feedback on whether their guess was too low or too high
        if guess < FAVORITE_NUMBER:
            print("Too low")
        else:
            print("Too high")

        guess = int(input("Guess: "))

    print("Good job!")


if __name__ == '__main__':
    main()
