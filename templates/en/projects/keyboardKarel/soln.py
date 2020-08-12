"""
File: keyboard_karel.py
-------------------
A program that lets the user move Karel around the canvas using the arrow keys.
"""

from graphics import Canvas

# The size of the canvas, in pixels
CANVAS_WIDTH = 500
CANVAS_HEIGHT = 500

# The number of pixels for Karel to move for each key press
KAREL_STEP_SIZE = 100


def main():
    canvas = Canvas()
    canvas.set_canvas_title("Keyboard Karel")

    # Create Karel, initially in the top-left corner
    karel = canvas.create_image(0, 0, "images/karel.png")
    canvas.update()

    # Continually listen for new key presses to move Karel
    while True:
        key_presses = canvas.get_new_key_presses()
        for press in key_presses:

            # Move Karel in the appropriate direction
            if press.keysym == "Left":
                canvas.move(karel, -KAREL_STEP_SIZE, 0)
            elif press.keysym == "Right":
                canvas.move(karel, KAREL_STEP_SIZE, 0)
            elif press.keysym == "Up":
                canvas.move(karel, 0, -KAREL_STEP_SIZE)
            elif press.keysym == "Down":
                canvas.move(karel, 0, KAREL_STEP_SIZE)
                
        canvas.update()

    canvas.mainloop()


if __name__ == "__main__":
    main()
