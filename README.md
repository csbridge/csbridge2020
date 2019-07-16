# CSBridge Website: Czech Technical University Summer 2019 (Prague)

This site uses GitHub pages with a custom domain.  You can find these settings on the main settings page for this project - specifically, all files in the `docs` folder of the master branch are published.

## Website Updates

1. Change any file templates in ```templates/```

2. ```python compile.py``` creates full html pages underneath the ```docs/``` folder.

3. Any slides or starter code changed in the top directory are symlinked to change the actual files in ```docs/```.

4. After pushing to GitHub, it may take a few minutes for the changes to appear on the CSBridge website.

## Timed Release
This website has the ability to make materials visible at specific dates/times without having to push a new version to GitHub.  To make an HTML element visible at a certain date/time, use the "visible-after" class, and add the timestamp as the value for the "data-visible-after" attribute.  For instance, to hide a div until July 7, 2019 at 5PM, you would add:

```
<div class="visible-after" data-visible-after="2019070717">
...
</div>
```

The timestamps support the format `YYYYMMDDHH`.  The script that handles this hide/show functionality is in `docs/js/index.js`.

## TA Resources
TA resources can be found at the `/tas` URL.  In particular, it includes a special version of the navbar and programs table showing all projects and solutions.  It does this by passing an additional parameter to the template that says it is the TA page.


## Handling Student Submissions
- Clicking "Stanford Menu" -> "Submit" allows the student to zip up the current assignment and store it somewhere on their computer.
- Every student will need an ID number. At CTU, this will be something like CTU0012. Make sure that student nametags have this information (where all the section leaders know these made-up student ID numbers for each of their sections).
- Once students zip up their assignment, they still need to manually upload it for the staff to access. The students should submit to this URL: https://sendtomycloud.com/csbridge2019.  This drops files off in a Google Drive on Lisa Yan's Stanford account.  For security, please have the Section Leaders write the URL on the board during lab.  Students should submit their assignments at the end of the day (not after every assignment).
- Instructors should have received an invite to the Google Drive submission folder; within this folder, we can create subfolders to organize the project zips that students submit.
- There are some instructions on the main page of the CSBridge site with information about Eclipse and how to submit.


## Todos
- [ ] Write up Day 1 project TA solutions (code is currently in `templates/tas/soln/todo.html` but needs to be split into `.html` files for each problem and have writeups done for each)
- [ ] Refactor bonus problems table in `templates/en/bonus-index.html` to match the main table style in `programTable.ptl` in that it is a single table using date variables at the top, and only includes `visible-after` for non-TA mode.
- [ ] Include a TA version of the bonus table on the `/tas` page so TAs can see all bonus problems.  This should be a shared version of the table across `/tas` and `/bonus-index` so changes once are propagated everywhere.
