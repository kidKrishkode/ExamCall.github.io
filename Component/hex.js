let modequestion = 0;
let currentQuestionNumber = 0;
let exam;
let solveList = [];
function Question(text, choices, answer){
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice){
  return this.answer === choice;
}
function Exam(questions){
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Exam.prototype.getQuestionIndex = function(){
  return this.questions[this.questionIndex];
}
Exam.prototype.guess = function(answer){
  if(this.getQuestionIndex().isCorrectAnswer(answer)){
    this.score++;
  }
  this.questionIndex++;
}
Exam.prototype.isEnded = function(){
  return this.questionIndex === this.questions.length;
}
function populate(number){
  // if
  //   showScores();
  // }else{
    exam.getNewQuestion(number-1);
  // }
};
Exam.prototype.getNewQuestion = function(number){
  var element = document.querySelector(".question");
  let QuestionIndex = exam.questions[number];
  element.innerHTML = QuestionIndex.text;
  printOptionSheet(QuestionIndex.choices,number);
  solveList[number][1] = exam.questions[number]; 
  exam.showProgress(number);
  exam.questionTimerStart();
  questionList();
}
function guess(id){
  let answer = document.getElementById("option"+id).value;
  if(solveList.length>0 && exam.questions.length>0){
    solveList[currentQuestionNumber-1][2] = answer;
  }else{
    for(let i=0; i<exam.questions.length; i++){
      solveList[i] = [i+1,null,null];
    }
    guess(id);
  }
  questionList();
}
Exam.prototype.showProgress = function(number){
  currentQuestionNumber = number+1;
  var element = document.getElementById("qno");
  element.innerHTML = currentQuestionNumber;
  if(number==exam.questions.length-1){
    document.getElementById("finish").style.display = "block";
  }else{
    document.getElementById("finish").style.display = "none";
  }
};
Exam.prototype.showScores = function(){
  var gameOverHTML = "<h1 onclick='anssheet();'>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + exam.score + "</h2> <br><h4 id='puma'>Totale question: " + exam.questions.length + "<br>Right answer: " + exam.score + "<br>Your parsentage: " + exam.score/exam.questions.length*100 + "%</h4><br><p id='parform'>If your scores > 75% <br>then you are able,<br> If your scores < 75%<br> then you are not able<br>but <b><i>Never Giveup</i></b></p><br><button id='refresh'value='restart'onclick='restart();'>Restart</button>";
  var element = document.getElementById("exam");
  element.innerHTML = gameOverHTML;
  alert("Congratulation we calculate your scores..");
};
function randomPaperChoose(){
  let k = Math.floor((Math.random()*(4-(1))+(1)));
  if(k == 1){
    exam = new Exam(questions3);
    modequestion = 1;
  }else if(k == 2){
    exam = new Exam(questions2);
    modequestion = 2;
  }else{
    exam = new Exam(questions3);
    modequestion = 3;
  }
  for(let i=0; i<exam.questions.length; i++){
    solveList[i] = [i+1,null,null];
  }
}
// populate(); //it is responsible for strat
function anssheet(){
	exambox = document.getElementById("exam");
  if(modequestion == 1){
    Exam.prototype.
	  exambox.innerHTML = "<h1 onclick='showScores();'> WHITE LOTUS Exam<br>Answer Sheet</h1><br><p class='anssheet'>1)b, 2)c, 3)b, 4)a, 5)c, 6)a, 7)c, 8)b, 9)a, 10)b, 11)d, 12)a, 13)b, 14)c, 15)c, 16)b, 17)b, 18)b, 19)b, 20)c, 21)b, 22)d, 23)b, 24)c, 25)c, 26)a, 27)a, 28)c, 29)a, 30)c, 31)d, 32)c, 33)c, 34)b, 35)a, 36)b, 37)c, 38)b, 39)c, 40)c, 41)b, 42)a, 43)c, 44)d, 45)a, 46)a, 47)d, 48)c, 49)b, 50)c</p>";
  }else if(modequestion == 2){
    Exam.prototype.
	  exambox.innerHTML = "<h1 onclick='showScores();'> WHITE LOTUS Exam<br>Answer Sheet</h1><br><p class='anssheet'>1)b, 2)c, 3)b, 4)a, 5)c, 6)a, 7)c, 8)b, 9)a, 10)b, 11)d, 12)a, 13)b, 14)c, 15)c, 16)b, 17)b, 18)b, 19)b, 20)c, 21)b, 22)d, 23)b, 24)c, 25)c, 26)a, 27)a, 28)c, 29)a, 30)c, 31)d, 32)c, 33)c, 34)b, 35)a, 36)b, 37)c, 38)b, 39)c, 40)c, 41)b, 42)a, 43)c, 44)d, 45)a, 46)a, 47)d, 48)c, 49)b, 50)c</p>";
  }else{
    Exam.prototype.
    exambox.innerHTML = "<h1 onclick='showScores();'> WHITE LOTUS Exam<br>Answer Sheet</h1><br><p class='anssheet'>1)b, 2)c, 3)b, 4)a, 5)c, 6)a, 7)c, 8)b, 9)a, 10)b, 11)d, 12)a, 13)b, 14)c, 15)c, 16)b, 17)b, 18)b, 19)b, 20)c, 21)b, 22)d, 23)b, 24)c, 25)c, 26)a, 27)a, 28)c, 29)a, 30)c, 31)d, 32)c, 33)c, 34)b, 35)a, 36)b, 37)c, 38)b, 39)c, 40)c, 41)b, 42)a, 43)c, 44)d, 45)a, 46)a, 47)d, 48)c, 49)b, 50)c</p>";
  }
}
function restart(){
	exambox = document.getElementById("exam");
	exambox.innerHTML = "<h1 onclick='anssheet();'> WHITE LOTUS Exam<br>(Sub- Green Enviorment) </h1><hr style='margin-bottom: 20px'><p id='question'><span class='aler'>System fail, please start manually!</span><br>This device not able to load exam.vul.js file</p><div class='button'><button id='bt0'> <span id='choice0'> </span> </button><button id='bt1'> <span id='choice1'> </span> </button><button id='bt2'> <span id='choice2'> </span> </button><button id='bt3'> <span id='choice3'> </span> </button></div><hr style='margin-top: 50px'><footer><p id='progress'> Question 0 of 00</p></footer>";
	requestion();
}
function requestion(){
	var element = document.getElementById("question");
  element.innerHTML = exam.getQuestionIndex().text;
  var choices = exam.getQuestionIndex().choices;
  for(var i = 0; i < choices.length; i++){
    document.getElementById("choice" + i).innerHTML = choices[i];
    guess("bt" + i, choices[i]);
  }
  showProgress();
}
function reorderSection(){
  if(currentPaper.section[0][0]!=0){
    for(let i=0; i<currentPaper.section.length-1; i++){
      if(currentPaper.section[i][0] > currentPaper.section[i+1][0]){
        temp = currentPaper.section[i];
        currentPaper.section[i] = currentPaper.section[i+1];
        currentPaper.section[i+1] = temp;
      }
    }
    if(currentPaper.section[currentPaper.section.length-1][0] < exam.questions.length){
      currentPaper.section.length += 1;
      currentPaper.section[currentPaper.section.length-1] = [(exam.questions.length-currentPaper.section[currentPaper.section.length-2][0])+currentPaper.section[currentPaper.section.length-2][0],exam.examTimeRemainInSecond(exam.examTimeRemain()),Math.floor(exam.examMarksRemain()/(exam.questions.length-currentPaper.section[currentPaper.section.length-2][0])),0];
    }
  }else{
    currentPaper.section[0][0] = exam.questions.length;

  }
  if(exam.examMarksRemain()<0 || (currentPaper.section[0][2]>currentPaper.fullmarks)){
    showAlert("Check the marks distribution, it should be over marks given..");
  }
  displayCategores();
}
Exam.prototype.examTimeRange = function(){
  temp = (new Date().getMonth()+1)+' '+new Date().getDate()+' '+new Date().getFullYear();
  let hours = new Date(`${temp}, ${currentPaper.time}`).getHours();
  let minutes = new Date(`${temp}, ${currentPaper.time}`).getMinutes();
  let second = new Date(`${temp}, ${currentPaper.time}`).getSeconds();
  return [hours, minutes, second];
}
Exam.prototype.exameTimeOccupied = function(){
  let occupiedTime=0;
  for(let i=0; i<currentPaper.section.length-1; i++){
    occupiedTime += (currentPaper.section[i][0] * currentPaper.section[i][1]);
  }
  let hours = Math.floor(occupiedTime/3600);
  let remainingSeconds = occupiedTime % 3600;
  let minutes = Math.floor(remainingSeconds/60);
  remainingSeconds = remainingSeconds % 60;
  return [hours, minutes, remainingSeconds];
}
Exam.prototype.examTimeRemain = function(){
  let bigTime = exam.examTimeRange();
  let smallTime = exam.exameTimeOccupied();
  return [bigTime[0]-smallTime[0], bigTime[1]-smallTime[1], bigTime[2]-smallTime[2]];
}
Exam.prototype.examTimeRemainInSecond = function(time){
  return time[0]*3600 + time[1]*60 + time[2];
}
Exam.prototype.examMarksOccupied = function(){
  let marks=0;
  for(let i=0; i<currentPaper.section.length-1; i++){
    if(i==0){
      marks += currentPaper.section[i][0]*currentPaper.section[i][2];
    }else{
      marks += (currentPaper.section[i][0]-currentPaper.section[i-1][0])*currentPaper.section[i][2];
    }
  }
  return marks;
}
Exam.prototype.examMarksRemain = function(){
  return currentPaper.fullmarks - exam.examMarksOccupied();
}
function prevQuestion(){
  if(currentQuestionNumber<=1){
    populate(1);
    showAlert("You are stand in the first question of this paper!");
  }else{
    populate(currentQuestionNumber-1);
    if(currentCategory-1>=1 && !(currentQuestionNumber>currentPaper.section[currentCategory-2][0])){
      swapSection(currentCategory-1);
    }
  }
}
function nextQuestion(){
  if(currentQuestionNumber>=exam.questions.length){
    populate(exam.questions.length);
    showAlert("You are stand in the last question of this paper!");
  }else{
    populate(currentQuestionNumber+1);
    if(currentQuestionNumber>currentPaper.section[currentCategory-1][0]&&currentCategory!=currentPaper.section.length){
      swapSection(currentCategory+1);
    }
  }
}
Exam.prototype.examTimerStart = function(){
  let time = exam.examTimeRange();
  let timeInSec = ((time[0]*3600)+(time[1]*60)+time[2])*1000;
  const interVal = setInterval(() => {
    document.getElementById("timer").textContent = `Time Left: ${time[0]<10?'0'+time[0]:time[0]}:${time[1]<10?'0'+time[1]:time[1]}:${time[2]<10?'0'+time[2]:time[2]}`;
    time[2]--;
    if(time[2]==-1){
      time[2]=59;
      time[1]--;
      if(time[1]==-1){
        time[0]--;
      }
    }
  },1000);
  setTimeout(()=>{
    clearInterval(interVal);
    showAlert("Times up, Exam is end now, Your result appear soon!");
  },timeInSec+1000);
}
Exam.prototype.questionTimerStart = function(){
  clearInterval(interVal);
  let time = currentPaper.section[currentCategory][1];
  interVal = setInterval(()=>{
    document.getElementById("tmk").textContent = `00:${time<10?'0'+time:time}`;
    time--;
  },1000);
  setTimeout(()=>{
    if(time<1){
      clearInterval(interVal);
      showAlert("Question times up");
    }
  },(time*1000));
}