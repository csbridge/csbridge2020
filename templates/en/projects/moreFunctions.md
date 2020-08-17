template: templates/en/projects/projectTemplate.ptl
title: More Functions
credit: Tyler Conklin, based on past problems as created by Mehran Sahami, Keith Schwarz, Eric Roberts and others.

These are bonus programs! They are meant to be challenging. They are not listed in order of difficulty, so choose whichever programs sound interesting!


## Fibonacci
File: `fibonacci.py`

In the 13th century, the Italian mathematician Leonardo Fibonacci—as a way to explain the geometric growth of a population of rabbits—devised a mathematical sequence that now bears his name.  The first two terms in this sequence, Fib(0) and Fib(1), are 0 and 1, and every subsequent term is the sum of the preceding two.  Thus, the first several terms in the Fibonacci sequence look like this:
					<center>
						Fib(0)	=	0</br>
						Fib(1)	=	1</br>
						Fib(2)	=	1	(0 + 1)</br>
						Fib(3)	=	2	(1 + 1)</br>
						Fib(4)	=	3	(1 + 2)</br>
						Fib(5)	=	5	(2 + 3)</br>
					</center>
					</br>

Write a program that displays the terms in the Fibonacci sequence. This will require writing a function that takes as a parameter, the value of the max term that should be printed. The `main()` function has already been written:

```
def main():
	fibonacci(60)
	fibonacci(500)
```

This would produce an output of:

```
0
1
1
2
3
5
8
13
21
34
55
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
```

## Draw Centered Label
File: `centered_label.py`

Write a program that draws a centered label. The text for the label should be a parameter to a function, as should be its font name and font size. The `main()` function is already written for you:

```
def main():
    canvas = Canvas()
    canvas.set_canvas_title("Centered Label")
    draw_centered_label(canvas, "Coding Rocks!", "Courier", 40)
    canvas.mainloop()
```

This would produce an output like below:

<center>
<img style="width:500px; border: 1px solid black" src="{{pathToRoot}}img/projects/moreFunctions/centeredLabel.png">
</center>

## Speedy Shopper
File: `speedy_shopper.py`

Items on sale at a store are listed with the percent off for that item. For example, an item that originally costs 100 Turkish Lira at 25% off would cost 75 Turkish Lira. Write a program that calculates the cost of an on-sale item. Specifically, write a function that takes in a price, and the percent off for that item. This function should return the new price for that item. The `mai()` function is already written for you:

```
def main():
	print(calculate_price(100.32, 0.25))
	print(calculate_price(53.27, 0.15))
```

This would produce an output like below:

```
75.24
45.2795
```