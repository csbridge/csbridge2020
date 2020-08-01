"""
File: divisible.py
-------------------
This program shows various division functions.
"""
def main():
    divisor = 5
    show_info(50, divisor)

    show_info(99, divisor)

    divisor = 7
    show_info(73, divisor)

def show_info(value, divisor):
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
    Performs integer division.
    """
    return value // divisor

def remainder(value, divisor):
    """
    Returns remainder of integer division.
    """
    return value % divisor



if __name__ == '__main__':
    main()
