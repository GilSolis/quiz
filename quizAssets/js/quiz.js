var startDiv = document.getElementById("startScreen");
var gameDiv = document.getElementById("quizBox");

var questionTitle = document.getElementById("question");

var choices = document.getElementsByClassName('choice');

var highScore = document.getElementById('highScores');

var yourScore = document.getElementById('yourscore');

var displayScore = document.getElementById('displayscore');
var submit = document.getElementById('submit1');
var timerSpan = document.getElementById("timerSpan");
var timer = document.getElementById("timer");


function playJeopardy(){
    var jeopardy = document.getElementById('jeopardy');
    jeopardy.play();
}

function playSadTrombone(){
    var sadTrombone = document.getElementById('sadTrombone');
    sadTrombone.play();
    }

function playairHorn(){
    var airHorn = document.getElementById('airHorn');
    airHorn.play();
    }


for (var choice of choices) {
    choice.onclick = checkAnswer
}

var qIndex = 0;

var score = 0;
var counter;

var timer = document.getElementById('timer');

startDiv.onclick = start;


function start() {
    // playJeopardy();
    counter = 76;
    timerSpan.classList.remove('hide');
    timer.classList.remove('hide');
    startDiv.classList.add('hide');
    gameDiv.classList.remove('hide');
    displayQuestion();
    countDown();
}

function quizEnd(){
    gameDiv.classList.add('hide');
    yourScore.classList.remove('hide');
    //localStorage.setItem('score', score);
    displayScore.innerHTML = score + counter;
    }


function countDown(){
    counter = counter - 1 ;
    if ( counter < 76) { 
        timer.innerHTML = counter;

    }
    if ( counter < 1){
        window.clearInterval(update);
   quizEnd(); 
}
}
 update = setInterval('countDown()', 1000);


function displayQuestion() {

    questionTitle.innerText = questions[qIndex].title
    for (var i in choices) {
        choices[i].innerText = questions[qIndex].choices[i]
     }
    
     }
     
    function viewhighscore(){
        window.location.replace('./highscores.html');
     }

submit.onclick = submitScore;

function submitScore(){
    var initials = document.getElementById('initials');
   
     
    localStorage.setItem(initials.value, score);
     console.log(localStorage);
     //var highscore = localStorage.getItem('score');
     viewhighscore();
}

   

    

function checkAnswer() {
  if ( this.innerText == questions[qIndex].answer){
    playairHorn()
     document.getElementById('correct').innerHTML = 'correct';
    setTimeout(function(){ document.getElementById('correct').innerHTML = ''}, 1000);
      score +=10;
      console.log(score);
  }else{
    playSadTrombone()
    document.getElementById('wrong').innerHTML = 'wrong';
    setTimeout(function(){ document.getElementById('wrong').innerHTML = ''}, 1000);
     counter -=15;
     
  }





    qIndex++;
    
    if (qIndex < questions.length){
        displayQuestion();
    
    }else{
        quizEnd();
        timerSpan.classList.add('hide');
        timer.classList.add('hide');


    }
    
}
