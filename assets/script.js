var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-el");
//var questionTag =  document.querySelector("#questionTag");

var interval;
var time = 10;
var questionsIndex = 0;
var lastQuestionCorrect  = '';
var score =0;

var questions = [
    {
        questionText: "Do you like iceCream?",
        questionChoices: ["yes", "no"],
        correctAnswer: 0,
    },
    {
        questionText: "Do you like pizza?",
        questionChoices: ["yes", "no"],
        correctAnswer: 0,

    },
];
var btnDivEl = document.createElement("div");

function displayQuestion() {
    mainEl.innerHTML = "";

    if (questionsIndex >= questions.length) {
        endGame();
        return;
    }

    var h1El = document.createElement("h1");
    h1El.textContent = questions[questionsIndex].questionText;
    mainEl.appendChild(h1El);
   
    mainEl.appendChild(btnDivEl);

    var pEl = document.createElement("p");
    pEl.textContent = lastQuestionCorrect;
    mainEl.appendChild(pEl);


    btnDivEl.addEventListener("click", function (event) {
        var target= event.target;


        var clickedQuestionIndex = parseInt(target.getAttribute("data-index"));

        console.log(clickedQuestionIndex);

        if (clickedQuestionIndex === questions[questionsIndex].correctAnswer) {
        
            lastQuestionCorrect = "Correct";
            score++;

        } else {
            time = time - 10;
            lastQuestionCorrect = "Incorrect";
        }
       
        console.log("score -", score);
        questionsIndex++; 
      
       h1El.textContent = questions[questionsIndex].questionText;

       
    });

    for (var i = 0; i < questions [questionsIndex].questionChoices.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = questions[questionsIndex].questionChoices[i];
        buttonEl.setAttribute("data-index", i);
        btnDivEl.appendChild(buttonEl);
    }

}


startBtnEl.addEventListener("click", function (event) {
    mainEl.innerHTML = "";
    interval = setInterval(function () {
     time--;
     timerEl.textContent = `Time: ${time}`;

        if(time <= 0){
            clearInterval(interval);
            endGame();
            return;
        }
    }, 1000);
    displayQuestion();

});


function endGame() {
    clearInterval(interval);
    mainEl.innerHTML = `CONGRATULATIONS!! YOUR SCORE IS ${score}`;
}