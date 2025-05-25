let flipBtn = document.querySelector("#flip-btn");
let body = document.querySelector("body");
let colorValue = document.querySelector(".color-value")

// Logic for generating random RGB colors
function getRandomRGBColor() {
    // Generate random values for R, G, and B (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const bgColor =  `rgb(${r}, ${g}, ${b})`;

    // console.log(bgColor);
    body.style.backgroundColor = bgColor;
    colorValue.innerText = bgColor
    colorValue.style.color = bgColor
}

flipBtn.addEventListener("click", () => {
    getRandomRGBColor();
})