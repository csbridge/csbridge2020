template: templates/en/projects/projectTemplate.ptl
title: Ascending Numbers
credit: Nick Troccoli

Ask the user to enter numbers _until they enter -1_, then print those numbers as well as whether or not those numbers are ascending (in increasing order).  Here's an example output:

```
> 1
> 4
> 9
> 16
> -1
1
4
9
16
Ascending!
```

And here is another one:

```
> 5
> 4
> 3
> 2
> -1
5
4
3
2
Not ascending
```

Note that the -1 is not included in the list of numbers - it is just to indicate when the user is done entering numbers.

## Milestone 1: Storing And Outputting Numbers
Store the numbers that the user entered in a list, until they enter -1.  Remember not to put the -1 in the list!  You should just stop asking them for input.  Then, print out the numbers they entered.

## Milestone 2: Is Ascending
Now we need to print out whether or not the list is in ascending order.  It would be nice if we had a function that could tell us, like this:

```
if is_ascending(my_list):
	# ...
else:
	# ...
```

So let's write one!  Write a function `is_ascending` that takes in a list of numbers as a parameter and returns whether or not the numbers in the list are in ascending order.  The function would look something like this:

```
def is_ascending(numbers):
	# TODO: return True if numbers is in ascending order, or False otherwise
```

It should iterate through the list and check that each pair of numbers is in the right order.  If any of them are in the wrong order, we know the list is not in ascending order, so we return `False`.  If we don't see any in the wrong order, it is ascending, and we return `True`!


## List Hints
To create a list of numbers use:

```
my_list = []
```

Recall that you can read an integer from the user using:

```
number = int(input(prompt))
```

To add an element to a list:

```
my_list.append(newValue)
```

To get an element from a list:

```
my_list[index]
```

To loop over all elements in a list:

```
for i in range(len(my_list)):
    # do something with my_list[i]
}

-- OR --

for elem in my_list:
	# do something with elem
```

To loop over some elements in a list:

```
for i in range(START, END):
	# do something with my_list[i]

e.g.

# Loops over all but the last element in the list
for i in range(0, len(my_list) - 1):
	# do something with my_list[i]
```