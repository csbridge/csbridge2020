template: templates/teach/notes/template.ptl
problemtitle: Build Arches

This problem is the section problem for the day.  Basically we are going to get Karel to repair arches. The main point of this first section, however, is more to build a bond with your students. Love of Karel is a great place to start. 

We hope that you get to know your section, that they get to know each other, and that they understand why section is such a cool and important part of the course.

## Learning Objectives
Students are learning about the very basics of coding, how to define their own Karel commands, and how to repeat tasks. Specifically:

+ core Karel commands: `move`, `turn_left`, etc.
+ How to define helper functions
+ `for` loops

You can’t teach all of that, however! Instead, your main job is to give students a little practice, and give them a chance to form a learning community.

If a student asks a question about a concept that has not been covered yet (like variables), let them know that the concept will be covered later in the class, and that they can send a private message to you on Ed if they have more questions. Resist the urge to go into the weeds on topics we haven’t covered yet! We will get there :-)

## Introduction (15min)
Feel free to spend a good amount of time learning names and establishing norms for your section. We encourage you to pick a short icebreaker to build community among your students!  Here’s a [list of icebreaker ideas](https://docs.google.com/document/d/1lHdnwAB17iLyvASZbWrIZz4PVy9zMmHjxGBGPwXNDs4/preview) that are good for Zoom and help avoid revealing any personally identifying information about yourselves or your students.

Remind them that you are there to help answer their questions about section material and that they should ask all questions through Ed. Make sure they understand that they will have one Ed for the entire class (where all questions about Python and the overall course should go) and one Ed for your section. But if students begin to ask many detailed logistical questions, you can have them post on Ed so that you have enough time for Karel.

## Conceptual Review (5min)
Although students are coming from lecture into section, it may be worth recapping what they just saw in the first lecture about Karel commands and `for` loops.  Additionally, reviewing the motivation and technique of decomposition is important; students might have questions about what sorts of tasks should be decomposed, and this is a good time to help them build that intuition. 

## Section Problem (25min)
This section focuses on core Karel commands, decomposition and `for` loops, and will help them get a better handle on Karel programs and approaching larger problems.  In particular, we want to solidify the basics of repeating tasks and thinking through how to break problems down into smaller parts.  Start with pseudocode, then turn to real code.  Encourage students to work together to program out the milestones.  A good first milestone to work towards is how to build a single column.  The hardest part is the fence-post bug when building a col (we want to build 4 columns but move between them 3 times), and when putting beepers in a column (we want to place 5 beepers but move 4 times).

### Teaching Tips
+ You can pseudocode in whatever way makes sense to you (whiteboarding, typing into a Google doc, etc.) as long as the students are the ones coming up with the steps!  One format we recommend is writing your pseudocode as comments in the code.
+ Avoid using terms like:
	+ “This is simple/easy.”
	+ “You should already know how to do this.”
+ Let students make mistakes and roll with them!  You can turn these bugs into learning moments by going back and saying, “What might have gone wrong?”/ “Where do you think the bug might be?”
+ Make sure to run the code frequently to see if things are working as expected.  This instills good testing habits for students.
+ Value different solutions - encourage students to think about other ways to solve the problem if you finish one solution early, and discuss the potential pros and cons of each!
+ When planning out programs, it may be worth discussing what the pre- and post-conditions of the overall program would be for these problems (or for particular functions/milestones within the problem).

### Conventions To Use

+ All code must be written inside a `main()` function that gets called under: `if __name__ == “__main__”:` We want to avoid having any code (besides constants and imports) outside functions.
+ We don’t explain what the `if` statement above means until later in the course.  If students ask about it, just mention that it’s necessary for the computer to run the program, but they don’t need to worry about it for now!
+ In the class, there are style conventions that we emphasize and that we do not want you to deviate from.  Specifically, we follow [Python’s PEP 8](https://www.python.org/dev/peps/pep-0008/) style.  This means that variables and function names use “snake case” (all lowercase letters with underscores for spaces).  Constants (which will be taught later) will be in all capital letters.  Please do not use camel case (e.g. `myVar`) or any other type of naming conventions.  If you’re not familiar with Python or PEP 8, take some time to skim the online guidelines.  PyCharm will also underline deviations from the conventions it expects, so watch out for that.
Your function and variable names should be descriptive but concise. Avoid names like `var1`, `var2`, `foo()`, `bar()`, and `function_that_has_very_long_name()`.
