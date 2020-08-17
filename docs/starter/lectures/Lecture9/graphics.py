import random
import tkinter
import tkinter.font

"""
File: graphics.py
Authors: Chris Piech, Lisa Yan and Nick Troccoli
Version Date: August 11, 2020

TODO notes:
- support window resizing
"""


class Canvas(tkinter.Canvas):
    """
    Canvas is a simplified interface on top of the tkinter Canvas to allow for easier manipulation of graphical objects.
    Canvas has a variety of functionality to create, modify and delete graphical objects, and also get information
    about the canvas contents.  Canvas is a subclass of `tkinter.Canvas`, so all tkinter functionality is also available
    if needed.
    """

    DEFAULT_WIDTH = 754
    """The default width of the canvas is 754."""

    DEFAULT_HEIGHT = 492
    """The default height of the canvas is 492."""

    DEFAULT_TITLE = "Canvas"
    """The default text shown in the canvas window titlebar is 'Canvas'."""

    COLORS = ['snow', 'ghost white', 'white smoke', 'gainsboro', 'floral white', 'old lace', 'linen', 'antique white',
              'papaya whip', 'blanched almond', 'bisque', 'peach puff', 'navajo white', 'lemon chiffon', 'mint cream',
              'azure', 'alice blue', 'lavender', 'lavender blush', 'misty rose', 'dark slate gray', 'dim gray',
              'slate gray', 'light slate gray', 'gray', 'light grey', 'midnight blue', 'navy', 'cornflower blue',
              'dark slate blue', 'slate blue', 'medium slate blue', 'light slate blue', 'medium blue', 'royal blue',
              'blue', 'dodger blue', 'deep sky blue', 'sky blue', 'light sky blue', 'steel blue', 'light steel blue',
              'light blue', 'powder blue', 'pale turquoise', 'dark turquoise', 'medium turquoise', 'turquoise', 'cyan',
              'light cyan', 'cadet blue', 'medium aquamarine', 'aquamarine', 'dark green', 'dark olive green',
              'dark sea green', 'sea green', 'medium sea green', 'light sea green', 'pale green', 'spring green',
              'lawn green', 'medium spring green', 'green yellow', 'lime green', 'yellow green', 'forest green',
              'olive drab', 'dark khaki', 'khaki', 'pale goldenrod', 'light goldenrod yellow', 'light yellow', 'yellow',
              'gold', 'light goldenrod', 'goldenrod', 'dark goldenrod', 'rosy brown', 'indian red', 'saddle brown',
              'sandy brown', 'dark salmon', 'salmon', 'light salmon', 'orange', 'dark orange', 'coral', 'light coral',
              'tomato', 'orange red', 'red', 'hot pink', 'deep pink', 'pink', 'light pink', 'pale violet red', 'maroon',
              'medium violet red', 'violet red', 'medium orchid', 'dark orchid', 'dark violet', 'blue violet', 'purple',
              'medium purple', 'thistle', 'snow2', 'snow3', 'snow4', 'seashell2', 'seashell3', 'seashell4',
              'AntiqueWhite1', 'AntiqueWhite2', 'AntiqueWhite3', 'AntiqueWhite4', 'bisque2', 'bisque3', 'bisque4',
              'PeachPuff2', 'PeachPuff3', 'PeachPuff4', 'NavajoWhite2', 'NavajoWhite3', 'NavajoWhite4', 'LemonChiffon2',
              'LemonChiffon3', 'LemonChiffon4', 'cornsilk2', 'cornsilk3', 'cornsilk4', 'ivory2', 'ivory3', 'ivory4',
              'honeydew2', 'honeydew3', 'honeydew4', 'LavenderBlush2', 'LavenderBlush3', 'LavenderBlush4', 'MistyRose2',
              'MistyRose3', 'MistyRose4', 'azure2', 'azure3', 'azure4', 'SlateBlue1', 'SlateBlue2', 'SlateBlue3',
              'SlateBlue4', 'RoyalBlue1', 'RoyalBlue2', 'RoyalBlue3', 'RoyalBlue4', 'blue2', 'blue4', 'DodgerBlue2',
              'DodgerBlue3', 'DodgerBlue4', 'SteelBlue1', 'SteelBlue2', 'SteelBlue3', 'SteelBlue4', 'DeepSkyBlue2',
              'DeepSkyBlue3', 'DeepSkyBlue4', 'SkyBlue1', 'SkyBlue2', 'SkyBlue3', 'SkyBlue4', 'LightSkyBlue1',
              'LightSkyBlue2', 'LightSkyBlue3', 'LightSkyBlue4', 'SlateGray1', 'SlateGray2', 'SlateGray3', 'SlateGray4',
              'LightSteelBlue1', 'LightSteelBlue2', 'LightSteelBlue3', 'LightSteelBlue4', 'LightBlue1', 'LightBlue2',
              'LightBlue3', 'LightBlue4', 'LightCyan2', 'LightCyan3', 'LightCyan4', 'PaleTurquoise1', 'PaleTurquoise2',
              'PaleTurquoise3', 'PaleTurquoise4', 'CadetBlue1', 'CadetBlue2', 'CadetBlue3', 'CadetBlue4', 'turquoise1',
              'turquoise2', 'turquoise3', 'turquoise4', 'cyan2', 'cyan3', 'cyan4', 'DarkSlateGray1', 'DarkSlateGray2',
              'DarkSlateGray3', 'DarkSlateGray4', 'aquamarine2', 'aquamarine4', 'DarkSeaGreen1', 'DarkSeaGreen2',
              'DarkSeaGreen3', 'DarkSeaGreen4', 'SeaGreen1', 'SeaGreen2', 'SeaGreen3', 'PaleGreen1', 'PaleGreen2',
              'PaleGreen3', 'PaleGreen4', 'SpringGreen2', 'SpringGreen3', 'SpringGreen4', 'green2', 'green3', 'green4',
              'chartreuse2', 'chartreuse3', 'chartreuse4', 'OliveDrab1', 'OliveDrab2', 'OliveDrab4', 'DarkOliveGreen1',
              'DarkOliveGreen2', 'DarkOliveGreen3', 'DarkOliveGreen4', 'khaki1', 'khaki2', 'khaki3', 'khaki4',
              'LightGoldenrod1', 'LightGoldenrod2', 'LightGoldenrod3', 'LightGoldenrod4', 'LightYellow2',
              'LightYellow3', 'LightYellow4', 'yellow2', 'yellow3', 'yellow4', 'gold2', 'gold3', 'gold4', 'goldenrod1',
              'goldenrod2', 'goldenrod3', 'goldenrod4', 'DarkGoldenrod1', 'DarkGoldenrod2', 'DarkGoldenrod3',
              'DarkGoldenrod4', 'RosyBrown1', 'RosyBrown2', 'RosyBrown3', 'RosyBrown4', 'IndianRed1', 'IndianRed2',
              'IndianRed3', 'IndianRed4', 'sienna1', 'sienna2', 'sienna3', 'sienna4', 'burlywood1', 'burlywood2',
              'burlywood3', 'burlywood4', 'wheat1', 'wheat2', 'wheat3', 'wheat4', 'tan1', 'tan2', 'tan4', 'chocolate1',
              'chocolate2', 'chocolate3', 'firebrick1', 'firebrick2', 'firebrick3', 'firebrick4', 'brown1', 'brown2',
              'brown3', 'brown4', 'salmon1', 'salmon2', 'salmon3', 'salmon4', 'LightSalmon2', 'LightSalmon3',
              'LightSalmon4', 'orange2', 'orange3', 'orange4', 'DarkOrange1', 'DarkOrange2', 'DarkOrange3',
              'DarkOrange4', 'coral1', 'coral2', 'coral3', 'coral4', 'tomato2', 'tomato3', 'tomato4', 'OrangeRed2',
              'OrangeRed3', 'OrangeRed4', 'red2', 'red3', 'red4', 'DeepPink2', 'DeepPink3', 'DeepPink4', 'HotPink1',
              'HotPink2', 'HotPink3', 'HotPink4', 'pink1', 'pink2', 'pink3', 'pink4', 'LightPink1', 'LightPink2',
              'LightPink3', 'LightPink4', 'PaleVioletRed1', 'PaleVioletRed2', 'PaleVioletRed3', 'PaleVioletRed4',
              'maroon1', 'maroon2', 'maroon3', 'maroon4', 'VioletRed1', 'VioletRed2', 'VioletRed3', 'VioletRed4',
              'magenta2', 'magenta3', 'magenta4', 'orchid1', 'orchid2', 'orchid3', 'orchid4', 'plum1', 'plum2', 'plum3',
              'plum4', 'MediumOrchid1', 'MediumOrchid2', 'MediumOrchid3', 'MediumOrchid4', 'DarkOrchid1', 'DarkOrchid2',
              'DarkOrchid3', 'DarkOrchid4', 'purple1', 'purple2', 'purple3', 'purple4', 'MediumPurple1',
              'MediumPurple2', 'MediumPurple3', 'MediumPurple4', 'thistle1', 'thistle2', 'thistle3', 'thistle4',
              'gray1', 'gray2', 'gray3', 'gray4', 'gray5', 'gray6', 'gray7', 'gray8', 'gray9', 'gray10', 'gray11',
              'gray12', 'gray13', 'gray14', 'gray15', 'gray16', 'gray17', 'gray18', 'gray19', 'gray20', 'gray21',
              'gray22', 'gray23', 'gray24', 'gray25', 'gray26', 'gray27', 'gray28', 'gray29', 'gray30', 'gray31',
              'gray32', 'gray33', 'gray34', 'gray35', 'gray36', 'gray37', 'gray38', 'gray39', 'gray40', 'gray42',
              'gray43', 'gray44', 'gray45', 'gray46', 'gray47', 'gray48', 'gray49', 'gray50', 'gray51', 'gray52',
              'gray53', 'gray54', 'gray55', 'gray56', 'gray57', 'gray58', 'gray59', 'gray60', 'gray61', 'gray62',
              'gray63', 'gray64', 'gray65', 'gray66', 'gray67', 'gray68', 'gray69', 'gray70', 'gray71', 'gray72',
              'gray73', 'gray74', 'gray75', 'gray76', 'gray77', 'gray78', 'gray79', 'gray80', 'gray81', 'gray82',
              'gray83', 'gray84', 'gray85', 'gray86', 'gray87', 'gray88', 'gray89', 'gray90', 'gray91', 'gray92',
              'gray93', 'gray94', 'gray95', 'gray97', 'gray98', 'gray99']
    """
    This is a list of names of all colors available to use for graphics on the Canvas.  This list of Tkinter colors
    was taken from https://stackoverflow.com/questions/4969543/colour-chart-for-tkinter-and-tix.
    """

    def __init__(self, width=DEFAULT_WIDTH, height=DEFAULT_HEIGHT):
        """
        When creating a canvas, you can optionally specify a width and height.  If no width and height are specified,
        the canvas is initialized with its default size.

        Args:
            width: the width of the Canvas to create (or if not specified, uses `Canvas.DEFAULT_WIDTH`)
            height: the height of the Canvas to create (or if not specified, uses `Canvas.DEFAULT_HEIGHT`)
        """

        # Create the main program window
        self.main_window = tkinter.Tk()
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

        # List of key presses not handled by a callback
        self.key_presses = []

        # These are state variables so wait_for_click knows when to stop waiting and to
        # not call handlers when we are waiting for click
        self.wait_for_click_click_happened = False
        self.currently_waiting_for_click = False

        # bind events
        self.focus_set()
        self.bind("<Button-1>", lambda event: self.__mouse_pressed(event))
        self.bind("<ButtonRelease-1>", lambda event: self.__mouse_released(event))
        self.bind("<Key>", lambda event: self.__key_pressed(event))
        self.bind("<Enter>", lambda event: self.__mouse_entered())
        self.bind("<Leave>", lambda event: self.__mouse_exited())

        self._image_gb_protection = {}
        self.pack()
        self.update()

    def set_canvas_background_color(self, color):
        """
        Sets the background color of the canvas to the specified color string.

        Args:
            color: the color (string) to make the background of the canvas.
        """
        self.config(background=color)

    def get_canvas_width(self):
        """
        Get the width of the canvas.

        Returns:
            the current width of the canvas.
        """

        return self.winfo_width()

    def get_canvas_height(self):
        """
        Get the height of the canvas.

        Returns:
            the current height of the canvas.
        """
        return self.winfo_height()

    def set_canvas_title(self, title):
        """
        Sets the title text displayed in the Canvas's window title bar to be the specified text.

        Args:
            title: the text to display in the title bar
        """
        self.main_window.title(title)

    def set_canvas_size(self, width, height):
        """
        Sets the size of the canvas and its containing window to the specified width and height.

        Args:
            width: the width to set for the canvas and containing window
            height: the height to set for the canvas and containing window
        """
        self.main_window.geometry("{}x{}".format(width, height))
        self.config(width=width, height=height)

    """ EVENT HANDLING """

    def set_on_mouse_pressed(self, callback):
        """
        Set the specified function to be called whenever the mouse is pressed.  If this function is called
        multiple times, only the last specified function is called when the mouse is pressed.

        Args:
            callback: a function to call whenever the mouse is pressed.  Must take in two parameters, which
                are the x and y coordinates (in that order) of the mouse press that just occurred.  E.g. func(x, y).  If
                this parameter is None, no function will be called when the mouse is pressed.
        """
        self.on_mouse_pressed = callback

    def set_on_mouse_released(self, callback):
        """
        Set the specified function to be called whenever the mouse is released.  If this function is called
        multiple times, only the last specified function is called when the mouse is released.

        Args:
            callback: a function to call whenever the mouse is released.  Must take in two parameters, which
                are the x and y coordinates (in that order) of the mouse release that just occurred.  E.g. func(x, y).
                If this parameter is None, no function will be called when the mouse is released.
        """
        self.on_mouse_released = callback

    def set_on_key_pressed(self, callback):
        """
        Set the specified function to be called whenever a keyboard key is pressed.  If this function is called
        multiple times, only the last specified function is called when a key is pressed.

        Args:
            callback: a function to call whenever a key is pressed.  Must take in one parameter, which
                is the text name of the key that was just pressed (e.g. 'a' for the a key, 'b' for the b key, etc).
                E.g. func(key_char).  If this parameter is None, no function will be called when a key is pressed.
        """
        self.on_key_pressed = callback

    def get_new_mouse_clicks(self):
        """
        Returns a list of all mouse clicks that have occurred since the last call to this method or any registered
        mouse handler.

        Returns:
            a list of all mouse clicks that have occurred since the last call to this method or any registered
                mouse handler.  Each mouse click contains x and y properties for the click location, e.g.
                clicks = canvas.get_new_mouse_clicks(); print(clicks[0].x).
        """
        presses = self.mouse_presses
        self.mouse_presses = []
        return presses

    def get_new_key_presses(self):
        """
        Returns a list of all key presses that have occurred since the last call to this method or any registered
        key handler.

        Returns:
            a list of all key presses that have occurred since the last call to this method or any registered
                key handler.  Each key press contains a keysym property for the key pressed, e.g.
                presses = canvas.get_new_key_presses(); print(presses[0].keysym).
        """
        presses = self.key_presses
        self.key_presses = []
        return presses

    def __mouse_pressed(self, event):
        """
        Called every time the mouse is pressed.  If we are currently waiting for a mouse click via
        wait_for_click, do nothing.  Otherwise, if we have a registered mouse press handler, call that.  Otherwise,
        append the press to the list of mouse presses to be handled later.

        Args:
            event: an object representing the mouse press that just occurred.  Assumed to have x and y properties
                containing the x and y coordinates for this mouse press.
        """
        if not self.currently_waiting_for_click and self.on_mouse_pressed:
            self.on_mouse_pressed(event.x, event.y)
        elif not self.currently_waiting_for_click:
            self.mouse_presses.append(event)

    def __mouse_released(self, event):
        """
        Called every time the mouse is released.  If we are currently waiting for a mouse click via
        wait_for_click, update our state to reflect that a click happened.  Otherwise, if we have a registered mouse
        release handler, call that.

        Args:
            event: an object representing the mouse release that just occurred.  Assumed to have x and y properties
                containing the x and y coordinates for this mouse release.
        """

        # Do this all in one go to avoid setting click happened to True,
        # then having wait for click set currently waiting to false, then we go
        if self.currently_waiting_for_click:
            self.wait_for_click_click_happened = True
            return

        self.wait_for_click_click_happened = True
        if self.on_mouse_released:
            self.on_mouse_released(event.x, event.y)

    def __key_pressed(self, event):
        """
        Called every time a keyboard key is pressed.  If we have a registered key press handler, call that.  Otherwise,
        append the key press to the list of key presses to be handled later.

        Args:
            event: an object representing the key press that just occurred.  Assumed to have a keysym property
                containing the name of this key press.
        """
        if self.on_key_pressed:
            self.on_key_pressed(event.keysym)
        else:
            self.key_presses.append(event)

    def __mouse_entered(self):
        """
        Called every time the mouse enters the canvas.  Updates the internal state to record that
        the mouse is currently on the canvas.
        """
        self.mouse_on_canvas = True

    def __mouse_exited(self):
        """
        Called every time the mouse exits the canvas.  Updates the internal state to record that
        the mouse is currently not on the canvas.
        """
        self.mouse_on_canvas = False

    def mouse_is_on_canvas(self):
        """
        Returns whether or not the mouse is currently on the canvas.

        Returns:
            True if the mouse is currently on the canvas, or False otherwise.
        """
        return self.mouse_on_canvas

    def wait_for_click(self):
        """
        Waits until a mouse click occurs, and then returns.
        """
        self.currently_waiting_for_click = True
        self.wait_for_click_click_happened = False
        while not self.wait_for_click_click_happened:
            self.update()
        self.currently_waiting_for_click = False
        self.wait_for_click_click_happened = False

    def get_mouse_x(self):
        """
        Returns the mouse's current X location on the canvas.

        Returns:
            the mouses's current X location on the canvas.
        """
        """
        Note: winfo_pointerx is absolute mouse position (to screen, not window),
              winfo_rootx is absolute window position (to screen)
        Since move takes into account relative position to window,
        we adjust this mouse_x to be relative position to window.
        """
        return self.winfo_pointerx() - self.winfo_rootx()

    def get_mouse_y(self):
        """
        Returns the mouse's current Y location on the canvas.

        Returns:
            the mouse's current Y location on the canvas.
        """
        """
        Note: winfo_pointery is absolute mouse position (to screen, not window),
              winfo_rooty is absolute window position (to screen)
        Since move takes into account relative position to window,
        we adjust this mouse_y to be relative position to window.
        """
        return self.winfo_pointery() - self.winfo_rooty()

    """ GRAPHICAL OBJECT MANIPULATION """

    def get_left_x(self, obj):
        """
        Returns the leftmost x coordinate of the specified graphical object.

        Args:
            obj: the object for which to calculate the leftmost x coordinate

        Returns:
            the leftmost x coordinate of the specified graphical object.
        """
        if self.type(obj) != "text":
            return self.coords(obj)[0]
        else:
            return self.coords(obj)[0] - self.get_width(obj) / 2

    def get_top_y(self, obj):
        """
        Returns the topmost y coordinate of the specified graphical object.

        Args:
            obj: the object for which to calculate the topmost y coordinate

        Returns:
            the topmost y coordinate of the specified graphical object.
        """
        if self.type(obj) != "text":
            return self.coords(obj)[1]
        else:
            return self.coords(obj)[1] - self.get_height(obj) / 2

    def get_width(self, obj):
        """
        Returns the width of the specified graphical object.

        Args:
            obj: the object for which to calculate the width

        Returns:
            the width of the specified graphical object.
        """
        if len(self.coords(obj)) == 2: # two-dimensional coords
            return self.bbox(obj)[2] - self.bbox(obj)[0]
        return self.coords(obj)[2] - self.coords(obj)[0]

    def get_height(self, obj):
        """
        Returns the height of the specified graphical object.

        Args:
            obj: the object for which to calculate the height

        Returns:
            the height of the specified graphical object.
        """
        if len(self.coords(obj)) == 2: # two-dimensional coords
            return self.bbox(obj)[3] - self.bbox(obj)[1]
        return self.coords(obj)[3] - self.coords(obj)[1]

    def move_to(self, obj, new_x, new_y):
        """
        Same as `Canvas.moveto`.
        """
        # Note: Implements manually due to inconsistencies on some machines of bbox vs. coord.
        old_x = self.get_left_x(obj)
        old_y = self.get_top_y(obj)
        self.move(obj, new_x - old_x, new_y - old_y)

    def moveto(self, obj, x='', y=''):
        """
        Moves the specified graphical object to the specified location, which is its bounding box's
        new upper-left corner.

        Args:
            obj: the object to move
            x: the new x coordinate of the upper-left corner for the object
            y: the new y coordinate of the upper-left corner for the object
        """
        self.move_to(obj, float(x), float(y))

    def move(self, obj, dx, dy):
        """
        Moves the specified graphical object by the specified amounts in the x and y directions.

        Args:
            obj: the object to move
            dx: the amount by which to change the object's x position
            dy: the amount by which to change the object's y position
        """
        super(Canvas, self).move(obj, dx, dy)

    def set_size(self, obj, width, height):
        """
        Sets the width and height of the specified graphical object.  Cannot be used to change the size of an image.

        Args:
            obj: the object for which to set the width and height
            width: the new width for the object
            height: the new height for the object
        """
        if self.type(obj) == "image":
            assert False, "Image size cannot be changed after creating the image"
        x = self.get_left_x(obj)
        y = self.get_top_y(obj)
        self.coords(obj, x, y, x + width, y + height)
        
    def delete(self, obj):
        """
        Remove the specified graphical object from the canvas.

        Args:
            obj: the graphical object to remove from the canvas
        """
        super(Canvas, self).delete(obj)

    def set_hidden(self, obj, hidden):
        """
        Sets the given graphical object to be either hidden or visible on the canvas.

        Args:
            obj: the graphical object to make hidden or visible on the canvas.
            hidden: True if the object should be hidden, False if the object should be visible.
        """
        self.itemconfig(obj, state='hidden' if hidden else 'normal')

    def find_element_at(self, x, y):
        """
        Finds the topmost element overlapping this location.

        Args:
            x: the x coordinate of the location
            y: the y coordinate of the location

        Returns:
            the top-most graphical object on the canvas at this location (None otherwise)
        """
        closest = self.find_closest(x, y)

        closest_left_x = self.get_left_x(closest)
        closest_right_x = closest_left_x + self.get_width(closest)
        closest_top_y = self.get_top_y(closest)
        closest_bottom_y = closest_top_y + self.get_height(closest)

        # If this object entirely contains this point, then return it.  Otherwise, there is no object here.
        if closest_left_x <= x <= closest_right_x and closest_top_y <= y <= closest_bottom_y:
            return closest

        return None
        
    def find_overlapping(self, x1, y1, x2, y2):
        """
        Get a list of graphical objects on the canvas that overlap with the specified bounding box.

        Args:
            x1: the x coordinate of the upper-left corner of the bounding box
            y1: the y coordinate of the upper-left corner of the bounding box
            x2: the x coordinate of the lower-right corner of the bounding box
            y2: the y coordinate of the lower-right corner of the bounding box

        Returns:
            a list of graphical objects on the canvas that overlap with this bounding box.
        """
        return super(Canvas, self).find_overlapping(x1, y1, x2, y2)

    def get_random_color(self):
        """
        Returns a randomly-selected color.

        Returns:
            A randomly-selected color, as a string.
        """
        return random.choice(self.COLORS)

    def set_fill_color(self, obj, fill_color):
        """
        Sets the fill color of the specified graphical object.  Cannot be used to change the fill color
        of non-fillable objects such as images - throws a tkinter.TclError.

        Args:
            obj: the object for which to set the fill color
            fill_color: the color to set the fill color to be, as a string.  If this is the empty string,
                the object will be set to be not filled.
        """
        try:
            self.itemconfig(obj, fill=fill_color)
        except tkinter.TclError:
            raise tkinter.TclError("You can't set the fill color on this object")

    def set_outline_color(self, obj, outline_color):
        """
        Sets the outline color of the specified graphical object.  Cannot be used to change the outline color
        of non-outlined objects such as images or text  - throws a tkinter.TclError.

        Args:
            obj: the object for which to set the outline color
            outline_color: the color to set the outline color to be, as a string.  If this is the empty string,
                the object will be set to not have an outline.
        """
        try:
            self.itemconfig(obj, outline=outline_color)
        except tkinter.TclError as e:
            raise tkinter.TclError("You can't set the outline color on this object")

    def set_color(self, obj, color):
        """
        Sets the fill and outline color of the specified graphical object.  If the object doesn't
        have one or more of a fill or outline color, setting of that color is ignored.

        Args:
            obj: the object for which to set the color
            color: the color to set the fill and outline colors to be, as a string.  If this is the empty string,
                the object will be set to be not filled and not outlined.
        """
        try:
            self.set_fill_color(obj, color)
        except tkinter.TclError:
            pass

        try:
            self.set_outline_color(obj, color)
        except tkinter.TclError:
            pass

    def set_outline_width(self, obj, width):
        """
        Sets the thickness of the outline of the specified graphical object.  Cannot be used on objects
        that are not outline-able, such as images or text.

        Args:
            obj: the object for which to set the outline width
            width: the width to set the outline to be.
        """
        self.itemconfig(obj, width=width)
        
    def create_line(self, x1, y1, x2, y2, *args, **kwargs):
        """
        Creates and returns a line graphical object on the screen from the specified point to the specified point.
        The line is drawn black.

        Args:
            x1: the starting x location of the line
            y1: the starting y location of the line
            x2: the ending x location of the line
            y2: the ending y location of the line
            args: you can optionally specify additional points on the line or shape
            kwargs: other tkinter keyword args

        Returns:
            the graphical line object between the two specified points.
        """
        return super(Canvas, self).create_line(x1, y1, x2, y2, *args, **kwargs)

    def create_rectangle(self, x1, y1, x2, y2, *args, **kwargs):
        """
        Creates and returns a rectangle graphical object on the screen with its top-left corner at the first coordinate
        and its bottom-right corner at the second coordinate.  The rect is drawn unfilled with a black outline.

        Args:
            x1: the top-left x location of the rect
            y1: the top-left y location of the rect
            x2: the bottom-right x location of the rect
            y2: the bottom-right y location of the rect
            kwargs: other tkinter keyword args

        Returns:
            the graphical rectangle object at the specified location.
        """
        return super(Canvas, self).create_rectangle(x1, y1, x2, y2, **kwargs)

    def create_oval(self, x1, y1, x2, y2, **kwargs):
        """
        Creates and returns an oval graphical object on the screen contained within the bounding box whose top left
        corner is the first coordinate, and whose bottom right corner is the second coordinate.  The oval is drawn
        unfilled with a black outline.

        Args:
            x1: the top-left x location of the bounding box
            y1: the top-left y location of the bounding box
            x2: the bottom-right x location of the bounding box
            y2: the bottom-right y location of the bounding box
            kwargs: other tkinter keyword args

        Returns:
            the graphical oval object at the specified location.
        """
        return super(Canvas, self).create_oval(x1, y1, x2, y2, **kwargs)

    def create_text(self, x, y, text, **kwargs):
        """
        Creates and returns a text graphical object on the screen at the specified location with the specified text.
        The specified x and y location is for the center of the text.  The text will be in size 13 font.

        Args:
            x: the x location of the center of the text
            y: the y location of the center of the text
            text: the text that should be displayed on the canvas at the given position
            kwargs: other tkinter keyword args

        Returns:
            the graphical text object that is displaying the specified text at the specified location.
        """
        return super().create_text(x, y, text=text, **kwargs)

    def set_text(self, obj, text):
        """
        Sets the text displayed by the given text object.  Cannot be used on any non-text graphical object.

        Args:
            obj: the text object for which to set the displayed text
            text: the new text for this graphical object to display
        """
        self.itemconfig(obj, text=text)

    def get_text(self, obj):
        """
        Returns the text displayed by the given text object.  Cannot be used on any non-text graphical object.

        Args:
            obj: the text object for which to get the displayed text

        Returns:
            the text currently displayed by this graphical object.
        """
        return self.itemcget(obj, 'text')

    def set_font(self, obj, font, size):
        """
        Sets the font and size for the text displayed by the given text object.  Cannot be used on any non-text
        graphical object.

        Args:
            obj: the text object for which to set the font and size
            font: the name of the font, as a string
            size: the size of the font
        """
        self.itemconfig(obj, font=(font, size))

    def raise_to_front(self, obj):
        """
        Sends the given object to the very front of all the other objects on the canvas.

        Args:
            obj: the object to bring to the front of the objects on the canvas
        """
        self.raise_in_front_of(obj, 'all')

    def raise_in_front_of(self, obj, above):
        """
        Sets the first object to be directly in front of the second object in Z-ordering on the canvas.  In other words,
        the first object will now appear in front of the second object and all objects behind the second object,
        but behind all objects that the second object is also behind.

        Args:
            obj: the object to put in front of the second object
            above: the object to put the first object directly in front of
        """
        self.tag_raise(obj, above)

    def lower_to_back(self, obj):
        """
        Sends the given object to be behind all the other objects on the canvas

        Args:
            obj: the object to put behind all other objects on the canvas
        """
        self.lower_behind(obj, 'all')

    def lower_behind(self, obj, behind):
        """
        Sets the first object to be directly behind the second object in Z-ordering on the canvas.  In other words,
        the first object will now appear directly behind the second object and all objects in front of the
        second object, but in front of all objects that the second object is also in front of.

        Args:
            obj: the object to put in front of the second object
            behind: the object to put the first object directly behind
        """
        self.tag_lower(obj, behind)

    def create_image(self, x, y, file_path, **kwargs):
        """
        Creates an image with the specified filename at the specified position on the canvas.  The image
        will be the same size as the image file loaded in.

        Args:
            x: the x coordinate of the top-left corner of the image on the canvas
            y: the y coordinate of the top-left corner of the image on the canvas
            file_path: the path to the image file to load and display on the canvas
            kwargs: other tkinter keyword args

        Returns:
            the graphical image object that is displaying the specified image at the specified location.
        """
        return self.__create_image_with_optional_size(x, y, file_path, **kwargs)

    def create_image_with_size(self, x, y, width, height, file_path, **kwargs):
        """
        Creates an image with the specified filename at the specified position on the canvas, and resized
        to the specified width and height.

        Args:
            x: the x coordinate of the top-left corner of the image on the canvas
            y: the y coordinate of the top-left corner of the image on the canvas
            width: the width to set for the image
            height: the height to set for the image
            file_path: the path to the image file to load and display on the canvas
            kwargs: other tkinter keyword args

        Returns:
            the graphical image object that is displaying the specified image at the specified location with the
                specified size.
        """
        return self.__create_image_with_optional_size(x, y, file_path, width=width, height=height, **kwargs)

    def __create_image_with_optional_size(self, x, y, file_path, width=None, height=None, **kwargs):
        """
        Creates an image with the specified filename at the specified position on the canvas.
        Optionally specify the width and height to resize the image.

        Args:
            x: the x coordinate of the top-left corner of the image on the canvas
            y: the y coordinate of the top-left corner of the image on the canvas
            file_path: the path to the image file to load and display on the canvas
            width: optional width to include for the image.  If none, uses the width of the image file.
            height: optional height to include for the image  If none, uses the height of the image file.
            kwargs: other tkinter keyword args

        Returns:
            the graphical image object that is displaying the specified image at the specified location.
        """
        from PIL import ImageTk
        from PIL import Image
        image = Image.open(file_path)

        # Resize the image if another width and height is specified
        if width is not None and height is not None:
            image = image.resize((width, height))

        image = ImageTk.PhotoImage(image)
        img_obj = super().create_image(x, y, anchor="nw", image=image, **kwargs)
        # note: if you don't do this, the image gets garbage collected!!!
        # this introduces a memory leak which can be fixed by overloading delete
        self._image_gb_protection[img_obj] = image
        return img_obj
