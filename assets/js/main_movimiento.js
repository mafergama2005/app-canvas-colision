const canvas3 = document.getElementById("movimientoCanvas");
const ctx3 = canvas3.getContext("2d");

canvas3.width = 300;
canvas3.height = 300;

class Circle3 {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = (Math.random() > 0.5 ? 1 : -1);
        this.dy = (Math.random() > 0.5 ? 1 : -1);
    }

    draw() {
        ctx3.beginPath();
        ctx3.strokeStyle = "white";
        ctx3.shadowColor = "white";
        ctx3.shadowBlur = 10;
        ctx3.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx3.stroke();
    }

    update() {
        this.x += this.dx * speedMultiplier;
        this.y += this.dy * speedMultiplier;

        // evitar que desaparezcan
        if (this.x < 0 || this.x > 300) this.dx *= -1;
        if (this.y < 0 || this.y > 300) this.dy *= -1;

        this.draw();
    }
}

let circles3 = [];

for (let i = 0; i < 5; i++) {
    circles3.push(new Circle3(Math.random()*300, Math.random()*300, 15));
}

function animar3() {
    requestAnimationFrame(animar3);
    ctx3.clearRect(0, 0, 300, 300);
    circles3.forEach(c => c.update());
}

canvas3.addEventListener("click", (e) => {
    let rect = canvas3.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    circles3.push(new Circle3(x, y, 15));
});

animar3();