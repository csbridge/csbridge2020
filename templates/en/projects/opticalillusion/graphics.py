import tkinter
import tkinter.font

"""
File: graphics.py
Authors: Chris Piech, Lisa Yan and Nick Troccoli
-----------------
This file exports a simplified interface on top of the tkinter Canvas to allow for
easier manipulation of graphical objects.

The main type in this interface is the Canvas, which has a variety of methods
that can be called to create, modify and delete graphical objects, and also
get information about its contents.  Canvas is a subclass of tkinter.Canvas,
so all tkinter functionality is also available if needed.
"""

"""
Last updated July 15th by nick

TODOs:
    - support dynamic resizing of graphics window
    - tag_raise(obj, aboveThis) put object above this or
    tag_raise(obj) put object on top (FINISHED BRING TO FRONT / SEND TO BACK)
    - Remove "last click" -- None is difficult to understand (DONE)
    for newcomers (DONE)
    - add resize object?
    - Add animation saving for gif creation
    - set TK_SILENCE_DEPRECATION=1 to suppress this warning.
    - add text support (set font, etc.)
    - set_fill(...) -> set_fill_color(...) [DONE]
    - rename "mainloop"?
    - add "canvas.pause" method that combines time.sleep and canvas.update?
    - add back polling-based mouse events (DONE)
    
Updates [7/15]:
    - updated naming scheme to use "canvas" in methods that directly refer to the canvas, e.g.
        get_canvas_width, and nothing when referring to graphical objects, e.g. get_width(obj).
    - changed move_to to not rely on super().moveto, but instead implement using move, due to
        issues with inconsistencies between bbox and coords
    - restored polling-based mouse events via get_new_mouse_clicks
    - added text defaults
    - removed font dependency for get_width() and get_height()

Fixes [7/12]:
    - added support for mouse and keyboard events via a callback, and implemented wait_for_click
    - added more utility methods for getting information about objects, such as size, and setting canvas color
    - added more support for text labels, including getting their size
    - removed small border around the screen
    - implemented sending objects to front or back
    - renamed some public methods to include "object" whenever manipulating graphical objects
    - removed make_canvas in favor of constructor (allows private constants)
    - called update in constructor instead of get_width / get_height for efficiency reasons

Fixes [7/10]:
    - fixed relative mouse position issue with winfo_pointerxy()
    - added default options for Canvas title/width/height
    - added get_canvas_width/height, adjusted default canvas size to resize window
    - can disable object outline/fill 

Links:
    - ACM documentation https://cs.stanford.edu/people/eroberts/jtf/javadoc/student/
    - https://anzeljg.github.io/rin2/book2/2405/docs/tkinter/index.html
"""


class Canvas(tkinter.Canvas):
    DEFAULT_WIDTH = 754
    DEFAULT_HEIGHT = 492
    DEFAULT_TITLE = "Canvas"

    def __init__(self, width=DEFAULT_WIDTH, height=DEFAULT_HEIGHT):
        """
        Creates a Canvas with the specified width and height.
        """

        # Create the main program window
        self.main_window = tkinter.Tk()
        self.main_window.minsize(width=width, height=height)
        self.main_window.geometry("{}x{}".format(width, height))
        self.main_window.title(self.DEFAULT_TITLE)

        # call the tkinter Canvas constructor
        super().__init__(self.main_window, width=width, height=height, bd=0, highlightthickness=0)

        # Optional callbacks the client can specify to be called on each event
        self.on_mouse_pressed = None
        self.on_mouse_released = None
        self.on_key_pressed = None

        # Tracks whether the mouse is currently on top of the canvas
        self.mouse_on_canvas = False

        # List of presses not handled by a callback
        self.mouse_presses = []

        # These are state variables so wait_for_click knows when to stop waiting and to
        # not call handlers when we are waiting for click
        self.wait_for_click_click_happened = False
        self.currently_waiting_for_click = False

        # bind events
        self.focus_set()
        self.bind("<Button-1>", lambda event: self.__mouse_pressed(event))
        self.bind("<ButtonRelease-1>", lambda event: self.__mouse_released(event))
        self.bind("<Key>", lambda event: self.on_key_pressed(event.char) if self.on_key_pressed else None)
        self.bind("<Enter>", lambda event: self.__mouse_entered(event))
        self.bind("<Leave>", lambda event: self.__mouse_exited(event))

        self._image_gb_protection = {}
        self.pack()
        self.update()

    """ CANVAS PROPERTIES """

    def set_canvas_background_color(self, color):
        """
        Sets the canvas background color to the specified color.
        """
        self.config(background=color)

    def get_canvas_width(self):
        """
        Returns the current width of the canvas, in pixels.
        """
        return self.winfo_width()

    def get_canvas_height(self):
        """
        Returns the current height of the canvas, in pixels.
        """
        return self.winfo_height()

    def set_canvas_title(self, title):
        """
        Sets the text displayed in the window title bar
        """
        self.main_window.title(title)

    """ EVENT HANDLING """

    def set_on_mouse_pressed(self, callback):
        """
        Set the specified function to be called whenever the mouse is pressed.
        The callback should be a function that takes x and y parameters (in that order)
        representing the location where the mouse was pressed.
        """
        self.on_mouse_pressed = callback

    def set_on_mouse_released(self, callback):
        """
        Set the specified function to be called whenever the mouse is released.
        The callback should be a function that takes x and y parameters (in that order)
        representing the location where the mouse was released.
        """
        self.on_mouse_released = callback

    def set_on_key_pressed(self, callback):
        """
        Set the specified function to be called whenever a keyboard key is pressed.
        The callback should be a function that takes a char parameter representing
        the key (e.g. 'a', 'b', etc.) that was pressed.
        """
        self.on_key_pressed = callback

    def get_new_mouse_clicks(self):
        """
        Return all presses since last call to this method that were not handled
        via a callback.  Resets list of mouse presses to the empty list.
        """
        presses = self.mouse_presses
        self.mouse_presses = []
        return presses

    def __mouse_pressed(self, event):
        """
        Internal method called when the mouse is pressed.
        Call the saved mouse pressed handler, if any.  Otherwise,
        appends it to the list of mouse presses that the client can handle later.
        """
        if not self.currently_waiting_for_click and self.on_mouse_pressed:
            self.on_mouse_pressed(event.x, event.y)
        elif not self.currently_waiting_for_click:
            self.mouse_presses.append(event)

    def __mouse_released(self, event):
        """
        Internal method called when the mouse is released.  Log that a
        click happened and call the saved mouse released handler, if any.
        """

        # Do this all in one go to avoid setting click happened to True,
        # then having wait for click set currently waiting to false, then we go
        if self.currently_waiting_for_click:
            self.wait_for_click_click_happened = True
            return

        self.wait_for_click_click_happened = True
        if self.on_mouse_released:
            self.on_mouse_released(event.x, event.y)

    def __mouse_entered(self, event):
        """
        Internal method called when the mouse moves onto the canvas.  Log that
        the mouse is on the canvas.
        """
        self.mouse_on_canvas = True

    def __mouse_exited(self, event):
        """
        Internal method called when the mouse moves off the canvas.  Log that
        the mouse is off the canvas.
        """
        self.mouse_on_canvas = False

    def mouse_is_on_canvas(self):
        """
        Returns True if the mouse is currently over the canvas, or False otherwise.
        """
        return self.mouse_on_canvas

    def wait_for_click(self):
        """
        Stalls until user clicks with mouse.
        """
        self.currently_waiting_for_click = True
        self.wait_for_click_click_happened = False
        while not self.wait_for_click_click_happened:
            self.update()
        self.currently_waiting_for_click = False
        self.wait_for_click_click_happened = False

    def get_mouse_x(self):
        """
        Returns the mouse X location relative to the window.
        Note: winfo_pointerx is absolute mouse position (to screen, not window),
              winfo_rootx is absolute window position (to screen)
        Since move takes into account relative position to window,
        we adjust this mouse_x to be relative position to window.
        """
        return self.winfo_pointerx() - self.winfo_rootx()

    def get_mouse_y(self):
        """
        Return mouse Y location relative to the window.
        Note: winfo_pointery is absolute mouse position (to screen, not window),
              winfo_rooty is absolute window position (to screen)
        Since move takes into account relative position to window,
        we adjust this mouse_y to be relative position to window.
        """
        return self.winfo_pointery() - self.winfo_rooty()

    """ GRAPHICAL OBJECT MANIPULATION """

    def get_left_x(self, obj):
        """
        Returns the leftmost x coordinate of this graphical object.
        """
        return self.coords(obj)[0]

    def get_top_y(self, obj):
        """
        Returns the topmost y coordinate of this graphical object.
        """
        return self.coords(obj)[1]

    def get_width(self, obj):
        """
        Returns the width of this graphical object.
        Use bbox for texts (since coords is 2-dimensional)
        """
        if self.type(obj) == "text": # two-dimensional coords
          return self.bbox(obj)[2] - self.bbox(obj)[0]
        return self.coords(obj)[2] - self.coords(obj)[0]

    def get_height(self, obj):
        """
        Returns the height of this graphical object.
        Use bbox for texts (since coords is 2-dimensional)
        """
        if self.type(obj) == "text": # two-dimensional coords
          return self.bbox(obj)[3] - self.bbox(obj)[1]
        return self.coords(obj)[3] - self.coords(obj)[1]

    def move_to(self, obj, new_x, new_y):
        """
        Moves the specified graphical object to a new location.
        Note: Implements manually due to inconsistencies on some
        machines of bbox vs. coord.
        """
        old_x = self.get_left_x(obj)
        old_y = self.get_top_y(obj)
        self.move(obj, new_x - old_x, new_y - old_y)

    def moveto(self, tagOrId, x='', y=''):
        """
        Override the built-in moveto method to use our implementation
        """
        self.move_to(tagOrId, x, y)

    def set_fill_color(self, obj, fill_color):
        """
        Sets the object to be filled with the specified fill color.
        Pass the empty string to set the object to be unfilled.
        """
        self.itemconfig(obj, fill=fill_color)

    # TODO: bug when removing outline?  Leaves "trail" on canvas?
    def set_outline_color(self, obj, outline_color):
        """
        Sets the object to be outlined with the specified outline color.
        Pass the empty string to set the object to be unfilled.
        """
        self.itemconfig(obj, outline=outline_color)

    # TODO: Write in documentation that default anchor is center
    # TODO: Write in documentation that default font is 13.
    def create_text(self, x, y, text):
        """
        Overwrites original text to avoid optional arguments.
        Note that default anchor is "center", which we should document.
        """
        return super().create_text(x, y, text=text)

    def set_text(self, obj, text):
        """
        Sets the text object to display the given text
        """
        self.itemconfigure(obj, text=text)

    def get_text(self, obj):
        """
        Returns the text displayed by the given text object
        """
        return self.itemcget(obj, 'text')

    def set_font(self, obj, font, size):
        """
        The default font on Mac OS X is (".AppleSystemUIFont", 13). 
        """
        self.itemconfigure(obj, font=(font, size))

    def raise_to_front(self, obj):
        """
        Sends the given object to the very front of the Z-ordering of the canvas
        (e.g. in front of all other elements).
        """
        self.tag_raise(obj)

    def lower_to_back(self, obj):
        """
        Sends the given object to the very back of the Z-ordering of the canvas
        (e.g. behind all other elements).
        """
        self.tag_lower(obj)

    # TODO: merge somehow with SimpleImage?
    def create_image(self, x, y, file_path):
        """
        Creates an image at the specified position on the canvas.
        Note that because of garbage collection after method exit, the image
        is explicitly saved into a hidden dictionary.
        """
        from PIL import ImageTk
        from PIL import Image
        image = ImageTk.PhotoImage(Image.open(file_path))
        img_obj = super().create_image(x, y, anchor="nw", image=image)
        # note: if you dont do this, the image gets garbage collected!!!
        # TODO: introduces a memory leak which can be fixed by overloading delete
        self._image_gb_protection[img_obj] = image
        return img_obj
