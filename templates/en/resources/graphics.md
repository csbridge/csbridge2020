template: templates/en/template.ptl
title: Graphics Reference

# Graphics Reference (In Progress)
---

One of the most common libraries to create graphics in Python is
called Tk (short for "tkinter"). Tk is a powerful graphics library, but some of the functions are hard to use.  For this reason, we provide our own small graphics library that is built on top of Tk and makes it easier to use.  However, it's not a replacement for Tk - it just adds new functions to make certain things like drawing text easier.  You can always explore the full Tk library if you're interested in seeing what else you can do!

## Installation
The graphics library itself comes pre-packaged with every graphical PyCharm project.  However, it relies on one other tool that you'll need to install, called "Pillow", which contains code to manipulate images. In order for graphics to work properly with images, you need to install Pillow on your machine.  To install Pillow, you should first open a "terminal" window: the easiest way to do this is to use the “Terminal” tab within PyCharm on the lower-left (next to the “Run” and “Python Console” tabs). Type the following command shown in bold below into the Terminal. (Note that "Pillow" starts with an uppercase P.) On Windows, type “py” instead of “python3”):

```
> python3 -m pip install Pillow
...prints stuff...
Successfully installed Pillow-7.1.1
```

Now you should be able to add images to your graphics program canvases.  Woohoo!

## Importing
To use our graphics library, you must first import it at the top of your program, like this:
```
from graphics import Canvas
```

## The Canvas
The drawing model for the graphics library is a "canvas" (much like a painting) where you are going to draw various shapes. The canvas is a grid of pixels that have `x` and `y` values.  The coordinate (0, 0) is in the **upper-left-hand corner** of the canvas.  The values of `x` increase as you move to the right.  The values of `y` increase as you move down.  In other words, you can think of the canvas as follows:

<img
  src="{{pathToRoot}}img/resources/graphics/canvas.png"
  class="img-fluid mx-auto d-block"
  style="width: 30%;"
  alt="A diagram of the canvas coordinate scheme. (0, 0) is the top left corner. An arrow extends downwards in the y direction and rightwards in the x direction"
/>


When we want to draw shapes on a canvas, we call functions on that canvas that “create” the shape we want to draw. These shapes then appear on the canvas. In CSBridge, we will generally provide the code that creates the canvas for you, so all you need to worry about is adding shapes to that canvas. For the remainder of this handout, we will assume that an object named `canvas` has already been created, and it represents the canvas that you’ll be drawing on. Below we provide a brief tour of some of the different shapes you can draw in a canvas as well as highlight a few of the options you have with regard to how those shapes look.

## Canvas Properties
+ `get_canvas_height`
+ `get_canvas_width`
+ `set_canvas_background_color`

## Drawing Lines
+ `create_line`

## Drawing Rectangles
+ `create_rectangle`

## Drawing Ovals
+ `create_oval`

## Drawing Text
+ `create_text`
+ `set_font`

## Adding Images
+ `create_image`
+ `create_image_with_size`

## Getting Object Information
+ `get_height`
+ `get_width`
+ `get_left_x`
+ `get_top_y`

## Updating Graphical Objects
+ `delete`
+ `move_to`
+ `set_color`
+ `set_fill_color`
+ `set_outline_color`
+ `set_size`
