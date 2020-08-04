template: templates/en/projects/projectTemplate.ptl
title: Checkerboard Karel
credit: Written by Tyler Conklin, based on past editions of this assignment as created by Mehran Sahami, Keith Schwarz, Eric Roberts, and others.

Handouts: [Karel Reference](https://compedu.stanford.edu/karel-reader/docs/python/en/reference.html)<br/>
File: `checkerboard.py`

This is a bonus program! It's meant to be challenging.

Program Karel to create a checkerboard pattern of beepers inside an empty rectangular world. If Karel starts in a world as shown below...
					
<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/checkerboardKarel/checkerboardKarelStart.png">	
</center>
                    
...then the world should end up looking like this:
 					
<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/checkerboardKarel/checkerboardKarelFinish.png">	
</center>

Note that where Karel finishes, as well as which direction Karel is facing at the finish, does not matter.
        
Please ensure that your solution works with different sized worlds. For example, your solution should work for worlds with only one column or only one row. Your solution should also work for worlds that are not perfectly square.

Remember that you may only use Karel syntax and can not use Python variables. As you think about your solution, keep in mind all of the different sized worlds you could encounter. Be sure to test on these different worlds after you have completed your first attempt at a solution!
