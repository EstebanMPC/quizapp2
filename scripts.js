// Start game
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


// Set next Question


// Selects answer

const questions = [
    {
        question: 'what is 2+2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]