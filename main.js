console.log("JS Loaded");

let countdownElement = document.getElementById('countdown');

let initialCountdownVal = countdownElement.innerHTML;

let interval = setInterval(() => {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
    countdownElement.innerHTML = initialCountdownVal;
    countdownElement.style.fontSize = initialCountdownVal * 100 + "px";

    console.log(initialCountdownVal * 100 + 'px');

    if (initialCountdownVal <= 0) {
        clearInterval(interval);
    }
}, 1000);
