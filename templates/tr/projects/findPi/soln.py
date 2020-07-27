"""
File: Find Pi
--------------------
Find the value of pi by throwing random darts at a unit circle inscribed in
a square. The fraction that land in the circle should equal pi / 4.
"""

import random
import math

# The number of darts to throw
NUM_DARTS = 20000000

def main():
    print("This program takes quite a while to run, so go do something and come back.")
    num_in_circle = 0
    for i in range(NUM_DARTS):

        # get a random x, y in a 2x2
        x = random.uniform(-1, 1)
        y = random.uniform(-1, 1)

        # test if the dart landed in the circle.
        dist = math.sqrt(x * x + y * y)
        if dist <= 1:
            num_in_circle += 1

    fraction = num_in_circle / NUM_DARTS
    pi = fraction * 4
    print(pi)

if __name__ == '__main__':
    main()
