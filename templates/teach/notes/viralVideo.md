template: templates/teach/notes/template.ptl
problemtitle: Viral Video

This is the second section problem for day 2.  See the first section problem for an overview of this section's topics.

### Step-by-Step, Teaching Viral Video

This is one possible way to approach teaching the problem.  You can cover the material however you feel most comfortable!

There are several tricky parts to this problem, including storing user input, keeping track of information across iterations of the loop, and knowing when to stop looping.

1. A good starting point is to have the program prompt the user for the target views and growth rate, and print out the results to the user.
+ Then, we know we want to loop some task.  It's not easy for us to figure out how many times to loop, so a `while` loop seems reasonable.  One possible way to introduce this is to forget about the loop condition for now, and just work on writing the loop body.
+ There, we can work on calculating the new view count and days.  This information needs to be kept track of across iterations of the loop.  This means they can't be declared in the loop, they must be declared before.  The information we need to store is the view count and number of days, so we need a variable for each one.
+ Then, we can update the variables inside the loop and print out the result
+ Now we can go back and figure out the condition we should use for the loop.  When should we stop calculating?  This can lead us to the answer for the condition, which depends on the view count so far.

Students may have trouble with variable scope - figuring out what should go inside vs. outside the loop.  You can remind them that whatever variables we declare inside the loop go away each time we go through the loop.  Since each time through the loop we must know what happened last time, the variables should be declared outside the loop.