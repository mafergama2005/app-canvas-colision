let speedMultiplier = 2;

const slider = document.getElementById("speedControl");

slider.addEventListener("input", () => {
    speedMultiplier = parseFloat(slider.value);
});