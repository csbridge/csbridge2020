template: templates/teach/notes/template.ptl
problemtitle: Looping Fun

This bonus problem is a collection of smaller looping programs, in no particular order.

The core idea behind each problem for students is to think about how a value of the loop counter can tell you what to do. For instance, in problem 1, we might consider, "when i is 0, I want to print 1; when i is 1, I want to print 3, when i is 2, I want to print 5, etc.".  It may be helpful for students to write out, for different values of `i`, what they want to print, to see if they can spot a pattern.

## Looping Fun 1
For this problem, we want to print the following:
```
i = 0 -> 1
i = 1 -> 3
i = 2 -> 5
...
```

One useful insight is that this is printing out the first 10 even numbers, but subtracted by 1:

```
i = 0 -> (2 - 1)
i = 1 -> (4 - 1)
i = 2 -> (6 - 1)
```

This may be easier to think about, since to print out even numbers, we can add 1 to `i`, and then multiply by 2.  Thus, we want to print out (`i` + 1) * 2 - 1.

## Looping Fun 2
For this problem, we want to print the following:
```
i = 0 -> 20
i = 1 -> 18
i = 2 -> 16
...
```

One useful insight here is that as `i` increases, we are "subtracting more from 20".  In particular, we are subtracting:

```
i = 0 -> subtract 0
i = 1 -> subtract 2
i = 2 -> subtract 4
...
```

Therefore, we want to print out 20 - (`i` * 2).  (You could also loop from 0 to 19, as the problem also asks, and print out 20 - `i` only if `i` is even, but the first approach is more efficient because we loop 10 times instead of 20).

## Looping Fun 3
For this problem, it's helpful to start by ignoring the "same line" printing and just print the first 10 squares.  In that case, we want to print the following:
```
i = 0 -> 1 (1 squared)
i = 1 -> 4 (2 squared)
i = 2 -> 9 (3 squared)
...
```

Here, we notice that the number we are squaring is `i` + 1.  Therefore, we want to print out (`i` + 1) ** 2.

To print all on the same line, we must use `end=''`, as mentioned in the problem.  We also want to print out commas between each number.  This is a fencepost problem!  We want to print 9 numbers, but 8 commas.  Therefore, we can print out 8 numbers followed by commas, and then the last number separately, or the first number separately, followed by 8 commas and numbers.

---