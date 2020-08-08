template: templates/teach/notes/template.ptl
problemTitle: String Art

This problem deals with graphics and the for loop variable.  If students are struggling to understand `for` loops more generally, you might consider walking through an example of how a `for` loop works with its variable.  For instance, you might walk through how to print out the numbers 0 through 5 or even numbers, using the `i` variable in the loop.

The recommended approach is to think through drawing a single line, and what changes between drawing each line (the startX and endY).  Then you try to find a pattern between these changes.  One way is to write out the coordinates for each line, like so:

+ line 0: (0, height) to (0, 0)
+ line 1: (spacing, height) to (0, spacing)
+ line 2: (2 * spacing, height) to (0, 2 * spacing)
+ ...


Then we try to figure out a way to get the coordinates for a line given its number.  We see that we are multiplying the line number by spacing to get the `startX` and `endY`!  We can use the loop variable as the line number.