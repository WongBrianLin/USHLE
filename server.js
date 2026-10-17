import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from "url";
import { listPres } from "./backend.js";
import { returnPresObj } from './backend.js';
import { chooseRandom } from './backend.js';
import { records } from './backend.js';
import { trackGuesses } from './backend.js';
import { valGuess } from './backend.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/home", (req, res) => {
    res.render("landing-page", {key: "value"});
});
app.get("/play", (req, res) => {
    res.render("main-game", {pres_names: listPres(), hist: [], 
        randPerson: chooseRandom(), data: records, status: 0, hint: Math.random()*100});
});

app.post("/play", (req, res) => {
    let win = 0;
    // over = boolean
    let gArray = JSON.parse(req.body.hist);
    let nArray = gArray.map(p => p["Name"])
    if (req.body.president && gArray.length < 5 && !nArray.includes(listPres()[+req.body.randPerson])) {
        let guess = returnPresObj(req.body.president); 
        gArray.push(guess);
        nArray.push(req.body.president);
    }
    let numguess = trackGuesses(gArray);

    if (listPres()[+req.body.randPerson] == nArray[nArray.length-1]) {
        win = 2; // win
    } else if (numguess >= 5 && listPres()[+req.body.randPerson] != nArray[nArray.length-1]) {
        win = 1; // loss
    } else {
        win = 0;
    }
    
    res.render("main-game", {pres_names: listPres(), hist: gArray, 
        randPerson: +req.body.randPerson, data: records, status: win, hint:+req.body.hintlock});
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log('Hello World');
});

