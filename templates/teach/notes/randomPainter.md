template: templates/teach/notes/template.ptl
problemtitle: Random Painter

This is the project for the evening.  It is their final Karel program, meant to give practice with control flow and writing generalized programs in a variety of worlds.  Encourage them to decompose as well.  The hardest part is figuring out how to loop through all the rows in the world.  Students may attempt a variety of solutions, such as zig-zagging, coloring and returning to the start before going up, etc.

**Milestone 1**: randomly color a single row
<br />
**Milestone 2**: move from one row to the next


One key insight is that painting multiple rows is a fencepost problem, because you are painting N rows and moving to the next row N-1 times.  This should hint to students that they should use a loop with an extra command outside it to account for this.  Additionally, it is easiest to always advance to the next row the same way, rather than zig-zagging back and forth across rows.  For this reason, students will find it easiest to color a row, return to its start, and then advance to the next row.

In the SL solutions, there are two versions of the solution, one that uses the "return to start" algorithm, and another that uses the zig-zag approach.