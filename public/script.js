
let helpButton = document.querySelector("#helpbutton");
let hintButton = document.querySelector("#hint-modal");
let guessButton = document.getElementById("guessbutton");
var info = document.getElementById("info-modal");
var infoName = document.getElementById("name-modal");
var nameList = document.getElementById("pres_names");
var gBar = document.getElementById("guessbar");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
const form = document.getElementById('myForm');
var hint = document.getElementById("hint");
var win = document.getElementById("win-modal");
var names = document.getElementsByClassName("nameInfo");

var nametext = document.getElementById("name-info-text-name");
var nameevent = document.getElementById("name-info-text-e");
var nameact = document.getElementById("name-info-text-a");

document.addEventListener('DOMContentLoaded', function() {
  let nameSplit = nameList.dataset.name;
  let namesList = nameSplit.split(",");
  let data1 = {};
  for (let i=1; i<=namesList.length; i++) {
    data1[namesList[i-1]] = null;
  }
  console.log(namesList);
  function guessAuto() {
    form.requestSubmit();
  };
  let options = {data:data1, onAutocomplete: guessAuto};
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);
});

guessButton.addEventListener('mousedown', function(e){
  e.preventDefault();
  let dropdown = gBar.nextElementSibling;
  if (dropdown) {
    let f = dropdown.querySelector('li:not(.disabled) span');
    f.click();
  }
  form.requestSubmit();
});

guessButton.addEventListener('click', function(e){
  e.preventDefault();
  let dropdown = gBar.nextElementSibling;
  if (dropdown) {
    let f = dropdown.querySelector('li:not(.disabled) span');
    f.click();
  }
  form.requestSubmit();
});
// press button w/ either nothing or something; enter with their nothing or something

// When the user clicks the button, open the modal 
helpButton.addEventListener('click', function(e) {
  e.stopPropagation();
  info.style.display = "block";
});
Array.from(names).forEach((name) => {
  name.onclick = function(e) {
    e.stopPropagation();
    infoName.style.display = "block";
    nametext.innerText = name.innerText;
    nameevent.innerText = name.dataset.event;
    nameact.innerText = name.dataset.act;
  }
});

// When the user clicks on <span> (x), close the modal
Array.from(span).forEach((s) => {
  s.onclick = function() {
    info.style.display = "none";
    infoName.style.display = "none";
    hintButton.style.display = "none";
    win.style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == info || event.target == infoName || event.target == hintButton || event.target == win) {
    info.style.display = "none";
    infoName.style.display = "none";
    hintButton.style.display = "none";
    win.style.display = "none";
  }
}

hint.addEventListener('click', function(e) {
  e.stopPropagation();
  //alert(hint.dataset.text);
  hintButton.style.display = "block";
});