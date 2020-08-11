template: templates/en/projects/projectTemplate.ptl
title: Border Box
credit: Lisa Yan

Handout: [Graphics Reference]({{pathToRoot}}en/resources/graphics.html)

File: `border_karel.py` and `border_box.py`

This is a bonus program! It's meant to be a bit challenging.  Completing this program may help you write your final project.

The ultimate goal of this project is to write a graphics program that moves a box counter-clockwise around the border of the canvas.  But to give you more practice with functions, and to let you implement some of how Karel works, this bonus starts with a Karel program and turns it into a working graphics program.

# Welcome Back, Karel!
title: `border_karel.py`

Before we start with the Python version, let's write a Karel version.  Specifically, implement the `border_karel.py` program that has Karel move counter-clockwise around the border of the world.  One hiccup is that we want Karel to do this forever, so a `while True` loop seems like the right approach - but we can't use `while True` in Karel!  We need some Karel condition that will always be true.  Here's one - for this world, let's assume Karel always has beepers in its beeper bag.  Therefore, `beepers_in_bag()` will always be true, and `while beepers_in_bag()` will be an infinite loop, but in Karel!

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/borderBox/borderKarel.png">	
</center>

# From Karel to Python
Now, we're going to get a better idea of what functions like `move()`, `front_is_clear()` and `turn_left()` must do under the hood in Karel (hint: you should have used these functions in your solution from part 1!).  Follow these steps to copy your `border_karel.py` program over to `border_box.py`:

1) Copy your Karel code in between the two comments marking where to put your code.

2) Change the `beepers_in_bag()` to `True` - since we can now use `while True` loops again.

3) PyCharm will complain that the Karel functions we have used are not defined.  Let's make stubs of these functions.  Add one for each like this:

```
def turn_left():
	pass
```

The `pass` just means the function does nothing - we'll actually implement them later.

### Be Square

In our graphics program, we'll represent "Karel" with two variables - a green square graphical object and a direction.  The direction can be one of `NORTH`, `SOUTH`, `EAST` or `WEST` - these are all constants defined in the file for you.				

Add new code in `main()` before your pasted Karel code to create the green box and initialize the direction to `EAST`.  The box should be initialized in the bottom left of the canvas, just like Karel.
           
<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/borderBox/boxSetup.png">	
</center>

### Let's Move It
Now let's see if we can get our box moving along the bottom of the screen.  Make your `front_is_clear()` function return `True` for now.  Then implement `move()` (hint: you may need to add some parameters!) to move the box one step to the east.  A "step" is defined just like it is for Karel - move the complete size of the box, plus a gap.  Use the constants to help you!  Finally, add a call to `canvas.update()` in your `while` loop after calling `move()` - remember that we must update the canvas each frame in our animation.  Also add a call to `time.sleep()` to make the animation slow enough so we can see it.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/borderBox/boxMove.png">	
</center>

### To the Window, to the Wall
We don't want our box running into the wall!  Now, let's implement `front_is_clear()` to return `False` if the box cannot move any further without going past the edge of the canvas. (hint: you may need to add some parameters!)

### Getting Directions
We're getting there!  Now let's implement `turn_left()` to return the new direction the box should face given its current direction.  (hint: you may need to add some parameters!)

Finally, update `front_is_clear()` and `move()` to behave differently depending on the current direction.
