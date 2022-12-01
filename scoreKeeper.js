const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTill");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 0;





p1Button.addEventListener("click", function (e) {

    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-primary");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p1Display.innerHTML = p1Score;
    }

})
p2Button.addEventListener("click", function (e) {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("has-text-primary");
            p1Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p2Display.innerHTML = p2Score;
    }
})

winningScoreSelect.addEventListener("change", function (e) {
    winningScore = parseInt(this.value);
    resetGame();
})

reset.addEventListener("click", resetGame)

function resetGame() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = 0;
    p1Display.classList.remove("has-text-primary", "has-text-danger");
    p2Display.classList.remove("has-text-primary", "has-text-danger");
    p2Display.innerHTML = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;

}