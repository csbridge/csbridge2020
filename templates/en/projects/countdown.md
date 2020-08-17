template: templates/en/projects/projectTemplate.ptl
title: Countdown
credit: Lisa Yan

Handouts: [Graphics Reference]({{pathToRoot}}tr/resources/graphics.html)

File: `countdown.py`

This is a bonus program! It's meant to be a bit challenging.  Completing this program may help you write your final project.

Write a graphics program that displays a timer counting down from ten, once a second, and displays a message once the timer hits zero.

# Milestones

## Setup
To implement this timer, we will need both a variable to store the graphical text on the canvas (the text object) and a counter variable that stores the number of seconds left, which we can decrement and use to update our graphical text.

Your starting canvas should look something like this:

<center>
    <img style="width:500px" src="{{pathToRoot}}img/projects/countdown/countdown10.png">    
</center>

## Implement the Countdown

Write your animation loop which updates both the logical and visual countdown representations every second.  You should update the text of the same label each time using `set_text()`.

## Zero-pad the Timer

Since this is a timer, we want to _zero-pad_ our numbers, which means adding a zero to the front of a number so that it stays the same width. How would you update the visual representation of your countdown timer to display the following?

<center>
    <img style="width:500px" src="{{pathToRoot}}img/projects/countdown/countdown03.png">    
</center>
            
## End Message
Once the timer hits zero, display a message. It can be anything!

<center>
    <img style="width:500px" src="{{pathToRoot}}img/projects/countdown/timesUp.png">    
</center>

## Bonus: Add Minutes
Now add minutes to your countdown display, so that the timer reads 1:00, 0:59, 0:58, and so on.  Try to keep a _single variable_ that records your remaining time in seconds. Avoid tracking minutes and seconds separately.  But separate your single variable into minutes and seconds when you display the counter. Consider defining functions to make your logic very clear.To debug quickly, speed up your timer by reducing the pause time.  And don't forget the "mod" function! Example: `5 % 2`.