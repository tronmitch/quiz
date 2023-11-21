var question = document.querySelector("#question");
var questionOptions = document.querySelector("#question-options");
var intro = document.querySelector("#intro-statement");
var li = document.querySelectorAll("li")
var startButton = document.querySelector("#start-button")
var enterButton = document.querySelector('#enter-button')
var playAgainButton = document.querySelector('#play-again-button')
var clearButton = document.querySelector('#clear-button')
var intialsField = document.querySelector('#initials-field')
var EnterButtonInitialsField = document.querySelector('#enter-button-initials-field')
var time = document.querySelector('#time');

                
      

//Hide the elements that will be used later
hide(time)
hide(EnterButtonInitialsField)
hide(playAgainButton)
hide(clearButton)
for(let i = 0; i<li.length; i++){
    li[i].style.display = "none"
}


// Create an object of questions/responses/answers that can be cycled through later
var questions = {
    q1: "Commonly Used data types DO NOT include",
    r1: ['strings', 'booleans', 'alerts', 'numbers'],
    a1: 'alerts',
    q2: "The condition in an if/else statement is enclosed within ____.",
    r2: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    a2: 'parentheses',
    q3: "Arrays in javaScript can be used to store_____.",
    r3: ["numbers and string", "other arrays", "booleans", "all of the above"],
    a3: 'all of the above',
    q4: "String values must be enclosed within _____ when being assigned to variables.",
    r4: ['comma', 'curly brackets', 'quotes', 'parentheses'],
    a4: 'quotes',
    q5: "A very useful tool used during development and debugging for printing content to the debugger is:",
    r5: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    a5:'console.log'
}

//Start the quiz and display the questions/responses
startButton.addEventListener("click", function(e){
    // e.defaultPrevented
    startTimer()
    //Hides the intro text and start button
    hide(intro)
    hide(startButton)

    //Show question buttons and timer
    show(time, 'inline')
    show(question, 'block')
    for(let i = 0; i<li.length; i++){
        li[i].style.display = "block"
        // show(li[i])
    }
    e.stopPropagation();
    nextQuestion();
    
})


var highScoreList = document.getElementById("scores-element")
var highScores = JSON.parse(localStorage.getItem("highScores")) || []
enterButton.addEventListener("click", function(e){
    e.defautlPrevented
    var intitialsEntered = intialsField.value
    
    
    show(clearButton, 'block')
    show(playAgainButton, 'block')
    show(highScoreList, 'block')
    hide(EnterButtonInitialsField)
    var highScore = {
        initials:intitialsEntered,
        score:finalSecondsLeft
    }
    highScoreList.innerHTML = ""
    highScores.push(highScore)
    var keyToSortBy = 'score'
    highScores.sort(function(a,b){
        return b[keyToSortBy] - a[keyToSortBy]
    })
    localStorage.setItem("highScores", JSON.stringify(highScores));
    for (let i =0; i<highScores.length; i++){
        var scores =  document.createElement('p')
        scores.innerHTML = highScores[i].initials + " Time: " + highScores[i].score
        if (i%2 == 1){
            scores.style.backgroundColor =  'rgb(254, 250, 255)'
        }else{
            scores.style.backgroundColor =  '#f5ebf7'
        }
        scores.style.padding = "7px 55px 7px"
        scores.style.fontSize = "15px"
        scores.style.margin = "1px"

        highScoreList.appendChild(scores) 
    }
    e.preventDefault()
    e.stopPropagation
})


var playAgainButton = document.querySelector('#play-again-button')
playAgainButton.addEventListener("click",function(e){
    e.defaultPrevented
    for(let i = 0; i<highScoreList.length; i++){
        hide(highScoreList[[i]])
    }
    //Reset values to default
    hide(playAgainButton)
    hide(clearButton)
    hide(question)
    hide(highScoreList)
    show(intro, 'block')
    show(startButton, 'block')
    counter = 1
    secondsLeft = 60
    finalSecondsLeft = null
    penalty = false
})

var clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click',function(e){
    e.defautlPrevented
    highScoreList.innerHTML = "" 
    localStorage.clear()
    highScores = []
})

var counter = 1
// var result = ""
function nextQuestion(event){
    //break out of function before using an itterator that does not have any values
    if (counter >= 6){
        endQuiz();
        return
    }

    //get the answer clicked before and compare before going to next question
    var responseClicked = ""
    var result = ""
    if (event){
        responseClicked = event.target.innerHTML;
    }
    if (counter > 1){
        let answer = questions["a"+ (counter-1)];
        if (responseClicked && responseClicked == answer){
            result = "Correct"
        }else{
            result = "Incorrect"
            penalty = true
        }
        console.log(result)
    }

    question.innerHTML =  questions["q"+counter];
    let responseArray = questions["r"+counter];
    
    let liArray = li;
    for(let i = 0; i<responseArray.length; i++){
        liArray[i].innerHTML = responseArray[i];
        questionOptions.appendChild(li[i]);
    }
    counter++
    return
}

var penalty = false
var secondsLeft = 60
var finalSecondsLeft = null
function endQuiz(){
    for(let i = 0; i<li.length; i++){
        li[i].style.display = "none"
    }
    question.innerHTML = "Thanks for taking the Quiz"
    time.textContent = "TIME: 0";
    if(!finalSecondsLeft){
        finalSecondsLeft = secondsLeft;
    }
    if (finalSecondsLeft<0){
        finalSecondsLeft = 0
    }
    
    secondsLeft = 0;
    // intialsInput.style.display = "inline"
    show(EnterButtonInitialsField, 'block')
}

function startTimer(){
    var timerInterval = setInterval(function() {
        if (penalty){
            secondsLeft = (secondsLeft-10)
            time.textContent = "TIME:"  + secondsLeft;
            penalty = false
        } else {
            secondsLeft--;
            time.textContent = "TIME:"  + secondsLeft;
        }
        if (secondsLeft <= 0){
            endQuiz()
            clearInterval(timerInterval);
            time.textContent = "TIME: 0";
        }
    },1000)
}

function hide(element) {
    element.style.display = 'none'
 }
 function show(element, displayType) {
    element.style.display = displayType
 }
