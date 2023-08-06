// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");
setInterval(
    function updateFunction(){
    time++;
    setInterval(counterElement.textContent = time, 1000);
    },
    1000
);


