template: templates/teach/notes/template.ptl
problemtitle: Stripe Karel

The problem below is the first problem for the evening.  The focus is on more complex control flow, particularly `if` statements, which they just learned.  It also further motivates using `while` loops, because we do not know the size of the world, and therefore do not know how long each stripe should be, nor how many stripes we will draw.

The spec encourages students to first think about the problem assuming only an odd number of rows.  With this assumption, the problem mimics a fencepost problem - we must draw `n` stripes, but move between stripes `n - 1` times.

A good starting point might be to draw a single stripe, then move to the next stripe.  It's important to figure out what the conditions are at which point we stop looping.

Then, they should consider what happens when we no longer can assume that the world has an odd number of rows.  The answer is that Karel might run into a wall when trying to move to the next stripe.