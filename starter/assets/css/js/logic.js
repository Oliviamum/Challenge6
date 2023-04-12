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

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
      time -= 10;
      if (time < 0) {
        time = 0;
      }
      timerEl.textContent = time;
      feedbackEl.textContent = "Wrong!";
    } else {
      feedbackEl.textContent = "Correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  
  function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
  }
  
  function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      quizEnd();
    }
  }
  
  function saveHighscore() {
    var initials = initialsEl.value.trim();
    if (initials !== "") {
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
      var newScore = {
        score: time,
        initials: initials
      };
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
      window.location.href = "highscores.html";
    }
  }
  
  function checkForEnter(event) {
    if (event.key === "Enter") {
      saveHighscore();
    }
  }
  
  submitBtn.onclick = saveHighscore;
  startBtn.onclick = startQuiz;
  initialsEl.onkeyup = checkForEnter;
  




               
       














