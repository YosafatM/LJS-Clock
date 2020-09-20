const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function setTime() {
    let hrPosition, minPosition, secPosition, date;

    date = new Date();
    secPosition = date.getSeconds() * (360 / 60);
    minPosition = date.getMinutes() * (360 / 60) + (secPosition / 60);
    hrPosition = date.getHours() * (360 / 12) + (minPosition / 60);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

setInterval(setTime, 1000);