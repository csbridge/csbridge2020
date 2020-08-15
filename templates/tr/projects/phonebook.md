template: templates/tr/projects/projectTemplate.ptl
title: Phone Book
credit: Nick Troccoli

Write a program called Phonebook that lets the user keep track of phone numbers.  The program should use a dictionary to store phone numbers, and should allow the user to add numbers to the phone book and also lookup numbers in the phone book.  Here's a sample run of the program:

```
Welcome to Phonebook!  This program stores phone numbers
of contacts.  You can add a new number, get a number,
or quit ('add', 'lookup', 'quit').
Enter your command at the prompt.
> lookup
name? Nick
Nick not found.
> add
name? Nick
number? > 6666666666
> lookup
name? Nick
6666666666
> quit
```

Your program should be able to handle 3 commands: 'quit', 'lookup' and 'add'.  Quit should stop the program prompting the user and end the program.  Lookup should print out the number stored for that name.  If that name is not in the phone book, print an appropriate message.  Add should prompt the user for a name and number, and then should add them to the phone book.  If there was a previous entry with this same name, it should be overwritten.



## Hints
To create an empty dictionary, use:

```
my_dict = {}
```

To add an entry to a dictionary:

```
my_dict[key] = value
```

To get a value for a key in the dictionary:

```
my_dict[key]
```

To check if something is in the dictionary:

```
if key in my_dict:
	...
```

To loop over all elements in a dictionary:

```
for key in my_dict:
    # do something with key and my_dict[key]
}
```