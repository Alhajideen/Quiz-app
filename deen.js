let questions = [
  {
    id: 1,
    question: 'Which of the following is the building block of all proteins ?',
    answer: 'amino acids',
    options: ['meat and fish', 'amino acids', 'nitrogenous bases', 'DNA'],
  },
  {
    id: 2,
    question:
      'Nutrients which cannot be synthesized by the body and must be gotten from diet are called ?',
    answer: 'essential nutrients',
    options: [
      'none-essential nutrients',
      'micro nutrients',
      'macro nutrients',
      'essential nutrients',
    ],
  },
  {
    id: 3,
    question: 'How are you ?',
    answer: "I'm fine",
    options: ["I'm not fine", "I don't know", "I'm fine", 'None of the above'],
  },
  {
    id: 4,
    question:
      'A set of instructions given to a computer as template to carry out a task is called ?',
    answer: 'a program',
    options: [
      'operating system',
      'programming language',
      'a program',
      'computer commands',
    ],
  },
  {
    id: 4,
    question:
      'A set of instructions given to a computer as template to carry out a task is called ?',
    answer: 'a program',
    options: [
      'operating system',
      'programming language',
      'a program',
      'computer commands',
    ],
  },
  {
    id: 4,
    question:
      'A set of instructions given to a computer as template to carry out a task is called ?',
    answer: 'a program',
    options: [
      'operating system',
      'programming language',
      'a program',
      'computer commands',
    ],
  },
  {
    id: 4,
    question:
      'A set of instructions given to a computer as template to carry out a task is called ?',
    answer: 'a program',
    options: [
      'operating system',
      'programming language',
      'a program',
      'computer commands',
    ],
  },
  {
    id: 4,
    question:
      'A set of instructions given to a computer as template to carry out a task is called ?',
    answer: 'a program',
    options: [
      'operating system',
      'programming language',
      'a program',
      'computer commands',
    ],
  },
  {
    id: 4,
    question:
      'A set of instructions given to a computer as template to carry out a task is called ?',
    answer: 'a program',
    options: [
      'operating system',
      'programming language',
      'a program',
      'computer commands',
    ],
  },
];

let next = document.getElementById('next');
let myQuestions = null;

let next = document.getElementById('next');
let myQuestions = null;
next.onclick = (e) => {
  e.preventDefault();
  let myQuestion = questions.shuffle.pop();
  if (myQuestion) {
    console.log(myQuestion);
  } else {
    console.log('Finished');
  }
};
