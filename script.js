var question = document.querySelector("#question");
var questionOptions = document.querySelector("#question-options");
var intro = document.querySelector("#intro-box");
var li = document.querySelectorAll("li")
li.style.display = "none"
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
var counter = 1
var button = document.querySelector("#start-button")


button.addEventListener("click", function(e){
    // e.defaultPrevented
    //Hides the intro text
    document.querySelector('.intro-box').style.display = "none";
    questionOptions.innerHTML = ""
    if (counter<5){
        document.querySelector("#question").innerHTML =  questions["q"+counter]
        document.querySelector("#start-button").style.visibility = 'hidden'
        let responseArray = questions["r"+counter] 
   
        for(let i = 0; i<responseArray.length; i++){
            // li = document.createElement('li')
            // li.id = "resp-" + i
            // li.style.background = "#8E6D94"
            // li.style.margin = "10px"
            // li.style.padding = "10px"
            // li.style.fontSize = "30px"
            // li.style.color = "white"
            // li.style.borderRadius = "10px"
            // li.style.alignContent = "center"
            // li.style.justifyItems = "center"
            // li.style.listStyle.color = "black"
            // li.style.display = "block"
            // li.innerHTML = responseArray[i]
            // questionOptions.appendChild(li);
            // li.addEventListener('mouseover',function(){
            //     li.style.background = "#822E91"
            // })
            // li.addEventListener('mouseout',function(){
            //     li.style.background = "8E6D94"
            // })
    
            // li.addEventListener('click',function(e){
            //     var target = e.target.closest('#resp-1')
            //     if (target){
            //         console.log("alsd;fj")
            //     }
                
            // })
        }

        counter++
    }else{
        document.querySelector("#question").innerHTML =  "Thank you"
        button.innerText = "FINISH"
    }

    let items = document.querySelectorAll('li');
})


// for(item in items){
//     item.addEventListener("click", function(){
//         console.log(item.id)
//     })
// }

function countFunction(e){
    var target = e.target.closest()
    counter++
    return counter
}

