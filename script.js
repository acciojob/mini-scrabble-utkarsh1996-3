//your code here
const count = document.getElementById("letterCount");
const input = document.getElementById("evaluatedText");

input.addEventListener("input", ()=> {
    updateCount(input.value.length)
});

function updateCount(num) {
    count.innerText = num;
}