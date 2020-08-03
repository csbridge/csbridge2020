"""
File: find_pi.py
--------------------
Find the value of pi by throwing random darts at a unit circle inscribed in
a square. The fraction that land in the circle should equal pi / 4.
"""

# Needed to generate random numbers
import random

# Needed for sqrt
import math

# The number of darts to throw
NUM_DARTS = 20000000


def main():
    print("This program takes a bit of time to run - thanks for your patience!")

    num_in_circle = 0
    for i in range(NUM_DARTS):
        """
        get a random x and y coordinate between (-1, -1) and (1, 1)
        (imagine the center of the circle is (0, 0))
        """
        x = random.uniform(-1, 1)
        y = random.uniform(-1, 1)

        """
        test if the dart landed in the circle by calculating the length
        of the hypotenuse of the triangle created at this point.
        The radius of the circle is 1, so if the distance is more than 1
        it is outside the circle.
        """
        dist = math.sqrt(x * x + y * y)
        if dist <= 1:
            num_in_circle += 1

    # Approximate pi
    fraction = num_in_circle / NUM_DARTS
    pi = fraction * 4
    print(pi)


if __name__ == '__main__':
    main()
