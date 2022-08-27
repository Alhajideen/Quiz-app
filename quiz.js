//QUESTION CREATION

let questions = [
    {
        id: 1,
        question: 'Which of the following is the building block of all proteins ?',
        answer: 'amino acids',
        options: ['meat and fish', 'amino acids', 'nitrogenous bases', 'DNA'

        ]
    },
    {
        id: 2,
        question: 'Nutrients which cannot be synthesized by the body and must be gotten from diet are called ?',
        answer: 'essential nutrients',
        options: ['none-essential nutrients', 'micro nutrients', 'macro nutrients', 'essential nutrients'

        ]
    },
    {
        id: 3,
        question: 'How are you ?',
        answer: "I'm fine",
        options: ["I'm not fine", "I don't know", "I'm fine", 'None of the above'

        ]
    },
    {
        id: 4,
        question: 'A set of instructions given to a computer as template to carry out a task is called ?',
        answer: "a program",
        options: ["operating system", "programming language", "a program", 'computer commands'

        ]
    }

]
let html = '';
let questionId;
let questionArr=[];
for (let i = 0; i < questions.length; i++) {
    let eachQuestion = questions[i]
    questionId=eachQuestion.id
    let options = eachQuestion.options
    html = `
    <div class="content">
    <h3>${eachQuestion.question}</h3>
    <div>
    <input type="radio" name="question-${eachQuestion.id}" value="${options[0]}" id=""><label for="">${options[0]}</label> 
   </div>
    <div>
    <input type="radio" name="question-${eachQuestion.id}" value="${options[1]}" id=""><label for="">${options[1]}</label> 
   </div>
    <div>
    <input type="radio" name="question-${eachQuestion.id}" value="${options[2]}" id=""><label for="">${options[2]}</label> 
   </div>
    <div>
    <input type="radio" name="question-${eachQuestion.id}" value="${options[3]}" id=""><label for="">${options[3]}</label> 
   </div>
   </div>
    `
    // }
    // questionArr.push(html)

    // document.getElementById('content').innerHTML = html
// let randomQuestion=html[Math.floor(Math.random()*html)];
// document.getElementById('content').innerHTML = randomQuestion

}


function getMultipleRandom(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  
 let b=getMultipleRandom(questions, 1);
 document.getElementById('content').innerHTML = html



let next = document.getElementById('next')

next.onclick=()=>{
let Qnumber = document.querySelector(`input[name=question-${questionId}]:checked`).value


console.log(Qnumber);
console.log(questionId);
let answer = questions[questionId-1].answer
console.log(answer);

if(Qnumber===answer){
    console.log(true);
}else{
    console.log(false);
}
}