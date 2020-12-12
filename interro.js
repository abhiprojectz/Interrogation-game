

var quiz = [];
quiz[0] = new Question("What is your name?", "Ayush", "vicki", "mehul" , "kavya");
quiz[1] = new Question("How old are you?", "27", "73", "25", "16");
quiz[2] = new Question("Where do you live?", "India", "china", "France" ,"russia");
quiz[3] = new Question("Which weapon you used?", "AK 47", "Knife", "Grenade", "nothing");
quiz[4] = new Question("Where were you born?", "Brazil", "England", "pakistan", "USA");
quiz[5] = new Question("How many did you killed?", "75", "28", "0" ,"5");
quiz[6] = new Question("How many sister do you have?", "6", "2", "10",  "9");
quiz[7] = new Question("why did you clicked this code?" ,"i  don't know"  , "just to see" , "to like it", "why i tell you");
quiz[8] = new Question("What is the name of your best friend?" , "Rahul", "rishi" ,"madhavi" , "i don't want to tell");
quiz[9] = new Question("Do you accept that you killed innocent?" , "yes", "No" , "probably", "i cant tell"); 
quiz[10] = new Question("Where were you at the time of incident?" , "at home", "at my friends home", "no-where" , "none of your business");
quiz[11] = new Question("Did you visited the victims house yesturday?" ,"yes" , "no" , "i forgot", "went-outstation");
quiz[12] = new Question("Which is your native place?"  ,"India" , "japan" , "USA" , "Mars");
quiz[13] = new Question("Which is your favorite fruit?", "apple" ,"banana" , "orange" ,"grapes");
quiz[14] = new Question("where did you hide the key?" ,"under the bed" , "inside mouth" , "inside a box" , "i did not hided");
quiz[15] = new Question("Do you like this game?","yes" , "No" , "Probably no" , "probably yes");
quiz[16] = new Question("What was your motive?" ,"To kill the general", "To win the war","Not specific", "To escape from there");
quiz[17] = new Question("how much do you eat? ","little","very much","can't tell","i think 100%");
quiz[18] = new Question("Do you accept that you killed 25 people yesturday?","yes","no","yeah i killed 36 people","Data is incorrect")
quiz[19] = new Question("A number multiplied by itself?","what you mean?","2","number doesnt exist","7")
quiz[20] = new Question("What is 2+2?","2","3","4","6")
quiz[21] = new Question("Pizza or banana","pizza","banana","both","pizza without pizza")
quiz[22] = new Question("What will you choose?","apple","mango","banana","pineapple")
quiz[23] = new Question("why did you kill your best friend?","to escape from him","he turned to be my enemy","its my choice","to save my time")
quiz[24] = new Question("what will you not choose?", "mango","apple", "papaya", 'pineapple")

var userans = [];
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 

  renew();
});

function Question(question,answer0,answer1,answer2,answer3) {
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
};

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function renew() { 
  
  
    var randomNumber = Math.floor(Math.random()*quiz.length);
    randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.answer0, randomQuestion.answer1, randomQuestion.answer2,randomQuestion.answer3];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];
}


function answerAC() {
resetTimer();

  var answerA = document.getElementById("answerA").value;
  
  var answerC = document.getElementById("answerC").value;
  
  var answerB = document.getElementById("answerC").value;
  
  
  var answerD = document.getElementById("answerD").value;
  
  
  
  
  var ques = document.getElementById("question").textContent;
  
  var  res = ques + answerA;
      
  if (userans.includes(res)) {
  currentScore++;
  $("#score").html("Score:  "+ currentScore);
  
  renew();
  
  } else {
  
  var secs = ques + answerB;
  var tans = ques + answerC;
  var coss = ques + answerD;
  
  if (userans.includes(secs)) {
  
  alertia("Aww, You lied us! ");
  
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerB ;
  
result();
  }else {
 if (userans.includes(tans)) {
 
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerC ;
  result();
 } else {
     
     if (userans.includes(coss)) { 
     
         alertia("Aww, You lied us! "); 
         document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerD ;
  result();
 } else {userans.push(res);
 currentScore++;
 $("#score").html("Score:  "+ currentScore);
  
 renew();
 }
 }
        }
}
 
 
 
}



function answerBC() {
resetTimer();
        var answerB = document.getElementById("answerB").value;
        var ques = document.getElementById("question").textContent;
  var answerC = document.getElementById("answerC").value;
  var answerD = document.getElementById("answerD").value;
  
  
  
  var answerA = document.getElementById("answerA").value;
  
  var  res = ques + answerB;
      
  if (userans.includes(res)) {
  currentScore++;
  $("#score").html("Score:  "+ currentScore);
  
  renew();
  } else {
  
  var secs = ques + answerA;
  var tans = ques + answerC;
  var coss = ques + answerD;
  
  if (userans.includes(secs)) {
  
  alertia("Aww, You lied us! ");
  
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerA ;
  result();
  }else {
 if (userans.includes(tans)) {
 
     alertia("Aww, You lied us! ");
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerC ;
   result();
 } else {
     
     if (userans.includes(coss)) {
     
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerD ;
  result();
 } else {
userans.push(res);
currentScore++;
$("#score").html("Score:  "+ currentScore);
  
 renew();
 }
          
 }
        }
}

}





function answerCC() {
resetTimer();
  var answerC = document.getElementById("answerC").value;
  var ques = document.getElementById("question").textContent;
  var answerA = document.getElementById("answerA").value;
  var answerB = document.getElementById("answerB").value;
  
  var answerD = document.getElementById("answerD").value;
  
  
  var  res = ques + answerC;
      
  if (userans.includes(res)) {
  currentScore++;
  $("#score").html("Score:  "+ currentScore);
  
  renew();
  } else {
  
  var secs = ques + answerB;
  var tans = ques + answerA;
  var coss = ques + answerD; 
  if (userans.includes(secs)) {
  alertia("Aww, You lied us! ");
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerB ;
  result();
  }else {
 if (userans.includes(tans)) {
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerA ;
  result();
 } else {
     if (userans.includes(coss)) {
         alertia("Aww, You lied us! "); 
         document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerD ;
  result();
 } else {
userans.push(res);
currentScore++;
$("#score").html("Score:  "+ currentScore);
  
 renew();
 }
 
 }
        }
}
}


function answerDC() {
resetTimer();
var answerB = document.getElementById("answerB").value;
        var ques = document.getElementById("question").textContent;
  var answerC = document.getElementById("answerC").value;
  var answerA = document.getElementById("answerA").value;
  
  
  
  var answerD = document.getElementById("answerD").value;
  
  var  res = ques + answerD;
      
if (userans.includes(res)) {
currentScore++;
$("#score").html("Score:  "+ currentScore);
  
  renew();
  } else {
  
  var secs = ques + answerB;
  var tans = ques + answerC;
 var coss = ques + answerA;
 
  if (userans.includes(secs)) {
  alertia("Aww, You lied us! ");
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerB ;
  result();
  }else {
 if (userans.includes(tans)) {
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerC ;
  result();
 } else {
     if (userans.includes(coss)) {
         alertia("Aww, You lied us! "); 
         document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerA ;
  result();
 } else {
     userans.push(res);
     currentScore++;
     $("#score").html("Score:  "+ currentScore);
  
 renew();
 }
 }
        }
}
 
 }





function result() {
clear();
  document.getElementById("score").innerHTML = "SCORE: " + currentScore;

 
document.getElementById("quiz").style.display = "none";
document.getElementById("show").style.display = "block";


}


function over() {
   clear(); 
   alertia("Don't forget to share it with your Freinds!")
   $("#score").html(" You took to long to answer , it seems you were hiding something! " + "SCORE: " + currentScore)

    $("#info").css({"display":"none"});
     $("#quiz").css({"display":"none"});
     $("#show").css({"display":"block"})
    
}

