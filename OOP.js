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

Quiz.prototype.checkAnswer = function (answer) {
  // Defining out of ctor in prototype
  return answer === this.correctAnswer;
};

// With ES6 'Class'
class person {
  //parent
  constructor(name, job) {
    this.name = name;
    this.job = job;
    console.log("Instance created ...");
  }
  // Getter - Setter Encapsulation
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

// ▼ Inheritance ▼
class personDerived extends person {
  //child
  constructor(name, job, number) {
    super(name, job); //inheritance
    this.number = number;
  }
}
