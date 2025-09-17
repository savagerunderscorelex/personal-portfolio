var i = 0;
var text = 'Hobbies and Interests';
var speed = 250;

/* Typewriter Animation */
function typeWriter() {
    if (i < text.length) {
        document.getElementById("hobbiesheading").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

/* Cursor Animation */
var cursor = true;
var speed = 350;

setInterval (() => {
    if (cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    }
    else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);

/* Triggering Events */
window.onload = setInterval; /* Cursor Blinking */
window.onload = typeWriter; /* Typewriter effect */