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
        question: 'What is a boolean?'
        choice1: 'True or false'
        choice2: 'A number'
        choice3: 'An array'
        choice4: 'My Aunt'
        answer: 1,
    },
]

let questions = [
    {
        question: 'What is does && in coding called?'
        choice1: 'True or false'
        choice2: 'A number'
        choice3: 'A logical and'
        choice4: 'My Uncle'
        answer: 3,
    },
]

let questions = [
    {
        question: 'What does && mean?'
        choice1: 'True or false'
        choice2: 'A number'
        choice3: 'An array'
        choice4: 'both expressions must be true in order to log as true.'
        answer: 4,
    },
]

let questions = [
    {
        question: 'What is a boolean?'
        choice1: 'True or false'
        choice2: 'A number'
        choice3: 'An array'
        choice4: 'My Aunt'
        answer: 1,
    },
]

let questions = [
    {
        question: 'What is a boolean?'
        choice1: 'True or false'
        choice2: 'A number'
        choice3: 'An array'
        choice4: 'My Aunt'
        answer: 1,
    },
]