var question = document.querySelector("#question");
var questionOptions = document.querySelector("#question-options");
var intro = document.querySelector("#intro-box");
var li = document.querySelectorAll("li")
for(let i = 0; i<li.length; i++){
    li[i].style.display = "none"
}
var time = document.querySelector('#time');
time.style.display ="none"
// var button = document.querySelector("#button");
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

var startButton = document.querySelector("#start-button")


startButton.addEventListener("click", function(e){
    // e.defaultPrevented
    startTimer();
    //Hides the intro text and start button
    document.querySelector('.intro-box').style.display = "none";
    document.querySelector("#start-button").style.visibility = 'hidden'

    //Show question buttons and timer
    time.style.display ="inline"
    for(let i = 0; i<li.length; i++){
        li[i].style.display = "block"
    }
    e.stopPropagation();
    nextQuestion();
    
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
            adjustTimer()
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
    return counter
}
function endQuiz(){
    for(let i = 0; i<li.length; i++){
        li[i].style.display = "none"
    }
    question.innerHTML = "Thanks for taking the Quiz"
}
var secondsLeft = 60
function startTimer(){
    var timerInterval = setInterval(function() {
        time.textContent = "TIME:"  + secondsLeft;
        secondsLeft--;
        if (secondsLeft === 0){
            endQuiz()
            clearInterval(timerInterval);
        }
    },1000)
}

var penalty  =  false

    function adjustTimer(){
        var timerInterval = setInterval(function(){
            if(penalty){
            secondsLeft = (secondsLeft-10)
            time.textContent = "TIME:"  + secondsLeft;
            if (secondsLeft <= 0){
                endQuiz()
                clearInterval(timerInterval);
            }
            penalty = false
            return
        }
        })
    }


