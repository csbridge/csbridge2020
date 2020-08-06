def main():
    number = int(input("Enter a number: "))
    correct = not number < 0 and number <= 2020 or number > 2019 and number != 2021
    print(correct)


if __name__ == '__main__':
    main()