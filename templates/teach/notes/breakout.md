template: templates/teach/notes/template.ptl
problemTitle: Breakout

Breakout is a graphics game, and the first major program that students make. It's awesome to play around with a working version, and is a substantial accomplishment.

## Overall Comments
Students have not learned about global variables, and shouldn't be using them in their programs.  For that reason, to pass data around their program, they will need to use parameters and return instead.  These are tricky concepts, so you may need to help students better understand them.  We have also mentioned returning multiple values in lecture, which also comes in handy in this project (e.g. to return both the change x and change y after updating them due to a collision).

## Milestones
Students should approach the problem using the milestones below.

### Create The Bricks
The first thing students do is make the bricks. The most elegant way to do this is to have a helper function to make a row that takes a color.  Try to have them break it down to draw one row of bricks, and then multiple rows.  The checkerboard pattern in optical illusion may be a good starting point.

### Make The Ball Move
This part is extremely similar to the bouncing ball example students previously worked on in lecture and section!  Students should add the ball at the center of the screen using the graphics skills they have already been practicing.  Then, they can store the vx and vy using variables, and initialize the velocity randomly.  Finally, they should animate the ball around the screen, bouncing off of all 4 walls (for now).

### Create The Paddle
Next, students should make the paddle and have it move with the mouse.  They should add this code within their same animation loop, each time checking the current mouse location and updating the paddle's x coordinate to match.  One tricky part is making sure the paddle doesn't go off-screen.

### Collisions
Next, we tell them to check for collisions each time through the loop using the `find_overlapping` function.  This function returns a list of objects overlapping a given square, which we can specify as the square containing the ball.  Then they can iterate through this list and see if the ball is colliding with the paddle or the bricks.  Make sure students are stopping after examining one object, though - this is how we try to prevent the "going through multiple bricks" problem that is caused by them changing vy every time a corner intersects with an object.

Once they have the object, they check to see if it is equal to the paddle, then work accordingly. We don't require that they change vx when they hit the side of the paddle. Note that it is okay if they hit part of one brick, make it disappear, then hit part of another brick (making it look like it goes through multiple bricks). The only thing we're concerned about is them hitting two bricks at the same time, on the same round.

### Finishing Touches
Finally, we have the students implement the game ending conditions, and other touches such as win/lose messages.  They should keep a counter of the number of bricks remaining - they initialize it to the total number of bricks, and decrement it every time a brick is removed.  Then, they can continue animating the ball while it is both still onscreen and their are bricks left.  Once the animation stops, they can check if the player won or lost.

## Common Issues
+ Sticky paddle is the #1 breakout bug: it happens when the ball overlaps with the paddle if you move the paddle too quickly, and the ball thinks it's colliding with an object many times. This happens because the default collision logic students use is to flip the y velocity for a collision. This causes the "sticky paddle" issue, since the ball will detect many collisions with the paddle and thus flip its velocity back and forth, appearing as though it's "stuck" in the paddle. **Solution: when the ball hits the paddle, it should always bounce up.  When people come to you with this bug, make sure they know why it is happening! One way to make this bug easier to see and replicate is to make the paddle extra tall and wide.**
+ The ball only needs to bounce in the vertical direction. Although horizontal bounces are a cool extension.
+ This assignment really requires parameters and return values to come up with a solution. So they probably won't be 100% sure how to use them and when to use them, or how they work.
+ _Bug: It goes through multiple bricks_  This usually happens when they act on all overlapping objects instead of just the first they find that is not the ball.  When the ball intersects two bricks simultaneously, vy=-vy happens twice and cancels itself out. Instead, they should stop looping over the colliding objects once they find one to react to.
+ _Bug: After hitting a corner between the wall and paddle, or wall and wall, the ball gets stuck on the wall and bounces back and forth._  This usually happens when their checks for the walls/the paddle are in an "`if`..`elif`... rather than a group of singular `if`s. What happens is that the ball is both vertically and horizontally off the screen, and should bounce both ways. However, since the `if`s are cascaded, after changing, say, vy to -vy, vx is not changed to -vx. The next step, the ball moves even further off the screen. This time, vx does get switched to -vx, but the ball is already far enough off screen that moving it -vx pixels doesn't move it back on the screen. Therefore, the value of vx is flipped again on the next round, and the ball appears to vibrate back and forth around the wall.
