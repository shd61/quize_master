const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Trainer Marking Language",
        choice2: "Hyper Text Markup Language",
        choice3: "Hyper Text Marketing Language",
        choice4: "Hyper Tool Markup Language",
        answer: 2
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choice1: "font",
        choice2: "class",
        choice3: "styles",
        choice4: "style",
        answer: 4
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choice1: "<break>",
        choice2: "<br>",
        choice3: "<lb>",
        choice4: "<linebreak>",
        answer: 2
    },
    {
        question: "Which character is used to indicate an end tag?",
        choice1: "/",
        choice2: "<",
        choice3: "*",
        choice4: "^",
        answer: 1
    },
    {
        question: "How can you make a numbered list?",
        choice1: "<ul>",
        choice2: "<ol>",
        choice3: "<list>",
        choice4: "<dl>",
        answer: 2
    },
    {
        question: "How can you make a bulleted list?",
        choice1: "<ul>",
        choice2: "<ol>",
        choice3: "<dl>",
        choice4: "<list>",
        answer: 1
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choice1: "title",
        choice2: "src",
        choice3: "alt",
        choice4: "longdesc",
        answer: 3
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        choice1: "<heading>",
        choice2: "<h6>",
        choice3: "<h1>",
        choice4: "<head>",
        answer: 3
    },
    {
        question: "Which HTML element defines the title of a document?",
        choice1: "<meta>",
        choice2: "<title>",
        choice3: "<head>",
        choice4: "<header>",
        answer: 2
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();