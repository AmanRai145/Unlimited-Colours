const start = document.querySelector("#start");
const stopk = document.querySelector("#stopk");



const h1 = document.querySelector("h1");
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set an interval to change the background color of the body every second

let stopi;

start.addEventListener('click', () => {
    // Start changing the background color every second
     stopi = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000)}
);

stopk.addEventListener('click', () => {
    clearInterval(stopi);

});