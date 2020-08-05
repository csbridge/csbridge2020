template: templates/teach/notes/template.ptl
problemtitle: That's Some Sum

This is the first morning problem.  This problem combines control flow and variables in different scopes with user input and output, and using the `i` variable from the loop.  This problem is very similar to the "Run, Sum, Run" problem from the previous day, with two main differences:

+ we know how many numbers the user should enter, so we can use a `for` loop instead of a `while` loop
+ we want to encourage student to use the `i` variable in the for loop to print out the number we want from the user next (for example, "Integer number 1", "Integer number 2", etc.).

This is the first program where students get practice using `i`.  A good starting point might be for them to just print out the value of `i` inside the loop to see how it works for themselves:

```
for i in range(10):
  print(i)
```

Then they can build on this to print out a message to the user using `i`, and finally combine this with the ideas from Run, Sum, Run" to keep track of the total.  Pointing students to "Run, Sum, Run" may be helpful to get them oriented.