const chronometer = new Chronometer();

// Example >> when clicked, the start button invokes startClick() method
// When the chronometer is running, the start button => class="btn start"
//when we click in the btnLeft.onclick()
//will change its behavior to stop the chronometer. 
//=> class= (ADD) "btn stop" for btnLeft &  "btn split" for btnRight
// =: button innerhtmal='stop' for btnLeft &  "split" for btnRight 
//In contrast, the reset button will change to split. => class="btn reset"
// 

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if(btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute('class', 'btn stop');
    chronometer.startClick(printTime);   // Printime to call the callback

  } else {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute('class', 'btn start');
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
   
  if(btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split'); 
    
    
  } else {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
  }
});


// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');


function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesString = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = minutesString[0];
  minUni.innerHTML = minutesString[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsString = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = secondsString[0];
  secUni.innerHTML = secondsString[1];
}


// ==> BONUS
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}
