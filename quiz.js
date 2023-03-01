//Question bank
var questionBank= [
    {
        question : 'A large box contains 18 small boxes and each small box contains 25 chocolate bars. How many chocolate bars are in the large box?',
        option : ['450 chocolate bars','25 chocolate bars','18 chocolate bars','350 chocolate bars'],
        answer : '450 chocolate bars'
    },
    {
        question : 'It takes John 25 minutes to walk to the car park and 45 to drive to work. At what time should he get out of the house in order to get to work at 9:00 a.m.?',
        option : ['7:30 a.m.','7:50 a.m.','7:50 p.m.','7:30 p.m.'],
        answer : '7:50 a.m.'
    },
    {
        question : 'Kim can walk 4 kilometers in one hour. How long does it take Kim to walk 18 kilometers?',
        option : ['3 hours and 30 minutes','3 hours and 20 minutes','4 hours and 30 minutes','All of the above'],
        answer : '4 hours and 30 minutes'
    },
    {
        question : 'A factory produced 2300 TV sets in its first year of production. 4500 sets were produced in its second year and 500 more sets were produced in its third year than in its second year. How many TV sets were produced in three years?',
        option : ['10,800 TV sets','11,800 TV sets','10,200 TV sets','11,400 TV sets'],
        answer : '11,800 TV sets'
    },
    {
        question : 'Linda bought 3 notebooks at $1.20 each; a box of pencils at $1.50 and a box of pens at $1.70. How much did Linda spend?',
        option : ['$6.40','$3.40','$3.20','$6.80'],
        answer : '$6.80'
    },
    {
        question : '8 boys shared 2/5 of a cake equally. What fraction of the cake did each boy get?',
        option : ['1/20','2/20','1/25','2/25'],
        answer : '1/20'
    },
    {
        question : 'Which is greater 5 1/7 or 3 1/7 ?',
        option : ['5 1/7','3 1/7','They are equal','None of the above'],
        answer : '5 1/7'
    },
    {
        question : 'Find the difference between the sum and product of 2 1/4 and 1 4/5.',
        option : ['1','0','2','None of the above'],
        answer : '0'
    },
    {
        question : 'The cost of comic is $57 1/2 and that of color book is $25 1/4. Which costs more and by how much?',
        option : ['Color book cost more, $32 1/4','Comic cost more, $30 1/4','Comic cost more, $32 1/4','Color book cost more, $30 1/4'],
        answer : 'Comic cost more, $32 1/4'
    },
    {
        question : 'Kate has $630. She wants to buy a bag that costs 5/9 of the amount she has. What should be the cost of the bag?',
        option : ['$300','$250','$200','$350'],
        answer : '$350'
    },
    {
        question : 'The sum of (-12) and (5) is',
        option : ['6','8','-7','7'],
        answer : '-7'
    },
    {
        question : 'The perimeter of the equilateral triangle is 18 cm. Find the length of each',
        option : ['5 cm','4 cm','6 cm','3 cm'],
        answer : '6 cm'
    },
    {
        question : 'A perimeter of a square is 20 inches.Find the side length of the square.',
        option : ['10 inch','4 inch','5 inch','3 inch'],
        answer : '5 inch'
    },
    {
        question : 'A triangle has sides of lengths 19, 3 and 18 meters. What type of triangle is it ?',
        option : ['Right','Equilateral','Scalene','None of the above'],
        answer : 'Scalene'
    },
    {
        question : 'The measure of an angle is 77°. What is the measure of a supplementary angle ?',
        option : ['105°','55°','103°','50°'],
        answer : '103°'
    },
]

var question= document.getElementById
('question');
var quizContainer= document.getElementById
('quiz-container');
var scorecard= document.getElementById
('scorecard');
var option0= document.getElementById
('option0');
var option1= document.getElementById
('option1');
var option2= document.getElementById
('option2');
var option3= document.getElementById
('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '
    +questionBank[i].question;
    option0.innerHTML= questionBank[i].option
    [0];
    option1.innerHTML= questionBank[i].option
    [1];
    option2.innerHTML= questionBank[i].option
    [2];
    option3.innerHTML= questionBank[i].option
    [3];
    stat.innerHTML= "Question"+' '+(i+1)+' '
    +'of'+' '+questionBank.length;
}

//function to calculate scores
function calScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.
        background=  'limegreen';
    }
    else{
        document.getElementById(e.id).style.
        background=  'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function  nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ 
        questionBank.length
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById
    ('answerBank');
    var answers= document.getElementById
    ('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li')
        ;
        list.innerHTML= questionBank[a].
        answer;
        answers.appendChild(list);
    }
}


displayQuestion();