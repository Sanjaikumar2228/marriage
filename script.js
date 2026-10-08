// PRELOADER
window.onload=function(){
document.getElementById("preloader").style.display="none";
document.getElementById("code").value = "2026";
}

// LOGIN
function enterSite(){
if(document.getElementById("code").value ==="2026"){
document.getElementById("loginPage").style.display="none";
document.getElementById("mainContent").style.display="block";
document.getElementById("bgMusic").play();
launchPetals();
}else{
alert("Wrong Code!");
}
}

// COUNTDOWN (Time Remaining Until Wedding)
let wedding = new Date("oct 30, 2026 06:00:00").getTime();

let countdownInterval = setInterval(function () {

    let now = new Date().getTime();
    let distance = wedding - now; // countdown

    // If wedding time reached
    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.querySelector(".married-wrapper").innerHTML =
            "<h3 class='gold-text'>💍 Wedding Started 💍</h3>";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

}, 1000);





// PETALS
function launchPetals(){
for(let i=0;i<20;i++){
let petal=document.createElement("div");
petal.classList.add("petal");
petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(petal);
}
}
// LIVE RUNNING CLOCK
function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("liveClock").innerHTML =
        hours + " : " + minutes + " : " + seconds;
}

setInterval(updateClock, 1000);
updateClock();




