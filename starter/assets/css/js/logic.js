var currentQuestionIndex = 0;
var time = questions.length*15;
var timerId;

var questionsE1= document.getElementsById("questions");
var timerE1= document.getElementsById("time");
var choicesE1= document.getElementsById("choices");
var submitBtn= document.getElementsById("submit");
var startBtn= document.getElementsById("start");
var initialsE1= document.getElementsById("initials");
var feedbackE1= document.getElementsById("feedback");

function startQuiz() {
    startScreenE1= document.getElementsById("start-screen");
    startScreenE1.setAttribute("class","hide");
    questionsE1.removeAttribute("class");
        timerId = setInterval(clocktick,1000
        timerE1.textContent = time;
        getQuestion();
}

function getQuestion() {
         var currentQuestion= questions[currentQuestionIndex];
        var titleE1= document.getElementById("question-title");
        titleE1.textContent= currentQuestion.title;
        choicesE1.innerHTML= "";
        currentQuestion.choices.forEach(function(choice,i) {
            var choiceNode= document.createElement("button");
            choiceNode.setAttribute("class","choice");
            choiceNode.setAttribute("value",choice);
            choiceNode.textContent= i+1 + ". " + choice;
            choiceNode.onclick= questionClick;
            choicesE1.appendChild(choiceNode);
        });
}





               
       














