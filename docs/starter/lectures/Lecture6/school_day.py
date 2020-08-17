"""
This program tells whether go to school or not for a particular day.
"""

MONDAY = 1
TUESDAY = 2
WEDNESDAY = 3
THURSDAY = 4
FRIDAY = 5
SATURDAY = 6
SUNDAY = 7


def main():
    print("Should I go to school?")
    day = int(input("Enter a day: "))
    if MONDAY <= day <= FRIDAY:  # day is between Monday and Friday
        print("School day")
    elif day == SATURDAY or day == SUNDAY:  # day is either Saturday or Sunday
        print("Weekend!")
    else:
        print(str(day) + " is not a day!")


if __name__ == '__main__':
    main()