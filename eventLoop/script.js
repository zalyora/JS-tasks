const COUNTER = document.querySelector('#counter');
let now = new Date();
let programmersDayObj = new Date(now.getFullYear(), 0, 256);

(function(){
    // Targeted date
    let countDownDate = new Date(programmersDayObj).getTime();
    // Update the count down every 1 second
    let x = setInterval(function() {
        // Get current date and time
        let now = new Date().getTime();
        // Time to the date
        let timeToDate = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);
        // Display the result in the element with id="counter"
        COUNTER.innerHTML = `
        <span class="numbers">${days}<span class="time_unit">days</span></span><span class="numbers">${hours}<span class="time_unit">hours</span></span><span class="numbers">${minutes}<span class="time_unit"> minutes</span></span><span class="numbers">${seconds}<span class="time_unit">seconds</span></span>
        `;
        // If the countdown is finished, display a message 
        if (timeToDate < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "Countdown finished";
        }
    }, 1000);

})();