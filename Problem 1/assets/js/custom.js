
let clock = document.getElementById('clock');
let stopBtn = document.getElementById('stop');
let startBtn = document.getElementById('start');
let currantDate = document.getElementById("date")

currantDate.textContent = new Date().toDateString();

stopBtn.onclick = function(){
    clearInterval(timer);
}

startBtn.onclick = function(){
    timer = setInterval(runClock, 1000);
}

timer = setInterval(runClock, 1000);

function runClock() {
    clock.textContent = new Date().toLocaleTimeString();            
}