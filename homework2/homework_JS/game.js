var isPlaying = confirm("Do you want to play?");
if (!isPlaying) {
    alert("Not today.");
} else {
    var rangeMin = 1, rangeMax = 5;
    var triesCounter = 3;
    var number = Math.round(rangeMin + Math.random() * (rangeMax + 1 - rangeMin));
    var answer;
    while (triesCounter > 0) {
        answer = prompt("Guess number from " + rangeMin + " to " + rangeMax + ". You have " + triesCounter + " tries." + number);
        if (answer == number) {
            alert("Congratulations!!!");
            break;
        }
        triesCounter--;
        if (triesCounter == 0)
            alert("Today is not your day.");
    }
}