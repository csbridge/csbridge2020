template: templates/teach/notes/template.ptl
problemtitle: Print Indices

This problem gives practice with nested loops.  We recommend the students approach it in milestones.  To start, they can print out what `i` and `j` are in the provided hint code within the inner loop.  They might notice a pattern!  Nested loops are very tricky, so students might have the most trouble understanding how `i` and `j` change.  Understanding this is the first step, ignoring the requirement to print some numbers on the same line.

Then, we suggest they try to print the coordinates, one per line.  This lets them focus on how to use `i` and `j` to print out the right coordinates, without having to worry about adding commas and newlines.

Finally, we turn to printing each row on the same line.  They should think about - where do we want to go to the next line?  To print on the same line, we must use `end=''`, as mentioned in the problem.  We also want to print out commas between each number.  This is a fencepost problem!  On each line, we want to print N coordinates, but N - 1 commas.  Therefore, we can print out N - 1 numbers followed by commas, and then the last coordinate separately, or the first coordinate separately, followed by N - 1 commas and numbers.