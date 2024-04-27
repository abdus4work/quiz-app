const questions=[
    {
        id:1,
        question:"What is the full form of HTML?",
        answer:[
            {text:"Hyperlinks and Text Markup Language",correct:false},
            {text:"Hyper Text Markup Language",correct:true},
            {text:"Home Tool Markup Language",correct:false},
            {text:"Hyper Tool Markup Language",correct:false}
        ]
    },
    {
        id:2,
        question:"What is the full form of CSS?",
        answer:[
            {text:"Cascading Style Sheep",correct:false},
            {text:"Cartoon Style Sheet",correct:false},
            {text:"Cascading Style Sheet",correct:true},
            {text:"Cascading Super Sheet",correct:false}
        ]
    },
    {
        id:3,
        question:"What is the full form of HTTP?",
        answer:[
            {text:"Hyper Text Transfer Product",correct:false},
            {text:"Hyper Tool Transfer Protocol",correct:false},
            {text:"Hyper Tool Transfer Product",correct:false},
            {text:"Hyper Text Transfer Protocol",correct:true}
        ]
    },
    {
        id:4,
        question:"What is the full form of JS?",
        answer:[
            {text:"JavaScript",correct:true},
            {text:"JavaSuper",correct:false},
            {text:"JustScript",correct:false},
            {text:"JordenShoes",correct:false}
        ]
    },
    {
        id:5,
        question:"What is the full form of DOM?",
        answer:[
            {text:"Design Object Model",correct:false},
            {text:"Document Object Model",correct:true},
            {text:"Data Object Model",correct:false},
            {text:"Document Organization Model",correct:false}
        ]
    }
]

const questionTitle=document.getElementById("question-title");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetQuestion();
    document.querySelector("#quiz-app h1").style.display="none";
    document.querySelector(".title-bar span").style.display="block";
    document.querySelector(".title-bar span").innerHTML=`${currentQuestionIndex+1}/${questions.length} `;
    let question=questions[currentQuestionIndex];
    questionTitle.innerHTML=`${currentQuestionIndex+1}. ${question.question}`;
    question.answer.forEach(answer=>{
        let button= document.createElement("button");
        button.innerHTML=answer.text;
        button.dataset.correct=answer.correct;
        answerButtons.appendChild(button);
        button.addEventListener("click",selectAnswer);
    })
}

function selectAnswer(e){
    let selectButton=e.target;
    let isCorrect=selectButton.dataset.correct==="true";
    // console.log(isCorrect);
    if(isCorrect){
        selectButton.classList.add("correct");
        score++;
    }
    else{
        selectButton.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button=>{
        button.disabled=true;
        button.style.cursor="not-allowed";
    })
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
    })
    nextButton.style.display="block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }else{
            resetQuestion();
            document.querySelector(".title-bar span").style.display="none";
            questionTitle.innerHTML=`Your score is ${score} out of ${questions.length}`;
            nextButton.innerHTML="play again";
            nextButton.style.display="block";
        }
    }else{
        
        startQuiz();
    }
})

function resetQuestion(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();