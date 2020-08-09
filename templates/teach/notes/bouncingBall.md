template: templates/teach/notes/template.ptl
problemTitle: Bouncing Ball

This is the section problem for day 6.  Students are learning about animation and nested loops:

+ How to master nested loops and using both loop counter variables
+ How to write a graphics program with animation (loop, update, delay)

Feel free to start with a review if you think it would be helpful for your students.

This problem has students develop a program that animates a ball bouncing around the screen forever.  We recommend that in section you approach the program in 3 milestones, suggested below.  Run the program after each milestone!  This shows students the value of incremental development and testing as you go.

### Milestone 1
Start by adding the ball to the screen at a random location.  This is a great step to decompose into its own function, as the solution does - you can show how you can return the ball graphical object for use later in the program.

### Milestone 2
Animate the ball.  There are great example programs mentioned in the milestone instructions of other programs that animate.  The core idea they should understand about animation is that it is a loop that repeats: move the graphics, and then pause.  It needs to move by an amount in the x and y directions, which are the "velocities".

**Don't forget `canvas.update()` in the loop whenever graphics change!**  This is really easy to omit, but without it the graphics won't work properly.  We want to get students used to this general pattern:

```
loop:
    # update graphics
    canvas.update()
    time.sleep(DELAY)
```

### Milestone 3
Add detection for colliding with walls.  This is tricky because the check should be whether the ball has gone "past the wall".  The reason is that the ball may not touch the edge of the wall exactly (for instance, the ball could go from x coordinate 1 to x coordinate -1, meaning that the ball's x coordinate may not be exactly 0 at any time, but it is still colliding).  Also watch out for checking collisions with the right and bottom walls - the coordinates of the ball are its top-left corner, so you must check if its right or bottom sides are colliding with the walls.