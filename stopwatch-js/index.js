const timer = document.querySelector(".timer");
const startBtn = document.querySelectorAll("button")[0];
const clearBtn = document.querySelectorAll("button")[1];
const stopWatch = {elapsedTime: 0};

startBtn.addEventListener("click", () => {
    if(startBtn.innerHTML === "Start"){
        startBtn.innerHTML = "Stop";
        startTimer();
    }else{
        stopWatch.elapsedTime += Date.now() - stopWatch.startedAt
        startBtn.innerHTML = "Start";
        clearInterval(stopWatch.intervalId);
    }
});

clearBtn.addEventListener("click", () => {
    if(startBtn.innerHTML === "Start"){
        stopWatch.elapsedTime = 0;
        clearInterval(stopWatch.intervalId);
        startBtn.innerHTML === "Start";
        displayTimer('00','00','00','00');
    }
})

function startTimer() {
    stopWatch.startedAt = Date.now();
    stopWatch.intervalId = setInterval(() => {
        const elapsedTime = Date.now() - stopWatch.startedAt + stopWatch.elapsedTime;
        const milliseconds = parseInt((elapsedTime%1000)/10)
        const seconds = parseInt((elapsedTime / 1000) % 60)
        const minutes = parseInt((elapsedTime / (1000*60)) % 60)
        const hours = parseInt((elapsedTime / (1000*60*60)) % 60)
        displayTimer(seconds,minutes,hours,milliseconds)
    }, 100)
}

function displayTimer(seconds, minutes, hours, miliseconds) {
    seconds = ('0'+seconds).slice(-2);
    minutes = ('0'+minutes).slice(-2);
    hours = ('0'+hours).slice(-2);
    miliseconds = ('0'+miliseconds).slice(-2);

    timer.innerHTML = `${hours}-${minutes}-${seconds}-${miliseconds}`
}