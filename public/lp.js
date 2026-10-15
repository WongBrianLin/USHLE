let helpButton = document.querySelector("#helpbutton");
var info = document.getElementById("info-modal");
var span = document.getElementsByClassName("close");

helpButton.addEventListener('click', function(e) {
  e.stopPropagation();
  info.style.display = "block";
});

window.onclick = function(event) {
  if (event.target == info) {
    info.style.display = "none";
  }
}

Array.from(span).forEach((s) => {
  s.onclick = function() {
    info.style.display = "none";
  }
});