let guessButton = document.querySelector("#guessbutton");
let guesses = document.querySelector("#guesses-outer")



guessButton.addEventListener("click", makeGuess);


function makeGuess() {
    let row = document.createElement("div");
    let info = document.createElement("div");
    let decade = document.createElement("div");
    let era = document.createElement("div");
    let conflict = document.createElement("div");
    let party = document.createElement("div");
    let years = document.createElement("div");
    row.classList.add("row");
    info.classList.add("column");
    decade.classList.add("column");
    era.classList.add("column");
    conflict.classList.add("column");
    party.classList.add("column");
    years.classList.add("column");
    guesses.appendChild(row);
    row.appendChild(info);
    row.appendChild(decade);
    row.appendChild(era);
    row.appendChild(conflict);
    row.appendChild(party);
    row.appendChild(years);
    info.innerText = "name";
    decade.innerText = "decade";
    era.innerText = "era";
    conflict.innerText = "conflict";
    party.innerText = "party";
    years.innerText = "# years";
    console.log("work");
}