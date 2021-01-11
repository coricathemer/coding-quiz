var questionsArray = [
    {
    question: "HTML stands for?",
    choiceA: "harry todd mark larry",
    choiceB: "help the man lift",
    choiceC: "hyper text markup language",
    choiceD: "her tail might limp",
    correctAnswer: "C",
    },
    {
    question: "What tag do you use to link a style.css?",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    correctAnswer: "",
    },
    {
    question: "How many days are there in a week?",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    correctAnswer: "",
    },
    {
    question: "What does JS stand for?",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    correctAnswer: "",
    },
]
var questionNumber = -1;
var time = 60;


var startFunction = function(){
    // this is working
    console.log("you ran start function")
    document.querySelector("#header1").style.display = "none"

    document.querySelector("#startBtn").style.visibility = "hidden";

    // run next question function
    nextQuestion()

    quizStarted = true;

}
document.querySelector("#startBtn").addEventListener("click", startFunction )

var nextQuestion = function(){
    questionNumber += 1;
    messageElem.textContent ="";
    nextQuestionBtn.style.visibility ="hidden";

    // grab the current question from the questionArray
    var questionString = questionsArray[questionNumber].question

    var newQuestion = document.createElement("h3")
    newQuestion.textContent = questionString;

    
    //put it in #questionDiv
    questionDiv.appendChild( newQuestion );

    var choiceA = questionsArray[questionNumber].choiceA
    var choiceB = questionsArray[questionNumber].choiceB
    var choiceC = questionsArray[questionNumber].choiceC
    var choiceD = questionsArray[questionNumber].choiceD

    var buttonA = document.createElement("button")
    buttonA.textContent = choiceA
    buttonA.addEventListener("click", function(){
        console.log("You clicked answer A")
        submitAnswer("A")
    })
    choicesDiv.appendChild(buttonA)

    var buttonB = document.createElement("button")
    buttonB.textContent = choiceB
    buttonB.addEventListener("click", function(){
        console.log("You clicked answer B")
        submitAnswer("B")
    })
    choicesDiv.appendChild(buttonB)

    var buttonC = document.createElement("button")
    buttonC.textContent = choiceC
    buttonC.addEventListener("click", function(){
        console.log("You clicked answer C")
        submitAnswer("C")
    })
    choicesDiv.appendChild(buttonC)

    var buttonD = document.createElement("button")
    buttonD.textContent = choiceD
    buttonD.addEventListener("click", function(){
        console.log("You clicked answer D")
        submitAnswer("D")
    })
    choicesDiv.appendChild(buttonD)
}

var submitAnswer = function( string ){
    if( string === questionArray[questionNumber].correctAnswer ){ //answer selected is correct.
      console.log(`correct answer!`)
      messageElem.textContent = `${string} was correct!`
    } else {  //user clicked incorrect answer
      console.log(`nope ${string} was wrong.`)
      messageElem.textContent = `${string} was wrong!`
    }
    //clear out questionDiv and choicesDiv
    questionDiv.innerHTML = ""
    choicesDiv.innerHTML = ""
    if( questionNumber < questionArray.length - 1 ){ //still more questions to show
      nextQuestionBtn.style.visibility = "visible";
    } else { //last question has been answered.
      endQuiz()
    }
} 