
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-quiz");
var questions = document.getElementById("questions");
var answerChoices = document.getElementById("answer-choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var questionArea = document.getElementById("question-area");




// var lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// var currentAnswer = 0;
var currentQuestion = 0;

function renderAnswerChoices(array) {

    var availableAnswers = [ {
        question: "commonly used data type DO NOT include",
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
    
         choiceA: "number and strings", 
         choiceB: "other arrays", 
         choiceC: "booleans", 
         choiceD: "all of the above",
         correctAnswer: "D"
    },
    {
        question:  "String values must be enclosed within ______ when being assigned to variables.",
    
        choiceA: "commas", 
        choiceB: "curly brackets", 
        choiceC: "quotes", 
        choiceD: "parenthesis",
        correctAnswer: "B"
    },
    {
        question:  "A very useful tool used during development and debugging for printing content to the debugger is",
    
        choiceA: "JavaScript", 
        choiceB: "terminal/ bash", 
        choiceC: "for loops", 
        choiceD: "console log",
        correctAnswer: "C"
    }
    ];
    answerChoices.textContent = "";
    var currentQandA = availableAnswers[currentQuestion]
questionArea.textContent = currentQandA.question;

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
//         console.log(selectedAnswer);
// // picks one of the choices given and displays it and removes all buttons. 
//         answerChoices.textContent = "";
//         var answerToDisplay = document.createElement("h3");
//         answerToDisplay.textContent = selectedAnswer;
//         answerChoices.append(answerToDisplay);
    }
});
startButton.addEventListener("click", function(){
    // hides the code quiz display title for the next page
    quizContainer.style.display = "none";
    // var optionToDisplay = [currentAnswer].options;
    console.log("clicked");
    renderAnswerChoices();
});
