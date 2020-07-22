"""
File: robot_face.py
-------------------
Draws an awesome robot face, with label and different colored
eyes!!!@#$%#@!
"""

from graphics import Canvas

FACE_WIDTH = 300      # The width of the robot face
FACE_HEIGHT = 350     # The height of the robot face
EYE_DIAMETER = 70     # The diameter of each robot eye
EYE_Y_OFFSET = 40     # The distance from the top of the head to the top of the eyes
EYE_X_SEPARATION = 40 # The distance between the left eye and right eye
MOUTH_WIDTH = 150     # The width of the mouth
MOUTH_HEIGHT = 30     # The height of the mouth
MOUTH_Y_OFFSET = 200  # The distance from the top of the head to the top of the mouth
LABEL_Y = 40          # The distance from the top of the screen to the center of the text

def main():
  canvas = Canvas()
  canvas.set_canvas_title("Draw Robot Face")

  ## Start of your code
  draw_head(canvas)
  draw_mouth(canvas)
  draw_eyes(canvas)
  draw_label(canvas)
  ## End of your code

  canvas.mainloop()

def draw_head(canvas): 
  x = (canvas.get_canvas_width() - FACE_WIDTH)/2
  y = (canvas.get_canvas_height() - FACE_HEIGHT)/2
  head = canvas.create_rectangle(x, y, x + FACE_WIDTH, y + FACE_HEIGHT)
  canvas.set_fill_color(head, "yellow")

def draw_mouth(canvas):
  head_x = (canvas.get_canvas_width() - FACE_WIDTH)/2
  head_y = (canvas.get_canvas_height() - FACE_HEIGHT)/2

  mouth_x = head_x + (FACE_WIDTH - MOUTH_WIDTH) / 2
  mouth_y = head_y + MOUTH_Y_OFFSET      # mouth offset is from top of the head

  mouth = canvas.create_rectangle(mouth_x, mouth_y,
                                  mouth_x + MOUTH_WIDTH, mouth_y + MOUTH_HEIGHT)
  canvas.set_fill_color(mouth, "black")

def draw_eyes(canvas):
  head_y = (canvas.get_canvas_height() - FACE_HEIGHT)/2
  eye_y = head_y + EYE_Y_OFFSET           # eye offset is from the top of the head

  right_x = canvas.get_canvas_width()/2 + EYE_X_SEPARATION/2
  right_eye = canvas.create_oval(right_x, eye_y,
                                right_x + EYE_DIAMETER,  eye_y + EYE_DIAMETER)
  canvas.set_fill_color(right_eye, "green")

  left_x = canvas.get_canvas_width()/2 - EYE_X_SEPARATION/2 - EYE_DIAMETER
  left_eye = canvas.create_oval(left_x, eye_y,
                                left_x + EYE_DIAMETER,  eye_y + EYE_DIAMETER)
  canvas.set_fill_color(left_eye, "blue")


def draw_label(canvas):
  x = canvas.get_canvas_width()/2
  label = canvas.create_text(x, LABEL_Y, "Robot Face")
  canvas.set_font(label, "Times New Roman", 44)

if __name__ == "__main__":
    main()
