template: templates/teach/notes/template.ptl
problemtitle: Hospital Karel

This is the section problem for day 1.  Students are learning about control flow and the very basics of coding. Specifically:

+ How to define helper functions
+ While loops
+ If statements
+ For loops

This section focuses on decomposition, control flow and will help prepare students to get started on Random Painter Karel.  You can review topics if it's helpful for students, but you should spend more time reviewing control flow topics rather than reviewing basic Karel commands.  Additionally, reviewing the motivation and technique of decomposition is important; students might have questions about what sorts of tasks should be decomposed, and this is a good time to help them build that intuition. 

### Step-by-Step, Teaching Hospital Karel

1. Start with the assumption that a `build_hospital()` function exists. How do you solve the problem? This is the most interesting part of the section.
	+ A common bug in students might make is excluding the second `if` statement in `main` that prevents Karel from crashing into the wall at the end of the program. If they do, don’t point it out before coding!  Let them make the error and then talk through why it happens. (This is an example of an off-by-one bug, or a fencepost error!)
	+ When talking through it, it’s important to emphasize that the `while` loop condition only gets tested at the top of the loop. A common misconception about while loops that students often have is that the condition is checked constantly.
	+ An alternative way to solve this fencepost error (although slightly more clunky) is to duplicate the `if beepers_present()` block above the `while` loop, and have the loop repeat `move` and then conditionally build hospital. If students solve the off-by-one bug this way, that’s also fine!  You can show them the solution code and explain why both solutions do the same thing.  The SL solution contains both approaches, one commented out.
+ Code the `while` loop. Use `put_beeper()` in place of the body for `build_hospital()`. Run!
+ Implement `build_hospital()`.

See the additional notes from section 1 about other general tips related to pre- and post-conditions, answering student questions, and more.