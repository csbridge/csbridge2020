template: templates/teach/notes/template.ptl
problemTitle: Short Film

This is the main project in the evening.  Students develop a program that animates a short film.  We provide some initial milestones, and then students are free to use their creativity to create anything they'd like!

### Milestone 1
Students should start by implementing a `display_message` function that displays a white label with specified text on a black background.  They must make sure to set the text color to be white, and to update the canvas once they've added the graphic.

### Milestone 2
Students should add a scene to show a sun setting.  It should have the sky and earth, and then animate the sun moving down the screen until it goes below the horizon (behind the earth rectangle).  A good two-step process is to first display the static graphics, and then animate the sun.  They don't need to worry about the sun changing color for now.  They may need help figuring out when to stop the animation (when the sun gets below a certain threshold) since previously most of the animation programs were infinite loops.

### Milestone 3
Finally, students should write a function `get_sun_color` that returns the color the sun should be given some parameter about the animation.  This could be something like the position of the sun, or the frame number in the animation, or so on.  It is up to them how to determine the sun's color with this information.  Then, each frame they can set the color of the sun with this function.

### Extensions
After this, students are free to do whatever they'd like to make their film better!