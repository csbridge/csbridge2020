template: templates/teach/notes/template.ptl
problemtitle: Checkerboard Karel

This problem is a tricky Karel problem that requires them to find the midpoint of a world of any size that meets the specified conditions.  Remember that Karel _cannot use variables_, so students have to think of some other way to find the midpoint.  There are endless ways to do this:

1. Place one beeper on either side of the bottom wall. Move them inwards until they overlap.
+ Place a line of beepers along the bottom wall. Remove the ones on the edges until only one is left.
+ Place beepers on either side of the bottom wall. Continually place beepers at the edges of the un-beepered space until you reach the middle.
+ Spiral beepers around the rectangle until a middle point is reached. Drop down and place the beeper, then clean up the extra beepers.
+ Make a diagonal line from the bottom left corner until you hit the wall. Move across, then make another diagonal line until you intersect the first line.
+ Go up one, right one, until you hit the right wall. Then, go down two, left one, until you hit the middle.
+ Recursive solution (normally people who do this solution have programmed before):

```
if front is blocked:
  turn around
else
  move forward two
  recurse
  move forward one
```

There are some even weirder solutions. That's okay! As long as it works, let them do whatever they want. 
