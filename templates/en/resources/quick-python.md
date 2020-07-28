template: templates/en/resources/faqTemplate.ptl
title: Quick Python Reference

[TOC]

## How to run Python programs in Pycharm
To run a program in PyCharm, click the "Terminal" option at the bottom of the screen. To run any program, all you have to do is type the following command into the Terminal and hit "Enter":

* **Mac Users**: `python3 insert_name_here.py`
* **PC Users**: `py insert_name_here.py`

The terminal (also known as a **console**) will then print output and accept user text input, depending on how you write your program.

## Console Output
To print out something to the console:

    print("This is a message")

Note that `print( ... )` must have a `string` within the parentheses (remember, `string` can be thought of as a data type that stores text). To print out a message to the console that involves a variable that is an integer or float, you will need to *cast* the variable to a string using the function `str(...)`:

```
message = "This is a string"
print(message)                        # message is already a string variable
x = 5                                 # an int
print("The variable x is " + str(x))
pi = 3.14                             # a float
print("Pi is approximately " + str(pi))
```

Running the above code gives the below output:

```
This is a string
The variable x is 5
Pi is approximately 3.14
```

## Console Input
To get user input from the console, we use the ```input(..)``` function to store user input into a variable. In order to store user input into variables of different types (integers, floats, etc.), you need to **cast** the input before storing into your variable.

```
what_you_said = input("How are you doing? ")
print("You said: " + what_you_said)

radius = int(input("Enter an integer: "))
diameter = 2 * radius
print("diameter = " + str(diameter))
pi = float(input("Enter your best guess at pi: "))
circumference = pi*diameter
print("circumference = " + str(circumference))
```

Running the above code gives the below output (User input in blue):

<center>
<img
  src="{{pathToRoot}}img/resources/quick-python/input_demo.png"
  class="img-fluid mx-auto d-block"
  style="width: 55%"
  alt="Example output for console input. User inputs "Fine, thank you", then "4", then "3.1415926535323846" and the program computes the circumference of a circle with radius 4 and your estimate of pi.
/>
</center>

## Random

To generate random numbers, type `import random` at the top of your program, outside of any functions:

```
import random

def main():
    ...
```

You can then generate lots of random numbers as below. Let `lower = 0` and `upper = 10`:

```
x = random.randint(lower, upper)  # a random int in the range (lower, upper), inclusive
y = random.random()               # a random decimal number between 0 and 1
y = random.uniform(lower, upper)  # a random decimal number between lower and upper
```

You can also randomly choose an element from a list!

```
numbers = [10, 9, 20, 3, 4]
number = random.choice(numbers)   # picks a random element from numbers
```

To randomly pick a color, if you have a `canvas` variable:
```
canvas.get_random_color()
```
