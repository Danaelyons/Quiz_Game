const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressbarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: 'What is a boolean?',
        choice1: 'True or false',
        choice2: 'A number',
        choice3: 'An array',
        choice4: 'My Aunt',
        answer: 1,
    },
    {
        question: 'What is && in coding called?',
        choice1: 'True or false',
        choice2: 'A number',
        choice3: 'A logical and',
        choice4: 'My Uncle',
        answer: 3,
    },
    {
        question: 'What does || mean?',
        choice1: 'True or false',
        choice2: 'one expression must be true in order to log as true.',
        choice3: 'A string',
        choice4: 'both expressions must be true in order to log as true.',
        answer: 2,
    },
    {
        question: 'What does == mean?',
        choice1: 'False',
        choice2: 'equal',
        choice3: 'An array',
        choice4: 'My dog',
        answer: 2,
    },
    {
        question: 'What is a string?',
        choice1: 'True',
        choice2: 'A question',
        choice3: 'letters, numbers and punctuation',
        choice4: 'False',
        answer: 3,
    },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewquestion()
}

getNewquestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressbarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewquestion()

        }, 1000)
        })
    })

    incrementScore = num => {
        score +=num
        scoreText.innerText = score
    }
 startGame()