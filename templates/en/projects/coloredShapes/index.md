template: templates/en/projects/projectTemplate.ptl
title: Colored Shapes
credit: Nick Troccoli
solution: soln.py

Write a program that lets the user add random ovals and rectangles to the canvas with a specified color.  Specifically, it should have a toolbar at the top of the window with a text field to enter a color, and two buttons: one to create an oval of that color, and one to create a rectangle of that color.  Clicking one of those buttons should create that shape with the typed-in color with a random location and size.

<center>
<img style="width:100%" src="{{pathToRoot}}img/projects/coloredShapes/screenshot.png">	
</center>

## Notes on Interactors
An interactor is a text field or a button - an interactive element that can appear around the perimeter of the canvas window.  Here's how to use them.

### Buttons
You can create a button with the `create_button` function, specifying the text of the button, and whether it should be added to the top, left, bottom, or right side of the window:

```
canvas.create_button("Create Rectangle", Canvas.TOP)
```

You can check if a button is clicked just like you check for mouse clicks or keyboard presses.  In your program's main loop, call `get_new_button_clicks()` to get a list of recent clicks.  Each click will be the name of the button that was clicked (e.g. "Create Rectangle", for the above button).  Here's an example:

```
button_clicks = canvas.get_new_button_clicks()
for button_click in button_clicks:
    if button_click == "Create Rectangle":
        ...
```

### Text Fields
You can create a text field with the `create_text_field` function, specifying the text describing the text field, and whether it should be added to the top, left, bottom, or right side of the window:

```
canvas.create_text_field("Color", Canvas.TOP)
```

The name you specify will be both the "name" of the text field and also the text that appears next to the text field describing its purpose to users.

To get the current contents of the text field, use the `get_text_field_text` function, specifying the name of the text field you want to read from (e.g. "Color", for the above text field):

```
color = canvas.get_text_field_text("Color")
```