template: templates/en/projects/projectTemplate.ptl
title: Print Indices
credit: Written by Lisa Yan and Nick Troccoli

File: `print_indices.py`

Print out the coordinates of a 5x5 grid.

```
Print the coordinates of a 5x5 grid, row by row.
(0,0), (1,0), (2,0), (3,0), (4,0)
(0,1), (1,1), (2,1), (3,1), (4,1)
(0,2), (1,2), (2,2), (3,2), (4,2)
(0,3), (1,3), (2,3), (3,3), (4,3)
(0,4), (1,4), (2,4), (3,4), (4,4)
```

Hint: try the following code structure:
```
for i in range(5):
    for j in range(5):
        # some code...
```

## Milestone 1
Try adding just one print statement to print out the values of `i` and `j` in the body of the inner `for` loop.  What do you observe?

## Milestone 2
Print out the coordinates, each on their own line, in row order, like this:

```
(0,0)
(1,0)
(2,0)
(3,0)
(4,0)
(0,1)
(1,1)
...
```

## Milestone 3
Now, try to print each row on the same line.  Note that using `print()` automatically adds a line break/new line after what is printed.  To tell it not to do this, add `end=''` right before the closing parentheses.  For instance, `print("some text or variables")` adds a line break/new line, whereas `print("some text or variables", end='')` does not.