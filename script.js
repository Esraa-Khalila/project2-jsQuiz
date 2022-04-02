
let quiz = document.querySelector(".quiz");
let answer = document.querySelector(".quiz");
let btn = document.querySelector(".arrow");

let questionsObject = [];
let currQues = 0;


function jsQuiz() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        let data = JSON.parse(httpRequest.responseText);
          add(data[currQues]);
          btn.onclick = function () {
              let arrow = data[currQues].correct
              currQues++
            check(arrow)
            
              quiz.innerHTML = ''
              answer.innerHTML = ''
            add(data[currQues]); 
                
          }
      }
    }
  };
  httpRequest.open("GET", "data.json");
  httpRequest.send();
}
jsQuiz();
function add(text) {
  let question = document.createElement("h3");
  let countQue=currQues+1
  let qustionText = document.createTextNode(
  
    `Question.${[countQue]}`+":"+" " + text["question"]
  );
  question.appendChild(qustionText);
  answer.appendChild(question);
  for (let i = 1; i <= 4; i++) {
    let div = document.createElement("div");
    div.className = "answer";
    let radio = document.createElement("input");

    radio.name = "question";
    radio.type = "radio";
    radio.id = `answer_${i}`;
    radio.dataset.answer = text[`answer_${i}`];

    let label = document.createElement("label");
    label.htmlFor = `answer${i}`;

    let labelText = document.createTextNode(text[`answer_${i}`]);
    label.appendChild(labelText);
    div.appendChild(radio);
    div.appendChild(label);

    answer.appendChild(div);
  }
}
function check(check) {
    let answers = document.getElementsByName('question')
    let checkAnswer
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            checkAnswer = answers[i].dataset.answer
        }
    
        
    }
    console.log(`right answer : ${check}`);
    console.log(` choose answer : ${checkAnswer}`)
}
