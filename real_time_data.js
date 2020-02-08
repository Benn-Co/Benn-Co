

var i = 0;
var timeevent = 0;


function timedEvent() {
    timeevent =Date();
   
}



function timedCount() {
    
    timedEvent();
    postMessage(timeevent);
    setTimeout("timedCount()",5000);
}

timedCount();
