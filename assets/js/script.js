let eventName = "2024-Jan-1";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const eventEl = document.getElementById("event");
// const eventDateEl = document.getElementById("button");

function countdown() {
    let eventDate = new Date(eventName);
    let currentDate = new Date();

    const totalSeconds = (eventDate  - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


function eventDate() {
    eventDate = eventDateEl.value = eventDate.toString();
    console.log(eventDate);
    return eventDate
    
};

document.getElementById("eventButton").onclick = function() {
    let eventN = document.getElementById("eventName").value;
    eventName = document.getElementById("eventDate").value;
    eventEl.innerHTML = `To ${eventN} (${eventName})`;
};

countdown()

setInterval(countdown, 1000);