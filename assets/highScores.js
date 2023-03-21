var mainEl = document.querySelector("main");
var highScores = JSON.parse(localStorage.getItem("players")) || [];
console.log(highScores);

function displayHighScores () {
    if (highScores.length === 0) return;
    mainEl.innerHTML = "";
    
    for (var i =0; i <== highScores.length; i++) {
        var pEl = document.createElement("p");
        pEl.textContent = "Player: " + highScores[i].initials + " | Score:" + highScores[i].score;
        mainEl.appendChild(pEl);
    }
};
displayHighScores();