

let timer;
let seconds = 0;
let minute = 0;
let hour = 0;

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let timer_element = document.getElementById("timer");

let romanNumArray = [".", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", 
                     "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", 
                     "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", 
                     "XXX", "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", 
                     "XL", "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX",
                     "L", "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII", "LVIII", "LIX"]

start_btn.addEventListener("click", function() {
    timer = setInterval(TimerHandler, 1000);
    reset_btn.disabled = true;
})

stop_btn.addEventListener("click", function() {
    timer = clearInterval(timer);
    reset_btn.disabled = false;
})

reset_btn.addEventListener("click", function() {
    timer = clearInterval(timer);
    reset_btn.disabled = true;
    seconds = 0;
    minute = 0;
    hour = 0;
    timer_element.innerHTML = "00:00:00";
})

function TimerHandler() {
    seconds++;

    if(seconds == 60) {
        seconds = 0;
        minute++;
    }

    if(minute == 60) {
        seconds = 0;
        minute = 0;
        hour++;
    }
    
    DisplayTime();
}

function DisplayTime() {
    let secondsDig = romanNumArray[seconds]; 
    let minuteDig = romanNumArray[minute];
    let hourDig = romanNumArray[hour]; 

/* // this part if were not using roman numerals but regular it converts single digit numbers to double digit.
    if(seconds < 10) {
        secondsDig = "0" + seconds;

    }

    if (minute < 10) {
        minuteDig = "0" + minute;
    }

    if (hour < 10) {
        hourDig = "0" + hour;
    }
*/
    timer_element.innerHTML = hourDig + ":" + minuteDig + ":" + secondsDig;
}

