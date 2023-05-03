function textAndImageFeedback(isCorrect) {
    // Reset images
    document.getElementById("star_exploding").classList.remove("triggered");
    document.getElementById("confetti_shooting").classList.remove("triggered");
    document.getElementById("thumbs_up").classList.remove("triggered");
    document.getElementById("arrow_on_target").classList.remove("triggered");
    document.getElementById("happy_face").classList.remove("triggered");
    
    document.getElementById("incorrect-image").classList.remove("triggered");
    document.getElementById("question-text").classList.remove("incorrect-text");
    document.getElementById("feedback-header").classList.remove("triggered");
    document.getElementById("feedback-header").scrollBy(0, 0);
    
    if (isCorrect === true) {
        
        var image_select = Math.floor(Math.random() * 5);
        while ((image_select == last_image)||(image_select == second_last_image)) { image_select = Math.floor(Math.random() * 3); }
        second_last_image = last_image;
        last_image = image_select;

        if (image_select === 0) {
            document.getElementById("feedback-header").innerHTML = 'Great job!';
            document.getElementById("feedback-header").style.color = "#45EBA5";
            document.getElementById("star_exploding").classList.add("triggered");
        } 
        if (image_select === 1) {
            document.getElementById("feedback-header").innerHTML = 'Excellent!';
            document.getElementById("feedback-header").style.color = "#FF00E4";
            document.getElementById("confetti_shooting").classList.add("triggered");
        }
        if (image_select === 2) {
            document.getElementById("feedback-header").innerHTML = 'Awesome!';
            document.getElementById("feedback-header").style.color = "green";
            document.getElementById("thumbs_up").classList.add("triggered");
        }
        if (image_select === 3) {
            document.getElementById("feedback-header").innerHTML = 'Brilliant!';
            document.getElementById("feedback-header").style.color = "orange";
            document.getElementById("arrow_on_target").classList.add("triggered");
        }
        if (image_select === 4) {
            document.getElementById("feedback-header").innerHTML = 'Super!';
            document.getElementById("feedback-header").style.color = "purple";
            document.getElementById("happy_face").classList.add("triggered");
        }

        if(numEvenOdd % 2 == 0) { document.getElementById("question-text").style.color = "purple"; }
        else { document.getElementById("question-text").style.color = "blue"; }
        numEvenOdd++;

        document.getElementById("feedback-header").classList.add("triggered");
    } 
    else {
        document.getElementById("incorrect-image").style.visibility = "visible";
        document.getElementById("feedback-header").style.visibility = "visible";
        document.getElementById("feedback-header").innerHTML = 'Try again!';
        document.getElementById("feedback-header").style.color = "#F9B208";
        document.getElementById("question-text").classList.add("incorrect-text");
    }
}

function buttonFeedbackIncorrect(buttonId, isSolutionButton) {
    document.getElementById(buttonId).classList.remove("correct");
    document.getElementById(buttonId).scrollBy(0, 0);
    if (isSolutionButton === true) {
        document.getElementById(buttonId).classList.add("correct-hold");
        document.getElementById(buttonId).disabled = false; // Correct solution is the only button that is enabled when game is paused
        document.getElementById(buttonId).onclick = pauseWrapper;       // Correct solution when clicked doesn't trigger the normal event but ONLY UNFREEZES
    } else {
        document.getElementById(buttonId).classList.add("incorrect-hold");
    }
}
