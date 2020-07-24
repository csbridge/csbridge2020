"""
File: medicine.py
-------------------
This program creates unique and hard-to-predict numbers that can
be put on packages of real medicine. People who buy the medicine
can text message the number on their package to tell if it's real.
"""

import random

NUM_PACKAGES = 1000

def main():
    """
    Main ideas:
    (1) Generate prefix of strictly increasing numbers for uniqueness
    (2) Generate completely random 5-digit suffix
    """

    base_prefix = random.randint(10000, 99999-NUM_PACKAGES)
    increment = 1
    for i in range(NUM_PACKAGES):
      suffix = random.randint(10000, 99999)
      increment += 1
      prefix = base_prefix + increment
      print(str(prefix) + str(suffix))


if __name__ == '__main__':
    main()
