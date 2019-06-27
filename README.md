# CSBridge Website: Czech Technical University Summer 2019 (Prague)

This site uses GitHub pages with a custom domain.  You can find these settings on the main settings page for this project - specifically, all files in the `docs` folder of the master branch are published.

## Website Updates

1. Change any file templates in ```templates/```

2. ```python compile.py``` creates full html pages underneath the ```docs/``` folder.

3. Any slides or starter code changed in the top directory are symlinked to change the actual files in ```docs/```.

4. After pushing to GitHub, it may take a few minutes for the changes to appear on the CSBridge website.


## Handling Student Submissions
- The assignments zips each contain a jar file called `zipper.jar`. Double-clicking on this file inside the assignment folder zips the current assignment folder.
- Every student will need an ID number. At CTU, this will be something like CTU0012. Make sure that student nametags have this information (where all the section leaders know these made-up student ID numbers for each of their sections).
- Once students zip up their assignment, they still need to manually upload it for the staff to access. The students should submit to this URL: https://sendtomycloud.com/csbridge2019.  This drops files off in a Google Drive on Lisa Yan's Stanford account.  For security, please have the Section Leaders write the URL on the board during lab.  Students should submit their assignments at the end of the day (not after every assignment).
- Instructors should have received an invite to the Google Drive submission folder; within this folder, we can create subfolders to organize the project zips that students submit.
- There are some instructions on https://koc.csbridge.org/en/handouts/submission.html for students with the zipper.jar information.


## Base Course Content Update Notes
For Day1 there is one description missing for `BanishWinter.java` located in `Day1.zip`. The program as-is does not work, so it's been turned into a level 1 bonus problem. The writeup is now located on the master website (`csbridge.github.io` repo).

Make sure to look at `templates/en/projects/banishWinter.html`, `templates/parts/bonusTable.html`, `docs/img/icons/banishWinter.jpeg`, `docs/img/projects/banishWinter/`, **and** the updated `Day1.zip` (which has a second configuration for BanishWinter debugging) if you'd like to incorporate it.