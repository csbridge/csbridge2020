template: templates/teach/notes/template.ptl
problemTitle: Random Circles

This is the project in the morning.  Students write a program that draws 10 circles randomly, all fully onscreen.  A step-by-step way to approach this is to draw 1 circle with increasingly random properties.  For instance, first just randomize the color, then the radius, then the location.  Then, once all the required properties are randomized, add a loop to draw multiple circles.


**Note:** make sure students remember the circle size is `2 * radius`, and not just `radius`, since the size parameters are the _bounding box coordinates_ of the circle.  Students may not notice if they do this incorrectly, but their circles will be too small.  They should also make sure that their random coordinates are generated so the circle is entirely onscreen.