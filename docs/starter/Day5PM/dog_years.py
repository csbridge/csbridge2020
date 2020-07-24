"""
File: dog_years.py
------------------
Converts human years to dog years.
"""

DOG_YEARS_PER_HUMAN_YEAR = 7

def compute_dog_years(human_years):
    # TODO: Delete the `return -1` line before starting to write your own code.
    ## YOUR CODE HERE ##


    ## END YOUR CODE ##
    return -1  # Delete this line


def main():
    user_input = int(input("Enter an age in human years: "))
    while user_input != 0:
        if user_input < 0:
            print("Sorry, please enter a positive number or 0 to exit")
        else:
            ## YOUR CODE HERE ##

            ## END YOUR CODE ##
            pass

        user_input = int(input("Enter an age in human years: "))


if __name__ == "__main__":
    main()
