let questions = [
    {
        question: 'What is the capital of Japan?',
        answers: [
            {opts: 'Beijing', correct: false},
            {opts: 'Seoul', correct: false},
            {opts: 'Tokyo', correct: true},
            {opts: 'Bangkok', correct: false}
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {opts: 'Gold', correct: false},
            {opts: 'Oxygen', correct: true},
            {opts: 'Osmium', correct: false},
            {opts: 'Oganesson', correct: false}
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            {opts: 'Vincent van Gogh', correct: false},
            {opts: 'Pablo Picasso', correct: false},
            {opts: 'Michelangelo', correct: false},
            {opts: 'Leonardo da Vinci', correct: true}
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            {opts: 'Venus', correct: false},
            {opts: 'Jupiter', correct: false},
            {opts: 'Mars', correct: true},
            {opts: 'Saturn', correct: false}
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            {opts: 'African Elephant', correct: false},
            {opts: 'Blue Whale', correct: true},
            {opts: 'Giraffe', correct: false},
            {opts: 'Polar Bear', correct: false}
        ]
    },
    {
        question: 'Which programming language was created by James Gosling?',
        answers: [
            {opts: 'Python', correct: false},
            {opts: 'Java', correct: true},
            {opts: 'C++', correct: false},
            {opts: 'Ruby', correct: false}
        ]
    },
    {
        question: 'What is the largest organ in the human body?',
        answers: [
            {opts: 'Liver', correct: false},
            {opts: 'Brain', correct: false},
            {opts: 'Skin', correct: true},
            {opts: 'Heart', correct: false}
        ]
    },
    {
        question: 'Which country hosted the 2016 Summer Olympics?',
        answers: [
            {opts: 'China', correct: false},
            {opts: 'United Kingdom', correct: false},
            {opts: 'Russia', correct: false},
            {opts: 'Brazil', correct: true}
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            {opts: 'Charles Dickens', correct: false},
            {opts: 'William Shakespeare', correct: true},
            {opts: 'Jane Austen', correct: false},
            {opts: 'Mark Twain', correct: false}
        ]
    },
    {
        question: 'What is the currency of Australia?',
        answers: [
            {opts: 'Dollar', correct: true},
            {opts: 'Pound', correct: false},
            {opts: 'Euro', correct: false},
            {opts: 'Yen', correct: false}
        ]
    }
]

let questionElem = document.getElementById('question');
let answerBtns = document.getElementById('answer-btns');
let nextBtn = document.getElementById('next-btn');

let currentQuesIdx = 0;
let score = 0;

function startQuiz(){
    currentQuesIdx = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQues = questions[currentQuesIdx];
    let quesNo = currentQuesIdx + 1;

    questionElem.innerHTML = quesNo + '. ' + currentQues.question;

    currentQues.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerHTML = answer.opts;
        btn.classList.add('btn');
        answerBtns.appendChild(btn);
        if (answer.correct) {{
            btn.dataset.correct = answer.correct;
        }
            
        }
        btn.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display = 'none';
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect')      ;
    }

    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block'
}

function showScore(){
    resetState();
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = 'Play Again!';
    nextBtn.style.display = 'block';
}

function handleNextBtn(){
    currentQuesIdx++;
    if (currentQuesIdx < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuesIdx < questions.length) {
        handleNextBtn();
    }else{
        startQuiz();
    }
});

startQuiz();