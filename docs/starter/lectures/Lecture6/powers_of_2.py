"""
This program prints the powers of 2 up to 1024.
"""
MAX = 1024


def main():
    number = 1
    while number <= 1024:
        print(number)
        number *= 2


if __name__ == '__main__':
    main()