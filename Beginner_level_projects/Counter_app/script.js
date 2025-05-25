let displayCount = document.querySelector("#counter");
let decrementBtn = document.querySelector("#decrement-btn")
let incrementBtn = document.querySelector("#increment-btn")
let resetBtn = document.querySelector("#reset-btn")

let count = 0;

resetBtn.addEventListener("click", () => {
    // console.log("Reset");
    if (count === 0) {
        alert("Already at zero...!");
    } else {
        count = 0;
        displayCount.innerText = count;
    }
})

incrementBtn.addEventListener("click", () => {
    // console.log("Increased");
    count++;
    displayCount.innerText = count;
})

decrementBtn.addEventListener("click", () => {
    // console.log("Decreased");
    if (count <= 0) {
        alert("Can't go negative...!")
    } else {
        count--;
        displayCount.innerText = count;
    }
})