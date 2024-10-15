// Object Sample
let sampleQuiz = {
  quizText: "....",
  answerOptions: {
    a: "...",
    b: "...",
  },
  correctAnswer: "...",
  checkAnswer: function (answer) {
    return this.correctAnswer === this.answer;
  },
};

// Constructor
function Quiz(quizText, answerOptions, correctAnswer) {
  this.quizText = quizText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
  this.checkAnswer = function (answer) {
    return answer === this.correctAnswer;
  };
}

// Defining Object with Constructor
let quiz = new Quiz("..", { a: "..", b: ".." }, "correctAnswer");
console.log(quiz.checkAnswer("correctAnswer")); // => True

// Prototype
function Quiz(quizText, answerOptions, correctAnswer) {
  this.quizText = quizText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
}

Quiz.prototype.checkAnswer = function (answer) { // Defining out of ctor in prototype
  return answer === this.correctAnswer;
};
