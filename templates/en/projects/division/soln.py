"""
File: division.py
-------------------
This program shows various division functions.
"""


def main():
    show_info(50, 5)
    show_info(99, 5)
    show_info(73, 7)


def show_info(value, divisor):
    """
    Prints out information about the given value with the given divisor,
    including whether the value is even or odd, what the integer division result
    of value / divisor is, and what the remainder of that operation is.
    """
    print("value = " + str(value))
    print("    is odd? " + str(is_odd(value)))
    print("    value / " + str(divisor)
          + " = " + str(divide(value, divisor))
          + " remainder " + str(remainder(value, divisor)))


def is_odd(value):
    """
    Returns True if value is odd, False otherwise.
    """
    return (value % 2) == 1


def divide(value, divisor):
    """
    Performs integer division for value / divisor.
    """
    return value // divisor


def remainder(value, divisor):
    """
    Returns remainder of the integer division for value / divisor.
    """
    return value % divisor


if __name__ == '__main__':
    main()
