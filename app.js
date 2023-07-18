let timer;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let display = document.querySelector('#timer');
    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');
    let reset = document.querySelector('#reset');

    start.addEventListener('click', function () {
        startTimer(25*60, display);
    });
    stop.addEventListener('click', function () {
        clearInterval(timer);
    });
    reset.addEventListener('click', function () {
        display.textContent = "25:00";
        clearInterval(timer);
    });
};