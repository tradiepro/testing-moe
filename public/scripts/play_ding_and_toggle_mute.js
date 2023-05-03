
function playDing() {
    for (let i = 0; i < amplifiers.length; i++) { 
        if (amplifiers[i]) { amplifiers[i].disconnect(); }
    }
    let currentTime = audioContext.currentTime;
    for (let i = 0; i < 3; i++) {
        let osc = audioContext.createOscillator();
        let amp = audioContext.createGain();
        osc.frequency.value = [432,864,2328][i];
        osc.connect(amp);
        osc.start(currentTime);
        osc.stop(currentTime + 2);
        amp.gain.setValueAtTime(0.001, currentTime);
        amp.gain.exponentialRampToValueAtTime(volume[i],currentTime + 0.02);
        amp.gain.exponentialRampToValueAtTime(0.00001,currentTime + 1.48);
        amp.gain.setValueAtTime(0, currentTime + 1.50);
        amp.connect(audioContext.destination);
        amplifiers.push(amp);
    }
}

function toggleMute() {
    if (muted === false) { 
        document.getElementById("dingPlay").style.display = "none";
        document.getElementById("dingMute").style.display = "block";
        muted = true; 
    } 
    else { 
        document.getElementById("dingMute").style.display = "none";
        document.getElementById("dingPlay").style.display = "block";
        muted = false; 
    }
}