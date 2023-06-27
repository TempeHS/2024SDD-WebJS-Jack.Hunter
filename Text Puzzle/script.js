//**********************************************************************************
// written by Ben Jones
//
// Student idea container, students use tehir HTML, CSS & JS skills to turn this into a word puzzle game.
//
// Written 23/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************

var x = document.getElementById("playerWin");
x.style.display = "block";
var redValue = 255;
var blueValue = 0;
var greenValue = 0;
var timerId = 0;
changeCoulor();
function changeCoulor() {
    x.style.color = "rgb(" + redValue + ", " + blueValue + ", " + greenValue + ")";
    if (redValue == 255 && greenValue != 255 && blueValue == 0) {
        greenValue++;
    } else if (greenValue == 255 && redValue != 0 && blueValue == 0) {
        redValue--;
    } else if (redValue == 0 && greenValue == 255 && blueValue != 255) {
        blueValue++;
    } else if (blueValue == 255 && greenValue != 0) {
        greenValue--;
    } else if (blueValue == 255 && redValue != 255) {
        redValue++;
    } else if (redValue == 255) {
        blueValue--;
    }
    timerId = setTimeout("changeCoulor()", 1);
}