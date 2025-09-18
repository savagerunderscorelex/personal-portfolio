var i = 0;
var text = "Links";
var textSpeed = 250;

// TypeWriter Animation 
function typeWriter() {
    if (i < text.length) {
        document.getElementById("linksheading").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
}

// Cursor Animation 
var cursor = true;
var cursorSpeed = 350;

setInterval (() => {
    if (cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, cursorSpeed);

// Triggering Events 
window.onload = setInterval;
window.onload = typeWriter;