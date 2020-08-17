def main():
    wishes = int(input("How long is your wish list? "))
    wish_list = []
    for i in range(wishes):
        wish = input("Enter your wish: ")
        wish_list.append(wish)
    # do something with your wishes
    for i in range(len(wish_list)):
        wish_remembered = wish_list[i]
        print("Your wish is " + wish_remembered)


if __name__ == '__main__':
    main()
