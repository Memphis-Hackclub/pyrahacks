function nextTime() {


  var text = "Running June 10th to 12th!";

  return text;

}

meeting = nextTime();
meeting = String(meeting);

var speed = 75;
var i = 0;

function typeWriter() {
  if (i < meeting.length) {
    document.getElementById("zoom").innerHTML += meeting.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();