var i = 0;
var txt = 'WHAT WE OFFER';
var speed = 250;

function showOffer() {
    document.getElementById("offer").classList.remove("hidden");
    document.getElementById("button").classList.add("hidden");
    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}