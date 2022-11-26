console.log("working");

window.onload = function () {
    var seconds = 00;
    var mins = 00;
    // var hours = 00;
    var appendMins = document.getElementById("mins");
    var appendSeconds = document.getElementById("seconds");
    // var appendHours = document.getElementById("hours");
    var buttonStart = document.getElementById('btn1');
    var buttonStop = document.getElementById('btn2');
    var buttonReset = document.getElementById('btn3');
    var Interval;

    buttonStart.onclick =  ()=> {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        seconds = "00";
        mins = "00";
        appendSeconds.innerHTML = seconds;
        appendMins.innerHTML = mins;
    }

    function startTimer() {
        seconds++;

        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 99) {
            console.log("mins")
            mins++;
            appendMins.innerHTML = "0" + mins;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;

        }

        if (mins > 9) {
            appendMins.innerHTML = mins;
        }

    }


}