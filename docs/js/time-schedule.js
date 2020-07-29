/*
This script allows for timed display of content.
* class: "visible-during"
* custom attribute: "data-visible-start"
* custom attribute: "data-visible-end"
Both attributes must be set and should have time format YYYYMMDD HH:mm
For example:

<div class="visible-during" data-visible-start="20190709 17:12" data-visible-end="20190709 17:13">
	...
</div>

this element would be visible only 7/9/19 5:12pm - 5:13pm.

all times are Pacific/Los Angeles.
*/

$(document).ready(function(){
	// only show certain content if they should be released
	$(".visible-during").each(function(i) {
	    var dateStrStart = $(this).attr("data-visible-start");
	    var dateStrEnd = $(this).attr("data-visible-end");
	    var releaseDateStart = moment(dateStrStart, "YYYYMMDD HH:mm");
	    var releaseDateEnd = moment(dateStrEnd, "YYYYMMDD HH:mm");
      var currentDate = moment();
      if (!currentDate.isBetween(releaseDateStart, releaseDateEnd)) {
	    	$(this).remove();
	    }
	});
});
