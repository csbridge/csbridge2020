template: templates/en/resources/faqTemplate.ptl
title: How to use PyCharm
credit: Chris Piech, Mehran Sahami, Brahm Capoor, and Lisa Yan

[TOC]

Once you have downloaded a copy of PyCharm as described in the “Installing PyCharm” handout on the course website, your next task is to understand how to write and run Karel programs using PyCharm.

## Download a starter project

1.  In the navigation bar above, go to the front page of the CS Bridge website and click on the morning or evening project you want to download. Suppose you download the starter code for Day 1 ("Morning project [here]").
1.  You will now have a folder called `Day1PM.zip`. Unzip it by double-clicking.
    - In some cases, the browser will also automatically unzip/extract the folder when you download it if you have the appropriate software for expanding files from a ZIP archive (extraction software is usually built in to Windows 7, 8, and 10 or macOS).
    - The unzipped contents of the ZIP file will be a directory named Day1PM that contains the project.
    - **Note** If you are on a Windows computer, you may have a second Day1PM folder nested outside the outer Day1PM folder. **Make sure to use the innermost Day1PM folder**.
1.  Move that folder to some place on your computer where you can keep track of it when you want to load the project.

## Import a project

1. Open PyCharm (see Figure 1 below, left-hand side). Select the project you want to work on, or click "Open".
1. If you already have PyCharm open with a different project, go to the top of the screen and click "File"->"Open".
1. Navigate to the Day1PM folder and open it. Open the <i>**folder**</i>, rather than a particular file you want to edit.

   - If you already have another project open, PyCharm will prompt you to either open the project in your existing window or in a new window. You can select either.

1. You should see a view shown in Figure 1 below, right-hand side.

<center>
  <img style="width:100%" src="{{pathToRoot}}img/resources/pycharm-how-to/import.png">
  <p style="text-align:center"><b>Figure 1</b>: The first window that opens when you start PyCharm (left) should have an Open option for you to select a project. After opening a project, you should see the default PyCharm landing view (right).</p>
</center>

## Edit code

The **Project toolbar** on the left (Figure 1, right) shows the current project we are working on (Day1PM) as well as all of its contents: folders, Python files, etc. For Karel programs, you do not need to inspect or edit any files in the **karel** or **worlds** folders.

Double-click on a program (say, `newspaper_karel.py`) and it will open up a text editor view in the main window of PyCharm.

It's time to code! <!--Check out the [debugging tips]({{pathToRoot}}en/resources/pycharm-how-to.html#debug) section below for tips and tricks when programming.-->

## Run programs

### How to run Python programs in Pycharm

<center>
  <img style="width:50%" src="{{pathToRoot}}img/resources/pycharm-how-to/terminal.png">
  <p style="text-align:center"><b>Figure 2</b>: The PyCharm terminal used to run Python programs.</p>
</center>

To run a program in PyCharm, click the "Terminal" option at the bottom of the screen. To run any program, all you have to do is type the following command into the Terminal and hit "Enter":

- **Mac Users**: `python3 insert_name_here.py`
- **PC Users**: `py insert_name_here.py`

The terminal (also known as a **console**) will then print output and accept user text input, depending on how you write your program.

As a side note, in many handouts we might use the Mac convention of running programs by using the command <b>`python3 <program name>`</b>. If you are a PC user, you should instead use the command <b>`py <program name>`</b>. Just by convention on the PC, you run the Python interpreter using the command <b>`py`</b> (as opposed to <b>`python3`</b> on the Mac).

### How to run Karel programs in Pycharm

Karel programs are also Python programs!

1. Follow the steps above to run the Karel program. You should then see something like this:

<center>
  <img style="width:60%" src="{{pathToRoot}}img/resources/pycharm-how-to/newspaper_karel.png">
  <p style="text-align:center"><b>Figure 3</b>: The Karel display that appears when running `newspaper_karel.py`, including Karel’s world, a Run Program button, and a Load World button</p>
</center>

2. If you then press the <b>Run Program</b> button, Karel will go through the steps in the <b>`main()</b> function that you wrote.

3. Use the scroll bar to speed Karel up.

4. <b>Exit out of the window when you are done</b>. The next time you run any Karel program from the PyCharm Terminal (even if it's the same program), it will create a new Karel window.

#### Running Karel in different worlds

Suppose we are working on Hospital Karel and we think we have gotten our code to work in the default world. Press the <b>Load World</b> button and select and open the world in which you want to run Karel. You can then test Karel in this new world by clicking on the <b>Run Program</b> button.

<!--
## Debug
-->

## Open Project Opens

There are several options when opening a project.
* This Window: Replaces the current project in your current window with the new project, closing the current project.
* New Window: Opens the new project in a new, separate window, keeping your current project in the original window.
* Attach: Adds the new project folder to your current window, keeping the old and new projects separate but both open.
* Cancel: Don't open the new project.

<center>
  <img style="width:60%" src="{{pathToRoot}}img/resources/pycharm-how-to/pycharm_open.png">
</center>



