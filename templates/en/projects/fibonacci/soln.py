"""
File: fibonacci.py
--------------------
This program lists the terms in the Fibonacci sequence up to
a constant MAX_TERM_VALUE, which is the largest Fibonacci term
the program will display.
"""

# Defines the largest term to display
MAX_TERM_VALUE = 10000


def main():
    print("This program lists the Fibonacci sequence.")
    current_term = 0
    next_term = 1

    while current_term <= MAX_TERM_VALUE:
        print(current_term)
        term_after_next = current_term + next_term
        current_term = next_term
        next_term = term_after_next


if __name__ == '__main__':
    main()
