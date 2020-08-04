/*
This script allows for hiding content until a specified time has passed, or
for showing content between two specified dates/times. 

----
NOTE: for all times specified below in data- attributes, the assumed timezone
is Pacific/Los Angeles (PDT).
----

visible-after
-------------
To hide content until a specified time has passed, add the class 
"visible-after" to the element, and add the custom "data-visible-after" 
attribute to the element as well which should be equal to the timestamp on or 
after which that element should be visible.  For example:

<div class="visible-after" data-visible-after="2019070917">
	...
</div>

this element would be visible only starting at 5PM on 7/9/19.

visible-during
--------------
To show content between two times, add the class "visible-during" to the element,
and add the custom "data-visible-start" and "data-visible-end" attributes to
the element as well which should be equal to the timestamps at which point
that element should become visible and hidden, respectively.  Both attributes 
must be set and should have time format YYYYMMDD HH:mm.  For example:

<div class="visible-during" data-visible-start="20190709 17:12" data-visible-end="20190709 17:13">
	...
</div>

this element would be visible only 7/9/19 5:12pm - 5:13pm.
*/
$(document).ready(function(){
	moment.tz.setDefault("America/Los_Angeles");

	// only show certain content if it's after the specified timestamp
	$(".visible-after").each(function(i) {
	    var dateStr = $(this).attr("data-visible-after");
	    var releaseDate = moment(dateStr, "YYYYMMDDHH");
	    if (!releaseDate.isSameOrBefore(moment())) {
	    	$(this).remove();
	    }
	});


  	var removeDefault = false;

	// only show certain content if between the specified timestamps
	$(".visible-during").each(function(i) {
	    var dateStrStart = $(this).attr("data-visible-start");
	    var dateStrEnd = $(this).attr("data-visible-end");
	    var releaseDateStart = moment(dateStrStart, "YYYYMMDD HH:mm");
	    var releaseDateEnd = moment(dateStrEnd, "YYYYMMDD HH:mm");
      	if (!moment().isBetween(releaseDateStart, releaseDateEnd)) {
	        $(this).remove();
	    } else {
          	removeDefault = true;
      	}
	});

	// If any of the other posts are visible, remove the defualt post.
  	$(".visible-default").each(function(i) {
      	if (removeDefault) {
          	$(this).remove();
      	}
  	});
});
