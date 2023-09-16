const questions = [
    {
        question: 'Which is Largest animal in the world ?',
        answers: [
            {text: "Shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Blu Whale", correct: true},
        ]
       
    },
    {
        question: 'Which is the coldest location in the earth?',
        answers: [
            {text: "India", correct: false},
            {text: "US", correct: false},
            {text: "East Antarctica", correct: true},
            {text: "West Antarctica", correct: false},
        ]
       
    },
    {
        question: 'Which is the continent with the most number of countries?',
        answers: [
            {text: "Africa", correct: true},
            {text: "US", correct: false},
            {text: "East Antarctica", correct: false},
            {text: "West Antarctica", correct: false},
        ]
       
    },
    {
        question: 'Which is the country with the most people?',
        answers: [
            {text: "Africa", correct: false},
            {text: "US", correct: false},
            {text: "India", correct: false},
            {text: "China", correct: true},
        ]
       
    },
    {
        question: 'Which is the largest state of India?',
        answers: [
            {text: "Karnataka", correct: false},
            {text: "Bihar", correct: false},
            {text: "Rajasthan", correct: true},
            {text: "Delhi", correct: false},
        ]
       
    },
];

const questionElement = document.getElementById('question');
const answersButtons = document.getElementById('ans-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

    resetState();

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{

        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answersButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

