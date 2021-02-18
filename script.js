i = 0;
var main = 0;

//Preloader Features added
var Preloader = document.getElementById("loader");
function myFunction() {

  Preloader.style.display = "none";
}  



//Clock Features Add
function realtimeClock(){

     var rtClock = new Date();
     var hours = rtClock.getHours();
     var minutes = rtClock.getMinutes();
     var seconds = rtClock.getSeconds();

     var amPm = (hours<12) ? "AM":"PM";

     hours = (hours>12) ? hours -12 :hours;

     hours = ("0" + hours).slice(-2);
     minutes = ("0"+minutes).slice(-2);
     seconds = ("0"+seconds).slice(-2);

    //  Display the Clock
    document.getElementById('date').innerHTML = hours + " : "+ minutes + " : "+seconds + " "+amPm;
    
    var arr1 = ["january","Febuaray","March","April","May","June","July","August","September","October","November","December"];
    var arr2 = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

    var date = rtClock.getDate();
    var dayname = rtClock.getDay();
    var month = rtClock.getMonth();
    var Fullyear  = rtClock.getFullYear();

    document.getElementById('time').innerHTML =  arr2[dayname]+","+date+" "+arr1[month]+" "+Fullyear;

    
    var t = setTimeout(realtimeClock,500);
    

}

//Change Mode Added
function change(){
   
   
    if(i==1)
    {
    let a = document.getElementById('ChangeMode');
    a.style.backgroundColor = "white";
    a.style.color = "black";
    a.innerText = "White Mode";
    let b = document.getElementById('inner-div1');
    b.style.backgroundColor = "black";
    b.style.color = "white";
    let c = document.getElementById('nav1');
    c.style.backgroundColor = "black";
    c.style.color = "white";
    let d = document.getElementById('sidebar1');
    d.style.backgroundColor = "black";
    d.style.color = "white";
    let e = document.getElementById('icon');
    e.style.color = "white";
    i = 0;
    }
    else{
        let a = document.getElementById('ChangeMode');
        a.style.backgroundColor = "black";
        a.style.color = "white";
        a.innerText = "Dark Mode";
        let b = document.getElementById('inner-div1');
        b.style.backgroundColor = "white";
        b.style.color = "black";
        let c = document.getElementById('nav1');
        c.style.backgroundColor = "white";
        c.style.color = "black";
        let d = document.getElementById('sidebar1');
        d.style.backgroundColor = "white";
        d.style.color = "black";
        let e = document.getElementById('icon');
        e.style.color = "black";
        i = 1;
    }
}

//Active class Add
var header = document.getElementById('sidebar1');
var btns = header.getElementsByClassName("btn1");
for(var i =0;i<btns.length;i++)
{
    btns[i].addEventListener("click",function(){
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(" active"," ");
      this.className += " active";



    });
}


// var Name2 = window.prompt("Enter Your Full Name");






//DataBase For Javascript
const quizDb = [
    {
        question: "Q1: What is the full form of Js?",
        a:"Javascript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JorderShoes",
        ans:"ans1"
    },
    {
       question: "Q2:Which of the following is not Javascript Data Type?",
       a:"Undefined",
       b:"Number",
       c:"Boolean",
       d:"Float",
       ans:"ans4"
    },
    {
        question: "Q3:Which Company developed Javascript?",
        a:"NetScape",
        b:"Bell Labs",
        c:"Sun MicroSystems",
        d:"IBM",
        ans:"ans1"
        
    },
    {
       question:"Q4:Javascript is designed for the Following Purpose?",
       a:"to Style HTML Pages",
       b:"To Execute Queries related to databases on a server",
       c:"to add interactivity to html pages",
       d:"All of the Above",
       ans:"ans4"
    }





];

//Database For Python
const quizDb2 = [
    {
        question: "Q1: What is the maximum possible length of an identifier?",
        a:"16",
        b:"32",
        c:"64",
        d:"none of these above",
        ans:"ans4"
    },
    {
       question: "Q2:Who developed the Python Language?",
       a:"Zim Den",
       b:"Guido Van Rossum",
       c:"Nilene Stom",
       d:"Wick Van Rossum",
       ans:"ans2"
    },
    {
        question: "Q3: In which Year was the Python Language Developed?",
        a:"1995",
        b:"1972",
        c:"1981",
        d:"1989",
        ans:"ans4"
        
    },
    {
       question:"Q4:Which of the following is not a keyword in a python?",
       a:"val",
       b:"raise",
       c:"try",
       d:"with",
       ans:"ans1"
    }





];

//Database For C++
const quizDb3 = [
    {
        question: "Q1: Which one is not a correct variable type in C++??",
        a:"Float",
        b:"Real",
        c:"int",
        d:"double",
        ans:"ans2"
    },
    {
       question: "Q2:Which operation is used as Logical 'AND'?",
       a:"Operator-&",
       b:"Operator-||",
       c:"Operator-&&",
       d:"Operator +",
       ans:"ans3"
    },
    {
        question: "Q3: An expression A.B in C++ means ____?",
        a:"A is member of object B",
        b:"B is member of Object A",
        c:"Product of A and B",
        d:"None of these",
        ans:"ans2"
        
    },
    {
       question:"Q4:A C++ code line ends with ___?",
       a:"A Semicolon (;)",
       b:"A Fullstop(.)",
       c:"A Comma (,)",
       d:"A Slash (/)",
       ans:"ans1"
    }

];



//Database For C
const quizDb4 = [
    {
        question: "Q1: C Programming was created at ______ by Dennis Ritchie?",
        a:"L&T Laboratory",
        b:"MIT University",
        c:"Haward University",
        d:"AT&T Bell Laboratory",
        ans:"ans4"
    },
    {
       question: "Q2:Many features of C were derived from an earlier language called _____?",
       a:"FORTRAN",
       b:"BASIC",
       c:"B",
       d:"PASCAL",
       ans:"ans3"
    },
    {
        question: "Q3: Which Committee standardize C Programming Language ?",
        a:"ANSI",
        b:"W3C",
        c:"TRAI",
        d:"None of these",
        ans:"ans1"
        
    },
    {
       question:"Q4:What feature makes C++ so powerful?",
       a:"Easy implementation",
       b:"Reusing the old code",
       c:"Easy memory management",
       d:"All of the above",
       ans:"ans4"
    }

];


//Databse For Java
const quizDb5 = [
    {
        question: "Q1: Java is a Language?",
        a:"weakly typed",
        b:"Strongly typed",
        c:"moderate typed",
        d:"None of these",
        ans:"ans2"
    },
    {
       question: "Q2: How many Primitive data type are there in java?",
       a:"6",
       b:"7",
       c:"8",
       d:"9",
       ans:"ans3"
    },
    {
        question: "Q3: In Java the word true is?",
        a:"A Java Keyword",
        b:"A Boolean literal",
        c:"Same as Value 1",
        d:"Same as Value 0",
        ans:"ans2"
        
    },
    {
       question:"Q4: To String Method is defined in?",
       a:"Java.lang.String",
       b:"java.lang.Object",
       c:"java.lang.util",
       d:"None of these",
       ans:"ans2"
    }

];

//Databases for NetWorking
const quizDb6 = [
    {
        question: "Q1: Computer Network is?",
        a:"Collection of hardware Components and Computers",
        b:"Interconnected by Communication channels",
        c:"Sharing of reseources and Information",
        d:"All of Above",
        ans:"ans4"
    },
    {
       question: "Q2: What is Firewall in Computer Network?",
       a:"The Phycially Boundary of Network",
       b:"An Operating System of Computer Network",
       c:"An System Designed to Prevent Unauthorized access",
       d:"A web browsing Software",
       ans:"ans3"
    },
    {
        question: "Q3: How Many Layers does OSI Reference Model has?",
        a:"4",
        b:"5",
        c:"6",
        d:"7",
        ans:"ans4"
        
    },
    {
       question:"Q4: IPV4 Address is?",
       a:"8 bit",
       b:"16 bit",
       c:"32 bit",
       d:"64 bit",
       ans:"ans3"
    }

];

//Database For Html
const quizDb7 = [
    {
        question: "Q1: Correct Html Tag Of Largest Heading is?",
        a:"<h6>",
        b:"<heading>",
        c:"<h1>",
        d:"<head>",
        ans:"ans3"
    },
    {
       question: "Q2:Which of the following Encoding An Xml Parser Assumes?",
       a:"UTF-16",
       b:"UTF-32",
       c:"UTF-8",
       d:"Both UTF-8 and UTF-32",
       ans:"ans4"
    },
    {
        question: "Q3: HTML is What Type of Language?",
        a:"Scripting Language",
        b:"Markup Language",
        c:"Programming Language",
        d:"Network Protocol",
        ans:"ans2"
        
    },
    {
       question:"Q4:What is the Correct Html Tag for Inserting A line Break?",
       a:"<break/>",
       b:"<br/>",
       c:"<lb/>",
       d:"<nbsp>",
       ans:"ans2"
    }

];


//Database For Css
const quizDb8 = [
    {
        question: "Q1:If we want define style for an unique element, then which css selector will we use?",
        a:"id",
        b:"text",
        c:"class",
        d:"name",
        ans:"ans1"
    },
    {
       question: "Q2:If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
       a:"margin",
       b:"clear",
       c:"Float",
       d:"padding",
       ans:"ans2"
    },
    {
        question: "Q3: How can we write comment along with CSS code ?",
        a:"/* a comment */",
        b:"// a comment //",
        c:"/ a comment /",
        d:"<' a comment'>",
        ans:"ans1"
        
    },
    {
       question:"Q4: Which CSS property is used to control the text size of an element ?",
       a:"font-style",
       b:"text-size",
       c:"font-size",
       d:"text-style",
       ans:"ans3"
    }

];


//Databases For Php
const quizDb9 = [
    {
        question: "Q1: PHP Stands for?",
        a:"PHP Hypertext Processor",
        b:"PHP Hyper Markup Processor",
        c:"PHP Hyper Markup Preprocessor",
        d:"PHP Hypertext Preprocessor",
        ans:"ans4"
    },
    {
       question: "Q2:PHP is an example of ___________ scripting language?",
       a:"Server-side",
       b:"Client-side",
       c:"Browser-side",
       d:"In-side",
       ans:"ans1"
    },
    {
        question: "Q3: Who is known as the father of PHP ____?",
        a:"Rasmus Lerdorf",
        b:"Willam Makepiece",
        c:"Drek Kolkevi",
        d:"List Barely",
        ans:"ans1"
        
    },
    {
       question:"Q4:Which of the following is not true ___?",
       a:"PHP can be used to develop web applications",
       b:"PHP makes a website dynamic",
       c:"PHP applications can not be compile",
       d:"PHP can not be embedded into html",
       ans:"ans4"
    }

];


//Database for ReactJs
const quizDb10 = [
    {
        question: "Q1: Everything in React is a ?",
        a:"module",
        b:"component",
        c:"packeage",
        d:"class",
        ans:"ans2"
    },
    {
       question: "Q2: What is React js?",
       a:"Server side Framework",
       b:"User-interface framework",
       c:" A Library for building interaction interfaces",
       d:"None of These",
       ans:"ans3"
    },
    {
        question: "Q3: Props are  _______ into other Components?",
        a:"Methods",
        b:"Injected",
        c:"Both 1 and 2",
        d:"All of the above",
        ans:"ans1"
        
    },
    {
       question:"Q4:Who Develop Reactjs___?",
       a:"Facebook",
       b:"Google",
       c:"Apple",
       d:"Twitter",
       ans:"ans1"
    }

];

//Databases for Dbms
const quizDb11 = [
    {
        question: "Q1: What do you mean by one to many relationships??",
        a:"One class may have many teachers",
        b:"One teacher can have many classes",
        c:"Many classes may have many teachers",
        d:"Many teachers may have many classes",
        ans:"ans2"
    },
    {
       question: "Q2:The term FAT is stands for_____?",
       a:"File Allocation Tree",
       b:"File Allocation Table",
       c:"File Allocation Graph",
       d:"All of the above",
       ans:"ans2"
    },
    {
        question: "Q3:  Which one of the following is a type of Data Manipulation Command?",
        a:"Create",
        b:"Alter",
        c:"Delete",
        d:"All of the above",
        ans:"ans3"
        
    },
    {
       question:"Q4:The term ODBC stands for_____?",
       a:"Oral database connectivity",
       b:"Oracle database connectivity",
       c:"Open database connectivity",
       d:"Object database connectivity",
       ans:"ans3"
    }

];

//Databases For MongoDb
const quizDb12 = [
    {
        question: "Q1: The architecture of a replica set affects the set’s _________ and capability?",
        a:"scalability",
        b:"capacity",
        c:"performance",
        d:" all of the mentioned",
        ans:"ans2"
    },
    {
       question: "Q2:  Without a primary, a replica set cannot accept ________ operations?",
       a:"read",
       b:"write",
       c:"read write",
       d:"all of the mentioned",
       ans:"ans2"
    },
    {
        question: "Q3: _________ member is used to support dedicated functions, such as backup or reporting?",
        a:"Hidden",
        b:"Primary",
        c:"ViewState",
        d:"None of the mentioned",
        ans:"ans1"
        
    },
    {
       question:"Q4: _________ sets also allow the routing of read operations to specific machines?",
       a:"Field",
       b:"Read",
       c:"Tag",
       d:" All of the mentioned",
       ans:"ans3"
    }

];


//Databases For Operating System
const quizDb13 = [
    {
        question: "Q1: Which of the following is not an operating system?",
        a:"Windows",
        b:"Linux",
        c:"Oracle",
        d:" DOS",
        ans:"ans3"
    },
    {
       question: "Q2: Banker's algorithm is used?",
       a:"To prevent deadlock",
       b:"To deadlock recovery",
       c:"To solve the deadlock",
       d:"None of these",
       ans:"ans1"
    },
    {
        question: "Q3: Which of the following is a single-user operating system??",
        a:"Windows",
        b:"MAC",
        c:"Ms-Dos",
        d:"None of these",
        ans:"ans3"
        
    },
    {
       question:"Q4: The size of virtual memory is based on which of the following?",
       a:"CPU",
       b:"RAM",
       c:"Address bus",
       d:"Data bus",
       ans:"ans3"
    }

];







const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');



const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

//For Javascript
const loadQuestion = () => {
    
    const questionList = quizDb[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 1;
}

//For Python
const loadQuestion2 = () => {
    
    const questionList = quizDb2[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 2;
}

//For C++
const loadQuestion3 = () => {
    
    const questionList = quizDb3[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 3;
}

//For C
const loadQuestion4 = () => {
    
    const questionList = quizDb4[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 4;
}

//For Java
const loadQuestion5 = () => {
    
    
    const questionList = quizDb5[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 5;
}

//For Networking
const loadQuestion6 = () => {
    
    const questionList = quizDb6[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 6;
}

//For Html
const loadQuestion7 = () => {
    
    const questionList = quizDb7[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 7;
}

//For CSS
const loadQuestion8 = () => {

    const questionList = quizDb8[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 8;
}

//For PHP
const loadQuestion9 = () => {
    
    const questionList = quizDb9[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 9;
}


//For ReactJs
const loadQuestion10 = () => {
    
    const questionList = quizDb10[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 10;
}

//For DBMS
const loadQuestion11 = () => {
    
    const questionList = quizDb11[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 11;
}
//For MongoDb
const loadQuestion12 = () => {

    const questionList = quizDb12[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 12;
}

//For Operating System
const loadQuestion13 = () => {

    const questionList = quizDb13[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    main = 13;
}







const getCheckAnswer = () =>{

    let answer;
    answers.forEach((curAnsElement) =>{
    if(curAnsElement.checked){
        answer = curAnsElement.id;
    }

    });

    return answer;
}
const deselectAll = () =>{

    answers.forEach((curAnsElement) => curAnsElement.checked = false);
}


submit.addEventListener('click',() =>{
    

    if(main == 1)
    {
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb.length){
        loadQuestion();
    }
    else{
        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
         if(score == 0)
         {
         showScore.innerHTML = `
         <h3> Your JavaScript Quiz Scored ${score}/${quizDb.length} </h3>
         <h3>&#128531<h3>
         <button class="btn" onclick="location.reload()"> Play Again</button>
         <h4>Designed By Akash Khandelwal</h4>
         `;
         }
         else
         {
            showScore.innerHTML = `
               
              <h3> Your JavaScript Quiz Scored ${score}/${quizDb.length} </h3>
              <h3>&#128526<h3>
              <button class="btn" onclick="location.reload()"> Play Again</button>
              <h4>Designed By Akash Khandelwal</h4>
              `; 
         }
         showScore.classList.remove('scoreArea');
    }

  }

  else if(main == 2)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb2[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb2.length){
        loadQuestion2();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
    
        <h3> Your Python Quiz Scored ${score}/${quizDb2.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your Python Quiz Scored ${score}/${quizDb2.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>
             `; 
        }

         showScore.classList.remove('scoreArea');
    }
  }

  else if(main == 3)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb3[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb3.length){
        loadQuestion3();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your C++ Quiz Scored ${score}/${quizDb3.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
            
             <h3> Your C++ Quiz Scored ${score}/${quizDb3.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }

  else if(main == 4)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb4[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb4.length){
        loadQuestion4();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your C Quiz Scored ${score}/${quizDb4.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your C Quiz Scored ${score}/${quizDb3.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }
   

  else if(main == 5)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb5[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb5.length){
        loadQuestion5();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your Java Quiz Scored ${score}/${quizDb5.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your Java Quiz Scored ${score}/${quizDb5.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }

  else if(main == 6)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb6[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb6.length){
        loadQuestion6();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your Networking Quiz Scored ${score}/${quizDb6.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
            
             <h3> Your Networking Quiz Scored ${score}/${quizDb6.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }


  else if(main == 7)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb7[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb7.length){
        loadQuestion7();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your HTML Quiz Scored ${score}/${quizDb7.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your HTML Quiz Scored ${score}/${quizDb7.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }



  else if(main == 8)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb8[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb8.length){
        loadQuestion8();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
    
        <h3> Your Css Quiz Scored ${score}/${quizDb8.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your Css Quiz Scored ${score}/${quizDb8.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }


  else if(main == 9)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb9[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb9.length){
        loadQuestion9();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
    
        <h3> Your PHP Quiz Scored ${score}/${quizDb9.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your PHP Quiz Scored ${score}/${quizDb9.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }



  else if(main == 10)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb10[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb10.length){
        loadQuestion10();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your ReactJs Quiz Scored ${score}/${quizDb10.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
            
             <h3> Your ReactJs Quiz Scored ${score}/${quizDb10.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }


  else if(main == 11)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb11[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb11.length){
        loadQuestion11();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your DBMS Quiz Scored ${score}/${quizDb11.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your DBMS Quiz Scored ${score}/${quizDb11.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }


  else if(main == 12)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb12[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb12.length){
        loadQuestion12();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
    
        <h3> Your MongoDb Quiz Scored ${score}/${quizDb12.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
            
             <h3> Your MongoDb Quiz Scored ${score}/${quizDb12.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }


  else if(main == 13)
  {

    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizDb13[questionCount].ans)
    {
        score++;
        console.log(score);
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDb13.length){
        loadQuestion13();
    }
    else{

        let main = document.getElementById('main-content');
        main.style.filter = "blur(5px)";
         
        if(score == 0)
        {
        showScore.innerHTML = `
        
        <h3> Your Operating System Quiz Scored ${score}/${quizDb13.length} </h3>
        <h3>&#128531<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        <h4>Designed By Akash Khandelwal</h4>
        `;
        }
        else
        {
           showScore.innerHTML = `
              
             <h3> Your  Operating System Quiz Scored ${score}/${quizDb13.length} </h3>
             <h3>&#128526<h3>
             <button class="btn" onclick="location.reload()"> Play Again</button>
             <h4>Designed By Akash Khandelwal</h4>`; 
        }

         showScore.classList.remove('scoreArea');
    }
  }

});










