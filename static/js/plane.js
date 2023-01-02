let plane = document.getElementById("plane");
let deg = 0,
    ex = 0,
    ey = 0,
    vx = 0,
    vy = 0,
    count = 0;

window.addEventListener("mousemove", (e) => {
    ex = e.x - plane.offsetLeft - plane.clientWidth / 2 + window.scrollX;
    ey = e.y - plane.offsetTop - plane.clientHeight / 2 + window.scrollY;
    deg = (360 * Math.atan(ey / ex)) / (2 * Math.PI) + 45;
    if (ex < 0) {
        deg += 180;
    }
    count = 0;
});

window.addEventListener("scroll", (e) => {
    plane.style.left = vx + window.scrollX + "px";
    plane.style.top = vy + window.scrollY + "px";
});

function draw() {
    requestAnimationFrame(draw);
    plane.style.transform = "rotate(" + deg + "deg)";
    if (count < 100) {
        vx += ex / 70;
        vy += ey / 70;
    }
    plane.style.left = vx + window.scrollX + "px";
    plane.style.top = vy + window.scrollY + "px";
    count++;
}

draw();