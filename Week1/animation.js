var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");

const speed = 4;
var position = 0;
var moveSpeed = speed;
var radius = 40;

function moveBall() {
    if (position + radius > 640) {
        moveSpeed = -speed;
    }
    else if (position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, 640, 480);

    context.fillStyle = "red";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);