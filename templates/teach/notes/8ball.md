template: templates/teach/notes/template.ptl
problemtitle: 8 Ball

This is the first section problem for day 2.  Students are learning about control flow in Python, and how to write console programs with variables and printing.  Specifically:

+ How to print to the terminal
+ How to store information in variables
+ How to get user input
+ How to check conditions using `while` loops and `if` statements

Feel free to start with a review if you think it would be helpful for your students. 

### Step-by-Step, Teaching 8 Ball

This is one possible way to approach teaching the problem.  You can cover the material however you feel most comfortable!

1. A good starting point is to pull up the starter code and ask students to think through what it does.  The provided code comes with just a `while` loop and a prompt for user input.  If you run that code, it will just prompt the user forever.
+ Then, you can ask students how we might write code that prints out a random response.  You can start by explaining more about `random.randint`.  Then you can talk about how we can use that with `if/elif` statements to do different things depending on the random number value.  You can try starting with just an `if` statement that prints out something when a certain number, like 3, is chosen, and then expand it to include `elif` for other values.
+ If you have time (best option is to move to the second problem, then come back to this later if you have more time), you can also work on how you might stop the program if the user doesn't enter a question.  The problem description gives a hint about code that checks if the user input is empty.  This is also a good chance to show an example of the fencepost problem!  We want to ask the user for input `N` times, but only print out responses `N-1` times (because the last time the user will enter nothing and the program will stop).
	+ First we need to save the input into a variable so we can check it
	+ A common bug students might make is leaving the program as-is and just changing the condition to check if the input is empty.  This won't work because the variable is declared inside the loop.  So we need to have the variable declared outside the loop to check its value, but we need to repeat asking the user for input...
	+ This can lead to the final solution where you must declare the variable outside the loop and prompt the user for input outside of the loop, and then once again at the end of the loop body.