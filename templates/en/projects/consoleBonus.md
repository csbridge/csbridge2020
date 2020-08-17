template: templates/en/projects/projectTemplate.ptl
title: Console Bonus

Handout: [Python Reader](https://codeinplace2020.github.io/pythonreader/en/intro/)<br/>
Handout: [Python Reference]({{pathToRoot}}/en/resources/quick-python.html)<br/>

This is a collection of bonus programs! They are meant to be challenging.  They are not listed in order of difficulty, so choose whichever programs sound interesting!

# Conversion
credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp, and others.<br />
file: `conversion.py`

America uses a confusing measurement system where units of length are measured in inches, feet, yards and miles. There are twelve inches in a foot and three feet in a yard. However, when doing scientific measurements, it is important to use centimeters, meters, and kilometers since these units of measurement are used worldwide. Write a program that converts from centimeters to inches given that there are 2.54 centimeters in 1 inch. Below is some sample output from the program.  The program should stop when the user enters -1 for the number of centimeters.

```
This program can convert centimeters to inches
Enter cm: 2.54
2.54 centimeters equals 1.0 inches
Enter cm: 68
68.0 centimeters equals 26.771653543307085 inches
Enter cm: 100
100.0 centimeters equals 39.37007874015748 inches
Enter cm: -1
```

You can now write a program to convert any kind of units that you want!

# FizzBuzz
credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp, and others.<br />
file: `fizzbuzz.py`

Fizzbuzz is a classic coding problem.

In the game Fizz Buzz, players take turns counting up from one. If a player’s turn lands on a number that’s divisible by 3, they should say “Fizz” instead of the number, and if it lands on a number that’s divisible by 5, they should say “Buzz” instead of the number. If the number is both a multiple of 3 and of 5, they should say "Fizzbuzz" instead of the number. A spectator sport, it is not. What it is, however, is an interesting problem in control flow.

Write a program that counts up to and including 100, fizzing and buzzing the correct numbers along the way.  Here's part of a sample run of the program:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
...
```

## Checking Multiples
In order to solve the hailstone problem, we are going to need as way to determine if an integer is a multiple of another integer. In addition to the regular operators that you know and love (like +, -, \*, and /) programming languages provide a remainder operator: %.  

```
a % b
```

returns the value remaining when you divide a by b. For example, 10 % 3 is 1 because when you divide 10 by 3 you get 3 with 1 left over.  And when you divide any number by 2, the remainder is 0 if the number is even and 1 if the number is odd.  How can we use this to check if one number is a multiple of another?

# Piglet
credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp, and others.<br />
file: `piglet.py`

Write a console program for a 1-player dice game called "Piglet", based on the game "Pig". The player's goal is to get as many points as possible without rolling a 1. Each turn, the player rolls the die; if they roll a 1, the game ends and the player gets a score of 0. If the player rolls any number besides a 1, that number is added to their score. The player then chooses whether to roll again or end the game with their current score. Two sample game outputs are shown below.

```
Welcome to Piglet!
You rolled a 4!
Roll again? yes
You rolled a 5!
Roll again? yes
You rolled a 5!
Roll again? yes
You rolled a 4!
Roll again? yes
You rolled a 3!
Roll again? no
You got 21 points.
```
```
Welcome to Piglet!
You rolled a 5!
Roll again? yes
You rolled a 2!
Roll again? yes
You rolled a 4!
Roll again? yes
You rolled a 1!
You got 0 points.
```
