"""
File: nested-for.py
-------------------
This program prints the values of index variables of two nested for-loops.
"""


def main():
    for i in range(2):
        print(str(i) + ":", end='')
        for j in range(2):
            print(j, end='')
        print()


if __name__ == '__main__':
    main()
