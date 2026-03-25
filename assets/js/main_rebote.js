const canvas1 = document.getElementById("reboteCanvas");
const ctx1 = canvas1.getContext("2d");

canvas1.width = 300;
canvas1.height = 300;

class Circle1 {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = (Math.random() > 0.5 ? 1 : -1);
        this.dy = (Math.random() > 0.5 ? 1 : -1);
    }

    draw() {
        ctx1.beginPath();
        ctx1.strokeStyle = "yellow";
        ctx1.shadowColor = "yellow";
        ctx1.shadowBlur = 10;
        ctx1.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx1.stroke();
    }

    update() {
        if (this.x + this.r > canvas1.width || this.x - this.r < 0) {
            this.dx *= -1;
        }
        if (this.y + this.r > canvas1.height || this.y - this.r < 0) {
            this.dy *= -1;
        }

        this.x += this.dx * speedMultiplier;
        this.y += this.dy * speedMultiplier;

        this.draw();
    }
}

let circles1 = [];

for (let i = 0; i < 5; i++) {
    circles1.push(new Circle1(Math.random()*300, Math.random()*300, 15));
}

function animar1() {
    requestAnimationFrame(animar1);
    ctx1.clearRect(0, 0, 300, 300);
    circles1.forEach(c => c.update());
}

canvas1.addEventListener("click", (e) => {
    let rect = canvas1.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    circles1.push(new Circle1(x, y, 15));
});

animar1();