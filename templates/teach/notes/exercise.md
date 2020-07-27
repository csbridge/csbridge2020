template: templates/teach/notes/template.ptl
problemtitle: Office Hours Exercise
nosolution: True

## Exercise 1: Mountain Karel Debugging
Each of you should choose a role.  Then, click the button (and only that button!) corresponding to your role below.

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#ta" aria-expanded="false" aria-controls="ta">
  I am the SL 
</a>

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#student" aria-expanded="false" aria-controls="student">
  I am the student
</a>

<div class="collapse" id="ta">
  <div class="well">
    You're an SL helping a student with a bug they have while working on <a href="{{pathToRoot}}en/projects/mountain.html">Mountain Karel</a>.  They have submitted their code to the CSBridge Ed (remember that students submit code under "Lessons", and there is a special lesson for this exercise).  You can navigate to the "CSBridge" test student to see their submission, and you can copy/paste the code from there into your own Karel project on your computer to play around with it first if you want to.
    <br />
    <br />
    It looks like they are working on getting Karel to ascend the mountain.  Remember that loops and conditions are tricky at this point - the <a href="{{pathToRoot}}teach/notes/mountain.html">TA Notes</a> for this problem may help you!  The student will also fill you in on where they're at.
  </div>
</div>

<div class="collapse" id="student">
  <div class="well">
    You're a student signing up for Office Hours for help with a bug you have while working on <a href="{{pathToRoot}}en/projects/mountain.html">Mountain Karel</a>.  You have already submitted your code to the CSBridge Ed.  Download <a href="{{pathToRoot}}starter/MountainKarelExercise.zip">this PyCharm project</a> and open it in PyCharm - this is "your code". From there you can play around with it first if you want to.
    <br />
    <br />
    You are currently working on getting Karel to ascend the mountain, but are struggling - it looks like Karel climbs in a reasonable manner, but doesn't stop at the top, and keeps going to the top edge of the screen!  In other words, you have roughly figured out what you want to repeat, but are stuck figuring out the condition.  Tell this to the SL when you start to describe where you are, and what you are stuck with.  You're having a hard time knowing what condition to use to get Karel to climb and then stop!
    <br />
    <br />
    Note: the ultimate issue is the condition for the while loop, which is still true even when you reach the top of the mountain.  One possible solution is to use right_is_blocked() instead.  Another is to not have Karel turn left, and instead immediately check for front_is_blocked(), and use that as a condition to stop.
  </div>
</div>

## Exercise 2: Khansole Academy Debugging
Now, switch roles!  Then, click the button (and only that button!) corresponding to your new role below.

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#ta2" aria-expanded="false" aria-controls="ta">
  I am the SL 
</a>

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#student2" aria-expanded="false" aria-controls="student">
  I am the student
</a>

<div class="collapse" id="ta2">
  <div class="well">
    You're an SL helping a student with a partially-complete implementation of <a href="{{pathToRoot}}en/projects/khansole.html">Khansole Academy</a>.  They have submitted their code to the CSBridge Ed (remember that students submit code under "Lessons", and there is a special lesson for this exercise).  You can navigate to the "CSBridge" test student to see their submission, and you can copy/paste the code from there into your own project on your computer to play around with it first if you want to.
    <br />
    <br />
    It looks like they are working on keeping track of the number of correct answers in a row, but they can't figure out how to do this.  Remember that variables and control flow in Python are tricky at this point - the <a href="{{pathToRoot}}teach/notes/khansole.html">TA Notes</a> for this problem may help you!  The student will also fill you in on where they're at.
  </div>
</div>

<div class="collapse" id="student2">
  <div class="well">
    You're a student signing up for Office Hours for help with getting unstuck while working on <a href="{{pathToRoot}}en/projects/khansole.html">Khansole Academy</a>.  You have already submitted your code to the CSBridge Ed.  Download <a href="{{pathToRoot}}starter/KhansoleExercise.zip">this PyCharm project</a> and open it in PyCharm - this is "your code". From there you can play around with it first if you want to.
    <br />
    <br />
    You are currently working on keeping track of the number of correct answers in a row, and stopping once you hit 3, but are struggling - you can prompt the user with addition problems and tell them if they are right or wrong, but can't keep track of overall streaks.  In other words, you have roughly figured out what you want to do, but are stuck figuring out the condition and how to track the correct guesses in a row.  Tell this to the SL when you start to describe where you are, and what you are stuck with.  You're having a hard time knowing how to use variables, and how to use a while loop to stop once you hit 3 correct answers in a row!
    <br />
    <br />
    Note: the ultimate solution is to add a variable outside the loop to keep track of the number of correct answers, and check whether or not this is 3 in the while loop.  Inside the loop, you need to increment the number of correct answers when the user answers a question correctly, and reset it to 0 if they answer incorrectly.
  </div>
</div>