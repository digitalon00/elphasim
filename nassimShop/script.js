function goBack() {
    window.history.back();
}

function startTimer() {
    var countDownSeconds;
    if(localStorage.getItem('countDownSeconds')) {
      countDownSeconds = localStorage.getItem('countDownSeconds');
    } else {
      countDownSeconds = 12 * 60 * 60; // 12 hours in seconds
      localStorage.setItem('countDownSeconds', countDownSeconds);
    }
    
    var timer = setInterval(function() {
      var hours = Math.floor(countDownSeconds / 3600);
      var minutes = Math.floor((countDownSeconds % 3600) / 60);
      var seconds = countDownSeconds % 60;
  
      var displayTime = " ساعة " + formatTime(hours) + " : دقيقة " + formatTime(minutes) + " : ثانية " + formatTime(seconds);
      document.getElementById("timer").innerHTML = displayTime;
  
      countDownSeconds--;
  
      if (countDownSeconds < 0) {
        clearInterval(timer);
        localStorage.setItem('countDownSeconds', 12 * 60 * 60); // Reset to 12 hours when countdown ends
        startTimer(); // Restart timer
      } else {
        localStorage.setItem('countDownSeconds', countDownSeconds);
      }
    }, 1000);
}
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
  // Start the timer when the script is executed
startTimer();

function increment() {
    var input = document.querySelector('.qty_input');
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    input.value = value;
}

function decrement() {
    var input = document.querySelector('.qty_input');
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 1 : value;
    value = value > 1 ? value - 1 : 1; // Ensures value doesn't go below 1
    input.value = value;
}