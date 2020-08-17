template: templates/teach/notes/template.ptl
problemTitle: Fizz Buzz

This is the first section problem for the evening.  Students are learning about graphics, parameters and return:

+ How to write a graphics program with shapes and the canvas
+ How to write a function that takes in parameters
+ How to write a function that returns something
+ How to call a function that takes parameters or returns something

Some students struggle with the difference between returning and printing as well.

Feel free to start with a review if you think it would be helpful for your students.

### Step-by-Step, Teaching Fizz Buzz

**Note**: there is a fizzbuzz bonus problem for variables, but it is slightly different.  That one does not use parameters or return or user input.

1. There are many ways to teach this problem, so feel free to use any approach that seems best for your students.  One idea is to start by implementing `main()` _first_, and `fizzbuzz(n)` second.  This lets you motivate how the function will be used, which can help orient students when it's time to implement the function - they can look back at its use to remember what it must take in, what it must return, etc.  You can also feel free to go with the reverse approach - but it may be helpful to quickly outline what a call to the function might look like so that students understand its use.
+ When implementing `fizzbuzz`, you might consider first approaching how to use the parameter input, and just implement the function to print out the required output.  After you are done with this, then you can go back and figure out how to add the variable that you ultimately return.