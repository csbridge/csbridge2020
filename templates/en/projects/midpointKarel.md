template: templates/en/projects/projectTemplate.ptl
title: Midpoint Karel
credit: Written by Tyler Conklin, based on past editions of this assignment as created by Mehran Sahami, Keith Schwarz, Eric Roberts, and others.

Handouts: [Karel Reference](https://compedu.stanford.edu/karel-reader/docs/python/en/reference.html)<br/>
File: `midpoint.py`

This is a bonus program!  It's meant to be challenging.

Program Karel to place a single beeper at the center of 1st street. If Karel starts in the world below:
			
<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/midpointKarel/midpointKarelStart.png">	
</center>
			
then Karel should finish in the center of 1st street after placing a beeper there as shown below.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/midpointKarel/midpointKarelFinish.png">	
</center>
			
Note that Karel finishes with just a single beeper placed at the center of 1st street. Karel may place more beepers than just this one, but must pick up the extra beepers before finishing at the midpoint.

You are guaranteed the following facts and assumptions:

+ Karel starts at 1st Avenue and 1st Street, facing east, with an infinite number of beepers in its bag.
+ The initial state of the world includes no interior walls or beepers.
+ The world need not be square, but you may assume that it is at least as tall as it is wide.
+ If the width of the world is odd, Karel must put the beeper in the center square. If the width is even, Karel may drop the beeper on either of the two center squares.
+ It does not matter which direction Karel is facing at the end of the run.

Remember that you may only use Karel syntax and cannot use Python variables. This problem is difficult because Karel cannot count. There are many different ways to solve this problem, so have fun coming up with a creative approach!
