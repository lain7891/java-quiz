var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-quiz");



startButton.addEventListener("click", function(){
    // hides the code quiz display title for the next page
    quizContainer.style.display = "none";
});