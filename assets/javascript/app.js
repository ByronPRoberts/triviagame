var questionNum;
var answer;
var userInput;
var timer;
var score;
var wrong;
var unanswered;

var triviaArray = [{
    "questionPrompt": "Who won the first ever SuperBowl?",
    "answers": ["Kansas City Chiefs","New York Giants","Green Bay Packers","Dallas Cowboys"],
    "correctAnswer": "2"
    
},{
    "questionPrompt": "Who holds the all time NFL rushing record?",
        "answers":[ "OJ Simpson",
        "LaDanian Tomlinson",
        "Marcus Allen",
        "Emmit Smith"],
        "correctAnswer": "3"
},{
    "questionPrompt": "What Quarterback has played in the most SuperBowls?",
        "answers": ["Tom Brady",
        "Joe Montana",
        "Troy Aikman",
        "Bart Starr"],
        "correctAnswer": "0"
},{
    "questionPrompt": "Who has the most recieving yards all time?",
        "answers":[ "Steve Largent",
        "Jerry Rice",
        "Julio Jones",
        "Don Hutson"],
        "correctAnswer": "1"
},{
    "questionPrompt": "Who has the most wins as a head coach in the NFL?",
        "answers":[ "George Halas",
        "Curly Lambeau",
        "Tom Landry",
        "Don Shula"],
        "correctAnswer": "3"
},{
    "questionPrompt": "Who was the last non-quarterback to win NFL MVP?",
        "answers": ["Adrian Peterson",
        "JJ Watt",
        "Shaun Alexander",
        "LaDainian Tomlinson"],
        "correctAnswer": "0"
},{
    "questionPrompt": "Who holds the best rookie passer rating in NFL history?",
        "answers": ["Dak Prescott",
        "Tom Brady",
        "Dan Marino",
        "Robert Griffin III"],
        "correctAnswer": "0"
},{
    "questionPrompt": "Which NFL team features a helmet decal only on one side of the helmet?",
        "answers": ["Houston Texans",
        "Oakland Raiders",
        "Pittsburgh Steelers",
        "New York Jets"],
        "correctAnswer": "2"
},{
    "questionPrompt": "What is the oldest NFL franchise in continuous operation with the same name in the same location?",
        "answers": ["Cleveland Browns",
        "New York Giants",
        "Green Bay Packers",
        "Chicago Bears"],
        "correctAnswer": "2"
},{
    "questionPrompt": "What NFL team scored the most points in a single SuperBowl?",
        "answers": ["Dallas Cowboys",
        "New England Patriots",
        "Denver Broncos",
        "San Francisco 49ers"],
        "correctAnswer": "3"
},

]
console.log(triviaArray.length);
console.log(triviaArray[0]);
// console.log(JSON.stringify(triviaArray));

function newGame(){
    questionNum=0;
    score=0;
    wrong=0;
    unanswered=0;
    newQuestion();
    console.log("NewGame")

};

function newQuestion(){
    answered = false;
    var startDiv=$("#answerList");
    $("#number").html("Question"+" "+(questionNum+1))
    startDiv.html("<h4>"+triviaArray[questionNum].questionPrompt+"<h4>");
    

    for(var i=0;i<4 ; i++){
        var btn =$("<button>");
        btn.addClass("btn-primary question choice"+i);
        btn.attr({"data-index":i});
        btn.text(triviaArray[questionNum].answers[i]);
        $("#answerList").append(btn);

    }
    setTimer();
    runTimer();
   
    $("#answerList").on('click',function(){
        
        userInput=$(this).data("data-index")
        
        console.log(userInput);
        answered = true;
        answerCheck();
    })
    runTimer();
};

function setTimer(){
    seconds=10;
    $("#time").html('<h1>'+seconds+'<h1>');
    time = setInterval(setTimer, 1000);
};
function runTimer(){
    if(answered == false){
        seconds--;
        $("#time").html('<h1>'+seconds+'<h1')
    }
     else if(seconds < 1){
        clearInterval(time);
        // newQuestion();
        unanswered++;
        questionNum++;
        console.log(unanswered);
    }
};
function answerCheck(){
    var correctClick = triviaArray[questionNum].answers[triviaArray[questionNum].correctAnswer];
    var correctClickIndex = triviaArray[questionNum].correctAnswer;
    console.log(correctClick)
    console.log(correctClickIndex)
    if((userInput == correctClickIndex) &&(answered == true)){
        score++;
        console.log("correct"+score);
        questionNum++;
        newQuestion();
    }
    else if ((userInput !== correctClickIndex) && (answered == true)) {
        wrong++;
        console.log("wrong"+wrong);
        questionNum++;
        newQuestion();
    }
    // else{
    //     unanswered++;
    //     answered = true;
        
        
    // }
    if(questionNum ==(triviaArray.length)-1){
        // show ending screen with score, wrong, and unanswered
        // hide the <startDiv and the rest of the page
    }
 }

$(document).ready(function(){
    $("#startButton").on("click",function(){
        $(this).hide();
        newGame();
    })
});