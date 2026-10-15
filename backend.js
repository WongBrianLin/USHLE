import { parse } from 'csv-parse/sync';
import fs from 'fs';
// Read file data
const csvData = fs.readFileSync('presidents.csv', 'utf-8');
// Parse to array of objects
const records = parse(csvData, {
  columns: true,           // Uses the first row as object keys
  skip_empty_lines: true   // Ignores blank rows
});

// guess, then compare aspects of guessed vs. answer

const randAnswer = Math.floor(Math.random()*records.length);
const answer = records[randAnswer];
let guessIn = 0;
let guess = records[guessIn];
let guesses = 0;
//let guessButton = document.querySelector("#guessbutton");

//let hint = document.querySelector("#hint");
// console.log(guessButton)

//guessButton.addEventListener("click", initGuess);
//initGuess();
//listPres();

function chooseRandom() {
    const randAnswer = Math.floor(Math.random()*records.length);
    return randAnswer;
}

function trackGuesses(g) {
    return g.length; 
}

function listPres() {
    let listpres = [];
    for (let i=0; i<records.length; i++) {
        listpres.push(records[i]['Name']);
    }
    return listpres;
}

function returnPresObj(name) {
    console.log(name);
    const cleanName = String(name).normalize('NFC').trim().toLowerCase();
    for (let i=0; i<records.length; i++) {
        const cleanRecN = String(records[i]['Name']).normalize('NFC').trim().toLowerCase();
        console.log(cleanName + " "+cleanRecN);
        if (cleanRecN == cleanName) {
            return records[i];
        }
    }
}
//listPres();
//console.log(listPres());
function initGuess() {
    if (guess['Name'] == answer['Name']) {
        console.log("x");
    } else {
        categoryGuess();
    }
}

function valGuess(x) {
    if (Number.isInteger(+x) && (+x>=0 && +x<=44)) {
        return true;
    }
}

function nearGuess(x) {
    
}

function categoryGuess() {
    if (guess['Political Party'] == answer['Political Party']) {
        console.log("P. 1");
    } else {
        console.log("P. 0");
    } // polit party

    if (guess['Historical Era'] == answer['Historical Era']) {
        console.log("H. 1");
    } else {
        console.log("H. 0");
    }

    if (guess['Decade of First Inauguration'] == answer['Decade of First Inauguration']) {
        console.log("D. 1");
    } else if (Math.abs(+guess['Decade of First Inauguration'] - +answer['Decade of First Inauguration'])<= 50) {
        console.log("D. 0.5");
    } else {
        console.log("D. 0");
    }

    if (guess['Years Served'] == answer['Years Served']) {
        console.log("Y. 1");
    } else if (Math.abs(+guess['Years Served'] - +answer['Years Served']) <= 2) {
        console.log("Y. 0.5");
    } else {
        console.log("Y. 0");
    }
}

/*
logic

if names are same, player wins
else, compare other aspects to see if they are same
if other aspects are same, color them in green

*/

export{listPres, returnPresObj, chooseRandom, records, trackGuesses, valGuess};