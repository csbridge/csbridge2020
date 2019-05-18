//Overides backspace event. 
trapfunction = function(event)
{
    var keynum;
    if (window.event) // eg. IE
    {
        keynum = window.event.keyCode;
    }
    else if (event.which) // eg. Firefox
    {
        keynum = event.which;
    }
    if (keynum == 8) // backspace has code 8
    {
        return false;
        // nullifies the backspace
    }
    return true;
}


document.onkeydown = trapfunction; // IE, Firefox, Safari
document.onkeypress = trapfunction; // only Opera needs the backspace nullifying in onkeypress
