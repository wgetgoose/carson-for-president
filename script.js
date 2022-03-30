let finalDay = new Date("April 4, 2022 23:59:59").getTime();
setInterval(updateTime, 1000);

function updateTime() {
    const now = new Date().getTime()
    const distance = finalDay - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = `${days}`;
    document.getElementById("hours").textContent = `${hours}`;
    document.getElementById("minutes").textContent = `${minutes}`;
    document.getElementById("seconds").textContent = `${seconds}`;
}