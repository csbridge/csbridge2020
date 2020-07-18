"""
File: hole_puncher.py
---------------------
This program lets you click anywhere on the canvas to
"punch a hole" (e.g. draw a black circle there).
"""

from graphics import Canvas


class Program:
    HOLE_RADIUS = 10
    canvas = Canvas()

    def main(self):
        self.canvas.set_canvas_title("Hole Puncher")
        self.canvas.set_on_mouse_pressed(self.draw_hole)
        self.canvas.mainloop()

    def draw_hole(self, x, y):
        """
        Draws a circle on the canvas centered at the given location.
        """
        oval = self.canvas.create_oval(x - self.HOLE_RADIUS, y - self.HOLE_RADIUS,
                                       x + self.HOLE_RADIUS, y + self.HOLE_RADIUS)
        self.canvas.set_fill_color(oval, 'black')
        self.canvas.update()


if __name__ == "__main__":
    Program().main()
