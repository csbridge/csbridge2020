template: templates/en/template.ptl
title: Graphics Reference

# Graphics Reference (In Progress)
---

<div class="row">
	<div class="col-xs-12">
		<a class="btn btn-primary" role="button" data-toggle="collapse" href="#quickreference" aria-expanded="false" aria-controls="collapseExample">
		  	Show/Hide Quick Reference
		</a>
		<a class="btn btn-primary" role="button" href="api-docs/graphics.html">
		  	View Complete Reference Docs
		</a>
	</div>
</div>

<br />
<div class="collapse" id="quickreference">
	<h4>Create Graphical Objects</h4>
	<table class="table table-bordered table-striped">
		<thead>
			<tr>
				<td>Method</td>
				<td>Description</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>create_line(x1, y1, x2, y2)</code></td>
				<td>Creates a new line connecting <code>(x1, y1)</code> and <code>(x2, y2)</code>.</td>
			</tr>
			<tr>
				<td><code>create_rectangle(x1, y1, x2, y2)</code></td>
				<td>Creates a new rectangle on the canvas the size of this bounding box and returns it.</td>
			</tr>
			<tr>
				<td><code>create_oval(x1, y1, x2, y2)</code></td>
				<td>Creates a new oval on the canvas contained within this bounding box and returns it.</td>
			</tr>
			<tr>
				<td><code>create_image(x, y, filepath)</code><br/><p>--OR--</p><code>create_image_with_size(x, y,<br /> width, height, filepath)</code></td>
				<td>Creates a new image on the canvas from the specified file, with top-left corner at <code>(x, y)</code>.  You can also specify the width and height.</td>
			</tr>
			<tr>
				<td><code>create_text(x, y, text)</code></td>
				<td>Creates text on the canvas with the specified contents, centered at <code>(x, y)</code>.</td>
			</tr>
		</tbody>
	</table>
	<h4>Work With Graphical Objects</h4>
	<table class="table table-bordered table-striped">
		<thead>
			<tr>
				<td>Method</td>
				<td>Description</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>get_width(obj)</code></td>
				<td>Returns the width of <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>get_height(obj)</code></td>
				<td>Returns the height of <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>get_left_x(obj)</code></td>
				<td>Returns the leftmost x coordinate of <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>get_top_y(obj)</code></td>
				<td>Returns the topmost y coordinate of <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>move(obj, dx, dy)</code></td>
				<td>Moves <code>obj</code> using the displacements <code>dx</code> and <code>dy</code>.</td>
			</tr>
			<tr>
				<td><code>move_to(obj, x, y)</code></td>
				<td>Sets the location of <code>obj</code> to the specified coordinates.</td>
			</tr>
			<tr>
				<td><code>set_outline_color(obj, color)</code></td>
				<td>Sets the outline color (if applicable) of <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>set_fill_color(obj, color)</code></td>
				<td>Sets the fill color (if applicable) of <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>set_font(obj, font, size)</code></td>
				<td>Sets the font and font size for the text object <code>obj</code>.</td>
			</tr>
			<tr>
				<td><code>delete(obj)</code></td>
				<td>Removes <code>obj</code> from the canvas.</td>
			</tr>
		</tbody>
	</table>   
	<h4>Canvas Information</h4>
	<table class="table table-bordered table-striped">
		<thead>
			<tr>
				<td>Method</td>
				<td>Description</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>get_canvas_width()</code></td>
				<td>Returns the width of the canvas.</td>
			</tr>
			<tr>
				<td><code>get_canvas_height()</code></td>
				<td>Returns the height of the canvas.</td>
			</tr>
		</tbody>
	</table>   	
	<hr />
</div>

One of the most common libraries to create graphics in Python is called Tk (short for "tkinter"). Tk is a powerful graphics library, but some of the functions are hard to use.  For this reason, we provide our own small graphics library that is built on top of Tk and makes it easier to use.  However, it's not a replacement for Tk - it just adds new functions to make certain things like drawing text easier.  You can always explore the full Tk library if you're interested in seeing what else you can do!

## Installation
The graphics library itself comes pre-packaged with every graphical PyCharm project.  However, it relies on one other tool that you'll need to install, called "Pillow", which contains code to manipulate images. In order for be able to work with images, you need to install Pillow on your machine.  To install Pillow, you should first open a "terminal" window: the easiest way to do this is to use the “Terminal” tab within PyCharm on the lower-left (next to the “Run” and “Python Console” tabs). Type the following command shown in bold below into the Terminal. (Note that "Pillow" starts with an uppercase P.) On Windows, type “py” instead of “python3”):

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


When we want to draw shapes on a canvas, we call functions on that canvas that “create” the shape we want to draw. These shapes then appear on the canvas. In CSBridge, we will generally provide the code that creates the canvas for you, so all you need to worry about is adding shapes to that canvas. For the remainder of this handout, we will assume that a variable named `canvas` has already been created, and it represents the canvas that you’ll be drawing on. Below we provide a brief tour of some of the different shapes you can draw in a canvas as well as highlight a few of the options you have with regard to how those shapes look.

## Canvas Properties 
+ `get_canvas_height` (ok)
+ `get_canvas_width` (ok)
+ `set_canvas_background_color` (not needed)

## Drawing Lines
+ `create_line` (ok)

## Drawing Rectangles
+ `create_rectangle` (ok)

## Drawing Ovals
+ `create_oval` (ok)

## Drawing Text
+ `create_text` (ok)
+ `set_font` (ok)

## Adding Images
+ `create_image` (ok)
+ `create_image_with_size` (ok)

## Getting Object Information
+ `get_height` (ok)
+ `get_width` (ok)
+ `get_left_x`
+ `get_top_y`

## Updating Graphical Objects
+ `delete`
+ `move` (ok)
+ `move_to` (ok)
+ `set_color` (not needed)
+ `set_fill_color` (ok)
+ `set_outline_color` (ok)
+ `set_size` (not needed)
