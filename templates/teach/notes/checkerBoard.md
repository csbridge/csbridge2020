template: templates/teach/notes/template.ptl
problemtitle: Checkerboard Karel

This problem is a tricky Karel problem that requires them to checker any world of any size with beepers.  The generalization makes this very tricky, especially for odd-ball worlds like 1x1, 1x8, etc.

The cleanest solution is probably for them to checker an odd row, return to the wall, move up, then checker an even row. You end up needing to checker two rows in the loop, but if they reuse code between `checker_even_row` and `checker_odd_row`, it isn't too bad.

Another solution which is great especially if students have no clue where to start is to realize that after checkering the first row, where we put down beepers tells us how to checker the _columns_ in the world.  In other words, after checkering the first row, if a column has a beeper, checker it vertically one way and if a column doesn't have a beeper at its base, checker it vertically the other way. You only need three main functions: `checker_row`, `checker_column_with_beeper`, and `checker_column_without_beeper`), and avoids the messy code (see below) students often have to check whether a row is odd or even. 

Lots of them want to check the beeper to determine if the next row is odd or even. It is hard to do this without lots of special casing for the weird worlds. They usually end up moving up a row first, then moving back down and checking the beeper. 

People also often use recursion on this, by having `odd_checker` and `even_checker` methods that call each other. This is fine if it is done cleanly (which is rare), but you should still mention that mutual recursion is generally difficult to understand and should be avoided.

Remember that `break` is NOT allowed in Karel!