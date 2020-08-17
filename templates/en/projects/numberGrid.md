template: templates/en/projects/projectTemplate.ptl
title: Number Grid
credit: Lisa Yan

Handouts: [Graphics Reference]({{pathToRoot}}en/resources/graphics.html)

Relevant Example: [Optical Illusion]({{pathToRoot}}en/projects/illusion.html)

File: `number_grid.py`

This is a bonus program! It's meant to be a bit difficult.

Write a graphics program that draws a centered, numbered square grid on the screen, like this:

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/grid25.jpg">	
</center>

Your program should do this by implementing a function `draw_numbered_grid` that can take in a dimension and draw a number grid with that many rows and that many columns.  Then your `main` function should call that function.  This means that your program should be able to handle different sizes of grids:

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/grid36.jpg">	
</center>

## Milestones

1) First, try to draw a rectangle the size of the entire number grid in the correct position.  For instance, for 5x5 you would try to draw this:

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/milestone1.png">	
</center>

2)  Break down your solution into another function that can draw a single square at a given position, displaying a given number.  Start by drawing just the red square, and not worrying about the number text within it.

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/milestone2.png">	
</center>

3) Add the number text within each square.
