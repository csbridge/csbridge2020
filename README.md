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

## TA Mode
TA resources are hidden throughout the site and visible in "TA mode".  You can view a page in TA mode by adding the query param `ta` to the URL - for instance, `https://ctu.csbridge.org/en/index.html?ta` to view the main page in TA mode.  In TA mode, TAs can see problem solutions, the full materials for the entire course (even those that are hidden via timed release above), as well as a special link in the navigation bar for additional TA logistical information.

To make an HTML element visible only to TAs, use the "ta-only" class, like the following:

```
div class="ta-only">
...
</div>
```

The script that handles this functionality is in `docs/js/index.js`.


## Handling Student Submissions
- Clicking "Stanford Menu" -> "Submit" allows the student to zip up the current assignment and store it somewhere on their computer.
- Every student will need an ID number. At CTU, this will be something like CTU0012. Make sure that student nametags have this information (where all the section leaders know these made-up student ID numbers for each of their sections).
- Once students zip up their assignment, they still need to manually upload it for the staff to access. The students should submit to this URL: https://sendtomycloud.com/csbridge2019.  This drops files off in a Google Drive on Lisa Yan's Stanford account.  For security, please have the Section Leaders write the URL on the board during lab.  Students should submit their assignments at the end of the day (not after every assignment).
- Instructors should have received an invite to the Google Drive submission folder; within this folder, we can create subfolders to organize the project zips that students submit.
- There are some instructions on the main page of the CSBridge site with information about Eclipse and how to submit.
