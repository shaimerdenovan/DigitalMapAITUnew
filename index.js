// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction2() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


$(document).ready(function(){
  $("h1").css("color", "black");
});

/*for(var i=0; i<3; i++){
  document.querySelectorAll("button")[i].addEventListener(("click"), function(event){
    document.querySelector("h3").style.color = "grey";
  });
}
*/
$("#head").click(function(){
  $("h1").css("color", "white")
});

$("#head").click(function(){
  $("h5").hide();
});

$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("#head").on("mouseover", function(){
  $("#head").css("color", "#5588A3")
});

$("h5").on("click", function(){
  $("h5").css("color", "#5588A3")
});

var x = document.getElementById("wh");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
