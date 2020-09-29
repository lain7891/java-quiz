
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-quiz");
var questions = document.getElementById("questions");
var answerChoices = document.getElementById("answer-choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var questionArea = document.getElementById("question-area");
var answerBelow = document.getElementById("answer-below");
var myElement = document.querySelector("#quiz-questions");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");


var currentQuestion = 0;
var secondsLeft = 80;

function renderAnswerChoices(array) {

    var availableAnswers = [ {
        question: "Commonly used data type DO NOT include",
        choices: ["stings", "booleans", "alert", "numbers"],
        correctAnswer: "alert",
      },
    { 
        question:  "The condition in and if/else statement is enclosed in ______",
         choices: ["quotes","curly brackets", "parenthesis", "square brackets"],
         correctAnswer: "parenthesis",
    },
    {

        question:  "Arrays in JavaScript can be used to store",
    
         choices: ["number and strings", "other arrays", "booleans", "all of the above"],
         correctAnswer: "all of the above"
    },
    {
        question:  "String values must be enclosed within ______ when being assigned to variables.",
        choices:["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "curly brackets"
    },
    {
        question:  "A very useful tool used during development and debugging for printing content to the debugger is",
    
        choices: ["JavaScript", "terminal/ bash", "for loops", "console log"],
        correctAnswer: "for loops"
    }
    ];
    answerChoices.textContent = "";
    var currentQandA = availableAnswers[currentQuestion];
    questionArea.textContent = currentQandA.question;
    
questions.setAttribute("style", "font-size: 45px", "font-weight: bold");
answerChoices.setAttribute("style", "font-size: 30px");


    for (var i = 0; i < availableAnswers[currentQuestion].choices.length; i++) {
       // created an element
      var button = document.createElement("button");
       // content
       button.setAttribute("class", "btn btn-primary")
      button.textContent = availableAnswers[currentQuestion].choices[i];
      button.setAttribute("answer-value", availableAnswers[currentQuestion].correctAnswer); 
     // append 
     answerChoices.append(button);
    }
}

// clicking and choosing button
answerChoices.addEventListener("click", function(event){
    if(event.target.matches("button")){
        console.log("you clicked");
        var correctAnswer = event.target.getAttribute("answer-value");
        var selectedAnswer = event.target.textContent;
        if(selectedAnswer === correctAnswer){
            alert("Correct");
            currentQuestion++; 
            renderAnswerChoices();
        } else {
            alert("Incorrect");
            currentQuestion++; 
            renderAnswerChoices();
        };

    }
});
startButton.addEventListener("click", function(){
    // hides the code quiz display title for the next page
    quizContainer.style.display = "none";
    // var optionToDisplay = [currentAnswer].options;
    console.log("clicked");
    renderAnswerChoices();
});
