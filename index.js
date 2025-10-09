let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score-display");
let guestScoreEl = document.getElementById("guest-score-display");

function homeScoreDisplay(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
};

function guestScoreDisplay(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
};


let timerEl = document.getElementById("timer-display");
let timeInSeconds = 720;
let timerInterval;

function updateTimer() {
    // Calculate minutes and seconds
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60; 

    // 2. Format the time with leading zeros
    // .padStart(2, '0') adds a '0' if the number is less than 10
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update the display
    timerEl.textContent = formattedTime;

    // Stop the timer if it reaches zero
    if (timeInSeconds === 0) {
        clearInterval(timerInterval); // Stop the countdown
        alert("Time's up!");
    } else {
        // Decrease the time for the next second
        timeInSeconds--;
    }
};

function startTimer() {
    // Prevents starting multiple timers at once
    if(!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
};

function stopTimer() {
    // Stop the current timer
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval variable
}

function resetTimer() {
    stopTimer();

    // Reset the time variable
    timeInSeconds = 720; // 12 minutes

    // Reset the display
    timerEl.textContent = "00:00";

    // Reset the home score data and display
    homeScore = 0;
    homeScoreEl.textContent = homeScore;

    // Reset the guest score data and display
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
};