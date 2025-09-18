var i = 0;
var text = 'Hi There! :3';
var textSpeed = 250;

// TypeWriter Animation
function typeWriter() {
    if (i < text.length) {
        document.getElementById("introheading").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
}
// Cursor Animation (so happy I could figure out how to put it next to the heading) 
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
window.onload = setInterval; // Cursor
window.onload = typeWriter; // TypeWriter
