const highscoresList = document.getElementById("highscores");

//Get highscores dat from local storage
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

//sort highscores in descending order
highscores.sort((a, b) => b.score - a.score);   

//displayhighscores in HTML
highscores.forEach(function(score) {
    const li = document.createElement("li");
    li.textContent = `${score.initials}: '${score.score}`;
    highscoresList.appendChild(li);
});

//Clear highscores list when button is clicked
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click",()=> {
 localStorage.removeItem("highscores");
 highscoresList.innerHTML = "";
});


