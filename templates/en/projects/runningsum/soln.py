"""
File: runningsum.py
-------------------
This program reads in integers from the user
and then keeps outputting the sum of the entered values.
"""

def main():
    print("Enter numbers. I will show you the sum!")

    sum = 0
    while True:
        number = int(input("Please enter an integer: "))
        sum += number
        print("The current sum is: " + str(sum))

if __name__ == '__main__':
    main()