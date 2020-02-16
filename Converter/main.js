//creating the main variables
var input = null;
var km = 1.609344;
var mi = 0.621371192;

//The miles to kilometers event listeners
document.getElementById('miles').addEventListener('keyup', convertMiToKm);
//this one is redunded, but I'll live it here, since it was the part of the exercise
document.getElementById('convertToKilometers').addEventListener("submit", convertMiToKm);

//The miles to kilometers function
function convertMiToKm() {
    input = document.getElementById('miles').value;
    //sending to the DOM the result of multiplying the input and km, rounded to 3 decimals
    if (input > 0 || input < 0 || input === 0 || input === '0') {
        document.getElementById('answer').innerHTML = `<h2>${input} Mile(s) = ${(input * km).toFixed(3)} Kilometer(s)</h2>`;
    } else { document.getElementById('answer').innerHTML = `<h2>Please, enter the numerical value in the box</h2>`; }
    //preventing submission of the form
    event.preventDefault();
}

//The kilometers to miles event listeners
document.getElementById('kilometers').addEventListener('keyup', convertKmToMi);
//this one is redunded too, but I'll live it here, since it was the part of the exercise
document.getElementById('convertToMiles').addEventListener("submit", convertKmToMi);

//The kilometers to miles function
function convertKmToMi() {
    input = document.getElementById('kilometers').value;
    //sending to the DOM the result of multiplying the input and mi, rounded to 3 decimals
    if (input > 0 || input < 0 || input === 0 || input === '0') {
        document.getElementById('answer').innerHTML = `<h2>${input} Kilometer(s) = ${(input * mi).toFixed(3)} Mile(s)</h2>`;
    } else { document.getElementById('answer').innerHTML = `<h2>Please, enter the numerical value in the box</h2>`; }
    //preventing submission of the form
    event.preventDefault();
}

//catching the key press
document.addEventListener('keydown', changeHtml);

//doing stuff on key press
function changeHtml(e) {
    //if K was pressed
    if (e.which == 75) {
        //change header
        document.getElementsByTagName('h1')[0].innerHTML = `KILOMETERS TO MILES CONVERTER`;
        //switch forms
        document.getElementsByClassName('miToKm')[0].style.display = 'none';
        document.getElementsByClassName('kmToMi')[0].style.display = 'block';
        //switch hints
        document.getElementById('hintKm').style.display = 'none';
        document.getElementById('hintMi').style.display = 'block';
        //switch answer accordingly
        if (input > 0 || input < 0 || input === 0 || input === '0') {
            document.getElementById('answer').innerHTML = `<h2>${input} Kilometer(s) = ${(input * mi).toFixed(3)} Mile(s)</h2>`;
        } else {
            document.getElementById('answer').innerHTML = `<h2>Please, enter the numerical value in the box</h2>`;
        }
    }
    //if M was pressed
    else if (e.which == 77) {
        //change header
        document.getElementsByTagName('h1')[0].innerHTML = `MILES TO KILOMETERS CONVERTER`;
        //switch forms
        document.getElementsByClassName('miToKm')[0].style.display = 'block';
        document.getElementsByClassName('kmToMi')[0].style.display = 'none';
        //switch hints
        document.getElementById('hintKm').style.display = 'block';
        document.getElementById('hintMi').style.display = 'none';
        //switch answer accordingly
        if (input > 0 || input < 0 || input === 0 || input === '0') {
            document.getElementById('answer').innerHTML = `<h2>${input} Mile(s) = ${(input * km).toFixed(3)} Kilometer(s)</h2>`;
            document.getElementById('miles').value = input;
        } else {
            document.getElementById('answer').innerHTML = `<h2>Please, enter the numerical value in the box</h2>`;
            document.getElementById('kilometers').value = input;
        }
    }
    //change the value in the input box to the user input
    document.getElementById('kilometers').value = input;
}

//cathcing function the key press even if it was pressed inside of the input box
document.getElementById('miles').addEventListener('keydown', changeHtml);
document.getElementById('kilometers').addEventListener('keydown', changeHtml);