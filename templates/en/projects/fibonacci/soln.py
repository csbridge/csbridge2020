"""
File: Fibonacci
--------------------
This program lists the terms in the Fibonacci sequence up to
a constant MAX_TERM_VALUE, which is the largest Fibonacci term
the program will display.
"""

# Defines the largest term to display
MAX_TERM_VALUE = 10000

def main():
    print("This program lists the Fibonacci sequence.")
    t1 = 0
    t2 = 1
    while t1 <= MAX_TERM_VALUE:
        print(t1)
        t3 = t1 + t2
        t1 = t2
        t2 = t3

if __name__ == '__main__':
    main()
