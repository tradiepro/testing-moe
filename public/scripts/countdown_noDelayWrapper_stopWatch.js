// 3 SECOND COUNTDOWN ----------------------------------------------------------
    function countdown() {
        if (secondsLeft == 0) {
            clearInterval(countdownTimer);
            
            document.querySelector("#countdown-overlay").style.display = "none";
            document.getElementById("question-text").style.visibility = "visible";
            document.getElementById("top_block").style.visibility = "visible";
            document.getElementById("lower_block").style.visibility = "visible"; 
            if (timer == '1') { stopwatch = setInterval(tick, 999); }
            return
        }
        document.getElementById("countdown-number").innerHTML = secondsLeft;
        document.getElementById("countdown-circle").style.backgroundColor = countdownColours[secondsLeft-1];
        secondsLeft--;
    }
    
    function noDelayWrapper(myFunction, interval) { myFunction(); return setInterval(myFunction, interval); }
    
// STOPWATCH -------------------------------------------------------------------
    function startStopwatch() {
        if (timer == "1") { secondsCount = -1; tick(); }
        else { secondsCount = 3599; }  // 3599 = 59min 59sec, we do not show 1 hrs in progress.
    }
    function tick() {
        if (paused === false) {
            secondsCount++;
            document.getElementById("stopwatch").innerHTML = `${Math.floor(secondsCount/60)} : ${(secondsCount%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`
        }
    }