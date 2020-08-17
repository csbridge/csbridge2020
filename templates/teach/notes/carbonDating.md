template: templates/teach/notes/template.ptl
problemtitle: Carbon Dating

This is the large project program for the morning.  It is the last problem for the day because there is no evening work time.

This is a larger program that we hope will give students final practice with everything they have learned with Python so far:

+ variables
+ printing
+ user input
+ `while` and `for` loops and conditionals

This problem also has more information than others in the problem description, so students may have general questions understanding the program and how to calculate different values.

## Milestone 1: Lookup Table
This first part gives students practice with looping, calculating and printing out values.  Ultimately, we hope they will arrive at a solution that uses the `i` loop variable to print out the results.  One way to frame it to students is, "inside the loop, how can we use the current value of `i` to know what to do?  When `i` is 0, what do we want to do?  When `i` is 1, what do we want to do?"  It can help to write out the pattern:

```
When i is 0, we want to print out 100% and 0 years
When i is 1, we want to print out 50% and 5700 years
When i is 2, we want to print out 25% and 11,400 years
...
```

From here, we ask: "What does i represent?".  We can see the pattern that `i` represents the number of times we divide 100% by 2, and the number of copies of 5700 we add together.  In other words:

```
When i is some value, we want to print out 100% / (2 ** i) and i * 5700 years
```

(The percent pattern is tricky, so it's ok if they just use a percent variable and divide it by 2 each time)

If students are having trouble working with `i`, you can suggest they start out by having variables outside the loop to keep track of percent and years, and update them each time inside the loop (e.g. divide percent by 2, add 5700 to years).  From here, it's easier to see what the pattern is.  Then, instead of making separate variables for the values, we can just calculate them directly.

## Milestone 2: Interactive Mode
This second part gives students practice with looping, user input and printing out values.  A problem that is similar is the Viral Video problem - like Viral Video, this part of the project relies on a variable outside a `while` loop and calculations inside the while loop.

Here are some steps the students could take to approach this:

+ Prompt the user for their c-14% once and print out the result
+ Write the code to calculate the age of a sample (work through the math part with `math.log`)
+ Add a `while` loop to repeat the calculation.  We have a fencepost problem because we need to prompt for user input both inside and outside the loop.  This is similar to the optional extension for the 8 ball program.
+ Figure out what the condition should be to stop the loop when the user is finished.