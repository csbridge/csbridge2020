template: templates/en/projects/projectTemplate.ptl
title: Fizzbuzz With Functions
credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp, and others.

Example: [Division]({{pathToRoot}}en/projects/division/)

**Note** did you already complete the [FizzBuzz bonus problem?]({{pathToRoot}}en/bonus-index.html)  If you did, awesome!  If not, no worries.  This version of FizzBuzz is different from the bonus problem - it is the same idea, but uses functions instead.  Both will give you practice with different core programming concepts!

---

Fizzbuzz is a classic coding problem.

In the game Fizz Buzz, players take turns counting up from one. If a player’s turn lands on a number that’s divisible by 3, she should say “Fizz” instead of the number, and if it lands on a number that’s divisible by 5, she should say “Buzz” instead of the number. If the number is both a multiple of 3 and of 5, she should say "Fizzbuzz" instead of the number. A spectator sport, it is not. What it is, however, is an interesting problem in control flow and parameter usage.

Write a function called `fizzbuzz` which accepts as a parameter an integer called `n`. The function should count up to and including `n`, fizzing and buzzing the correct numbers along the way. Once it's done, the function should return how many numbers were fizzed or buzzed along the way.

Next, complete your program by writing a `main` function that reads in an integer from the user and plays fizzbuzz until it counts to the number. Here's a sample run of the program (user input is "17" below):

```
Number to count to: 17
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
Fizzbuzz
16
17
7 numbers were fizzed or buzzed
```

**Hint**: You may find the worked example very useful for this problem.