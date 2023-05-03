function triggerCelebration() {
    if (roundNum == 3) { 
        var script = document.createElement("script");
        script.src = "/scripts/confetti_dropping.js";
        document.body.append(script);
    }
    else { release_balloons(); }  // function is in script/release_balloons.js
}

function release_balloons() {
    let balloonColors=[[255,205,135],[10,165,227],[203,170,203],[238,172,77],[77,208,145],[255,236,89],[255,131,82],[241,201,194],[85,203,205],[143,202,202],[202,179,193],[255,178,123],[141,215,191],[255,150,197],[255,87,104],[125,185,84],[255,205,135],[10,165,227],[203,170,203],[238,172,77],[77,208,145],[255,236,89],[255,131,82],[241,201,194],[85,203,205],[143,202,202],[202,179,193],[255,178,123],[141,215,191],[255,150,197],[255,87,104],[125,185,84]];
    let n = Math.floor(Math.random()*12);

    for (i = 1; i <= 20; i++) {
        let balloon = document.getElementById('balloon_'+i);
        let balloon_before = window.getComputedStyle(balloon,':before');
        let balloon_after = window.getComputedStyle(balloon,':after');

        function getRandomStyles() { //   var red = random(255); var grn = random(255); var blue = random(255);
          var red = balloonColors[n+i-1][0]; var grn = balloonColors[n+i-1][1]; var blue = balloonColors[n+i-1][2];
          var dur = Math.floor(Math.random()*8)+4;
          return `left:${i*4+5}vw; background-color: rgba(${red},${grn},${blue},0.7); color: rgba(${red},${grn},${blue},0.7); 
            box-shadow: inset -6px -3px 8px rgba(${red-10},${grn-10},${blue-10},0.7); animation: float ${dur}s ease-in 1 forwards; `
        }
        balloon.style.cssText = getRandomStyles(); balloon.style.setProperty('--beforeBalloon','visible'); balloon.style.setProperty('--afterBalloon','visible');
    }
}

function animateLetters() {
    if (letterNum == 26) { clearInterval(titleWave); return }
    document.getElementById(`letter-${letterNum}`).classList.add("text-wave");
    letterNum++;
}