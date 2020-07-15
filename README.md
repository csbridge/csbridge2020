# CSBridge Website: Summer 2020 (Online)

This site uses GitHub pages with a custom domain.  You can find these settings on the main settings page for this project - specifically, all files in the `docs` folder of the master branch are published.

## Website Updates

1. Change any file templates in ```templates/```

2. ```python3 compile.py``` creates full html pages underneath the ```docs/``` folder.  Or use `./runLocal.sh` to compile and host a copy of the site at `localhost`.

3. Any slides or starter code changed in the top directory are symlinked to change the actual files in ```docs/```.

4. After pushing to GitHub, it may take a few minutes for the changes to appear on the CSBridge website.

This website uses [bottle 0.12](https://bottlepy.org/docs/0.12/index.html) to render templates and split up code.  Within the `templates/` folder, anything ending in `.html` or `.mdown` will be rendered to the website with the same structure (e.g. if an HTML file `test.html` is within `templates/en/projects/` it will be rendered to the site and viewable at `[ROOTURL]/en/projects/test.html`.

Note: there is a special `{{pathToRoot}}` placeholder that you can use in all templates that will be replaced with the path to the root of the site.  This is useful for importing files from other locations, such as images.  For example:

```
<img src="{{pathToRoot}}img/projects/newspaper/newspaper.png">	
```

#### Templates Structure

+ `cz`: for Czech translations
+ `tr`: for Turkish translations
+ `en`: for English translations
`parts`: partials (partial HTML files included in other files, but not rendered on their own)
+ `tas`: the TA sub-section of the site with TA-specific resources

#### Markdown Support
You can write a file to be rendered in either HTML or Markdown.  If you write in HTML, that HTML file will be rendered via Bottle SimpleTemplate and posted on the site.  If you write in Markdown, by default the file will be converted to HTML and posted on the site.  

If you'd like, you can "rebase" the Markdown content just like you would with HTML content in Bottle.  Instead of adding a `rebase()` python call at the top of your template, however, include an _attribute_ at the top of the file to specify the template within which it should be rendered, such as:

```
template: templates/en/projects/projectTemplate.ptl
```

Attributes are key/value pairs you can include at the top of your file.  If you include attributes, you should leave a blank line between the last attribute line and the first line of your actual Markdown content.

If you include the `template` attribute, your Markdown will be converted to HTML and embedded within the template you specify as via a `rebase` call - in other words, it will not be escaped, and it will be supplied via the `base` property.  The template path should start from `templates/....`.

You can include other Markdown attributes as well, and these will also be sent to the template you specify via the `metadata` property.  `metadata` is a dictionary of your Markdown attributes, where the keys are the attribute names and the values are lists of lines for each attribute.  Finally, the full path to the markdown file being rendered will also be passed to the template via the `filePath` property.

For an example of a Markdown-written page, check out `templates/en/projects/piglet/`, which is a folder representing a problem.  It uses the template at `en/projects/projectTemplate.ptl` and is rendered at `en/projects/piglet/index.html`.  That template supports folders for each project where its writeup is in `index.mdown`, and that writeup should have the following attributes:

+ `title` - the title of the problem
+ `credits` (optional) - name of the author(s) of this problem.  If included, in the output it is rendered under the title
+ `solution` (optional) - relative path to the solution file for this problem.  If included, in the output it is rendered in a hidden code area at the bottom that the student can view.

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


## Break Activity Ideas
Break times in the afternoon are a great time to get students out of lab and do fun activities.  Here are some ideas for activities that have been successful in the past, both indoors and outdoors.
- [Where The Wind Blows](https://youthgroupgames.com.au/games/111/where-the-wind-blows/) (using shoes as place markers)
- Code trace scavenger hunt: clues are programs students have to trace, and they print out the name of the next destination.  This was previously done on the 3rd day of the class.  See the CTU repo for example Scavenger Hunt files.
- [Ninja](https://en.wikipedia.org/wiki/Ninja_(playground_game))
- [Rock-paper-scissors](https://en.wikipedia.org/wiki/Rock–paper–scissors) tournament: each lab has students pair up and play a best-of-3 rock-paper-scissors.  The winner finds someone else to challenge, while the loser becomes a cheerleader for the winner and follows them to their next match.  Eventually, there should be just 1 winner per lab, with everyone else in that lab cheering them on.  This continues until their is just one student winner, and all students are cheerleaders for them.  This winner plays an instructor in a best-of-5 match.


## Ideas For Future Improvement

- More incoporation of code reviews and pair programming.  Maybe supplying checklists at the start and having students do a self check-in for every project.  Or working with another student to co-develop a program, or have multiple students each work on one part of a program and build on each others' code to see firsthand the value of good style.
- More discussion of style/top-down design
- Some way for teaching team to provide feedback (maybe once?) for some code they submit?
- 2 sections per day?
- theme sections based on TA area of interest?


## Todos
- [ ] Write up Day 1 project TA solutions (code is currently in `templates/tas/soln/todo.html` but needs to be split into `.html` files for each problem and have writeups done for each)
- [ ] Refactor bonus problems table in `templates/en/bonus-index.html` to match the main table style in `programTable.ptl` in that it is a single table using date variables at the top, and only includes `visible-after` for non-TA mode.
- [ ] Include a TA version of the bonus table on the `/tas` page so TAs can see all bonus problems.  This should be a shared version of the table across `/tas` and `/bonus-index` so changes once are propagated everywhere.


## Future Course Websites

When making a new course, you can use this repository as a template.

1. Make a copy of this repository for the new class under the `csbridge` GitHub.
+ Enable GitHub pages on your new repo:
    1. Go to setting on the GitHub page for your repo.
    + Change the 'Source' section of the GitHub pages to point to ```master branch/docs folder```.
	+ Check ```Enforce HTTPS.```
	+ Fill in the 'Custom domain' field with your desired custom domain (e.g., `koc.csbridge.org`). Note that this automatically populates the CNAME file in ```docs/CNAME```. Do not delete this.

Note: If you do not have a custom domain, contact the domain manager. We can create this on our Domain manager (If you are a domain manager, here are steps to create the ```koc``` subdomain: (1) go to DNS management, (2) add a CNAME record with domain ```koc``` and value ```csbridge.github.io```)



