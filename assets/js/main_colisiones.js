const canvas2 = document.getElementById("colisionCanvas");
const ctx2 = canvas2.getContext("2d");

canvas2.width = 300;
canvas2.height = 300;

class Circle2 {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = (Math.random() > 0.5 ? 1 : -1);
        this.dy = (Math.random() > 0.5 ? 1 : -1);
        this.color = "cyan";
    }

    draw() {
        ctx2.beginPath();
        ctx2.strokeStyle = this.color;
        ctx2.shadowColor = this.color;
        ctx2.shadowBlur = 10;
        ctx2.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx2.stroke();
    }

    update() {
        if (this.x + this.r > canvas2.width || this.x - this.r < 0) {
            this.dx *= -1;
        }
        if (this.y + this.r > canvas2.height || this.y - this.r < 0) {
            this.dy *= -1;
        }

        this.x += this.dx * speedMultiplier;
        this.y += this.dy * speedMultiplier;

        this.draw();
    }
}

function colision(c1, c2) {
    let dx = c1.x - c2.x;
    let dy = c1.y - c2.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    return dist < c1.r + c2.r;
}

function randomColor() {
    return `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
}

let circles2 = [];

for (let i = 0; i < 5; i++) {
    circles2.push(new Circle2(Math.random()*300, Math.random()*300, 15));
}

function animar2() {
    requestAnimationFrame(animar2);
    ctx2.clearRect(0, 0, 300, 300);

    for (let i = 0; i < circles2.length; i++) {
        circles2[i].update();

        for (let j = i + 1; j < circles2.length; j++) {
            if (colision(circles2[i], circles2[j])) {
                circles2[i].color = randomColor();
                circles2[j].color = randomColor();
            }
        }
    }
}

canvas2.addEventListener("click", (e) => {
    let rect = canvas2.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    circles2.push(new Circle2(x, y, 15));
});

animar2();