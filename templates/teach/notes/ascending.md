template: templates/teach/notes/template.ptl
problemTitle: Ascending Numbers

This is the first project problem for the morning.  It gives students practice with iterating through lists and checking elements against each other.  It builds on the first quickstart problem in that it also reads numbers into a list (but until a sentinel value, not a fixed number of times), and also prints the values out.  The spec guides them through milestones to approach it.

## Milestone 1: Storing And Outputting Numbers
Encourage them to start with their code from the quickstart and modify it.  How can we read in as many numbers as we want from the user, and detect when they enter -1?  Students may have trouble with accidentally including -1 in the list too.

## Milestone 2: Is Ascending
Next, students need to write a function that returns whether or not a list of numbers is in ascending order.  This is tricky - they must loop over the _pairs_ of elements in order in the list, meaning that they must loop from 0 to count - 1 (since there are N elements and N-1 pairs of elements).  There is a hint in the spec about how to loop through just some elements in the list.

The idea is to loop over each pair, and if we see any that are out of order, we know it is not ascending.  Otherwise, if all look ok, it is ascending.