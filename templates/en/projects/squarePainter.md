template: templates/en/projects/projectTemplate.ptl
title: Square Painter Karel
credit: Written by Lisa Yan

Handouts: [Karel Reference](https://compedu.stanford.edu/karel-reader/docs/python/en/reference.html)<br/>
File: `square_painter.py`

This is a bonus program. It's meant to be a bit challenging!

Remember to use ***functions*** to organize your code!
				
Karel wants to make some real art. Help it fill in any rectangular world with alternating squares of blue and green.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/squarePainter/5x5.png">	
</center>

To check the opposite of any conditional, use `not`:

```
# checks that the corner you are on is NOT a certain color
if not corner_color_is(color):
    ...
```

Karel should be able to paint any type of rectangular world:

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/squarePainter/8x8.png">	
</center>

Even non-square rectangles are within Karel's realm of artistic talent:

<center>
	<img style="width:400px" src="{{pathToRoot}}img/projects/squarePainter/16x20.png">	
</center>

It doesn't matter where Karel ends up once it's finished; Karel just wants to maximize its artistic expression.
