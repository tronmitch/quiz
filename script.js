var question = document.querySelector("#question");
var button = document.querySelector("#button");
var questions = [
"question1", "question2", "question3"
];

// function cycleQuestion(){
   
// }
var count = 0
button.addEventListener("click",function(event){
    event.preventDefault();
     
    question.textContent = questions[count]
    count++
console.log("button Pushed")
});

