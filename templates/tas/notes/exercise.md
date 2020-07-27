template: templates/tas/notes/template.ptl
problemtitle: Office Hours Exercise
nosolution: True

## Exercise 1: Mountain Karel Debugging
Each of you should choose a role.  Then, click the button (and only that button!) corresponding to your role below.

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#ta" aria-expanded="false" aria-controls="ta">
  You're the SL 
</a>

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#student" aria-expanded="false" aria-controls="student">
  I am the student
</a>

<div class="collapse" id="ta">
  <div class="well">
    You're an SL helping a student with a bug they have while working on <a href="{{pathToRoot}}en/projects/mountain.html">Mountain Karel</a>.  They have submitted their code to the CSBridge Ed (remember that students submit code under "Lessons", and there is a special lesson for this exercise).  You can navigate to the "CSBridge" test student to see their submission, and you can copy/paste the code from there into your own Karel project on your computer to play around with it first if you want to.
    <br />
    <br />
    It looks like they are working on getting Karel to ascend the mountain.  Remember that loops and conditions are tricky at this point - the <a href="{{pathToRoot}}tas/notes/mountain.html">TA Notes</a> for this problem may help you!  The student will also fill you in on where they're at.
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