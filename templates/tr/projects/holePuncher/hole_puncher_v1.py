import graphics

def main():
  canvas = graphics.make_canvas(500, 500, "Hole Puncher")
  while True:
    clicks = canvas.get_new_clicks()
    for click in clicks:
      draw_hole(canvas, click.x, click.y)
    canvas.update() 

def draw_hole(canvas, x, y):
  r = 5
  oval = canvas.create_oval(x - r, y - r, x + r, y + 5)
  canvas.set_fill(oval, 'black')

if __name__ == '__main__':
  main()