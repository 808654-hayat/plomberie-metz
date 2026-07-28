
document.getElementById('year').textContent = new Date().getFullYear();

const plombierElement = document.getElementById('plombier');
   
setInterval(() => {
    if (plombierElement.style.color === "white") {
        plombierElement.style.color = "blue";
        } else {
        plombierElement.style.color = "white";
        }
    }, 1000);
    