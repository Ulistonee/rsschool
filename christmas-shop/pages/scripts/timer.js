function updateTimer() {
    const now = new Date();
    const currentYear = now.getUTCFullYear();
    const nextYear = currentYear + 1;

    const newYear = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0));

    const remainingTime = newYear - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString();
    document.getElementById("hours").textContent = hours.toString();
    document.getElementById("minutes").textContent = minutes.toString();
    document.getElementById("seconds").textContent = seconds.toString();
}

setInterval(updateTimer, 1000);
updateTimer();
