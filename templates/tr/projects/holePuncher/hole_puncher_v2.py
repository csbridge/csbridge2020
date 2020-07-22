import graphics

def main():
  canvas = graphics.make_canvas(500, 500, "Hole Puncher")
  canvas.set_mouse_clicked(on_click)
  canvas.mainloop()

def on_click(canvas, click):
  draw_hole(canvas, click.x, click.y)

def draw_hole(canvas, x, y):
  r = 5
  oval = canvas.create_oval(x - r, y - r, x + r, y + 5)
  canvas.set_fill(oval, 'black')

if __name__ == '__main__':
  main()