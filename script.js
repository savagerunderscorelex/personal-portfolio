var i = 0;
var txt = 'Hi There!';
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("introheading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
/* Cursor Animation (so happy I could figure out how to put it next to the heading) */
var cursor = true;
var speed = 350;
setInterval (() => {
    if (cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
    } else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
    }
}, speed);
/* Triggering Events */
window.onload = setInterval;
window.onload = typeWriter;
