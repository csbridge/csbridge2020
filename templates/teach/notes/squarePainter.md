template: templates/teach/notes/template.ptl
problemtitle: Square Painter Karel

This problem is a tricky Karel problem that requires them to color concentric borders of any size world with alternating blue and green borders.  The generalization makes this very tricky, especially for odd-ball worlds like 1x1, 1x8, etc.

The cleanest solution is probably for them to draw the outermost border, and then if there are remaining borders to draw, move inwards and draw one, then move inwards and draw another one etc.  The reason for this is for the inner borders, Karel can use the last border drawn as a "perimeter" so it knows where to stop drawing the inner border (see the note about checking corner colors in the problem description).  But for the very first border, the boundary instead is the wall surrounding the world.  The conditions for how Karel knows where to paint are therefore different, and it's easiest to draw the outer one separately in code from the inner ones.

One helpful insight is that it's ok to paint a corner multiple times.  It makes the algorithm simpler if you don't have to design it where you make sure each corner is painted exactly once.

There will be some code duplication, because we haven't learned about variables/parameters/etc. yet, and there are some cases where the code is the same except for that Karel is coloring BLUE vs. GREEN.  That's ok - but there are lots of opportunities for custom Karel commands here that can help reduce the duplication!

Another tricky part is making sure Karel exits the main loop when it's done.  There are many different possible end states since there are many different world sizes.  You might consider mentioning pre- and post- conditions to see how we might make sure that when Karel should stop, the loop condition will not be true anymore, even if it means we tell Karel explicitly to do something (like move to a wall) to make the condition no longer true.