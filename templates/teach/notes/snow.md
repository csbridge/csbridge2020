template: templates/teach/notes/template.ptl
problemTitle: Snow

The problem below is the second section problem for the day.  Here is information about the goals for the problem and what you should focus on during section:

**Learning Goal:** basic list concepts, including add, remove, and looping through the elements of a list using a `for` loop and the index variable.

**Milestones**: think through how to animate one snowflake - then how lists can help us animate multiple at the same time.  Then animate the snowflakes, but don't add new ones.  Finally, add the functionality to add new snowflakes 10% of the time.

The key concept is to realize that we can store all the snowflakes together and animate them "at the same time" (even though we are technically animating them each one after the other).

Note: one potential solution approach that may be suggested is, instead of keeping all snowflakes in the list forever and animating only the ones still falling, to remove ones that are no longer falling.  The challenge with this approach is it is tricky to update a list while iterating over it due to the number of elements changing.  For this reason, it is easier to keep all snowflakes in the list and animate only the ones that are falling.