"""
File: average.py
-------------------
This program contains an implementation of an average
function that takes in two inputs and returns their average.
The main program calls this function several times with different
inputs and prints out the results.
"""


def main():
    print(average(4, 5))
    print(average(10, 2))
    print(average(-4.1, 9.8))


def average(a, b):
    """
    Takes in two inputs and returns their average.
    """
    return (a + b) / 2


if __name__ == '__main__':
    main()
