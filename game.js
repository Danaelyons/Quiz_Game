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

let questions0 = [
    {
        question: 'What is a boolean?',
        choice1: 'True or false',
        choice2: 'A number',
        choice3: 'An array',
        choice4: 'My Aunt',
        answer: 1,
    },
]

let questions1 = [
    {
        question: 'What is && in coding called?',
        choice1: 'True or false',
        choice2: 'A number',
        choice3: 'A logical and',
        choice4: 'My Uncle',
        answer: 3,
    },
]

let questions2 = [
    {
        question: 'What does || mean?',
        choice1: 'True or false',
        choice2: 'one expression must be true in order to log as true.',
        choice3: 'A string',
        choice4: 'both expressions must be true in order to log as true.',
        answer: 2,
    },
]

let questions3 = [
    {
        question: 'What does == mean?',
        choice1: 'False',
        choice2: 'equal',
        choice3: 'An array',
        choice4: 'My dog',
        answer: 2,
    },
]

let questions4 = [
    {
        question: 'What is a string?',
        choice1: 'True',
        choice2: 'A question',
        choice3: 'letters, numbers and punctuation',
        choice4: 'False',
        answer: 3,
    },
]