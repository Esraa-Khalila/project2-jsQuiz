let question = document.getElementById("question");
let finishBtn = document.getElementById('finish');
let nextQuestion = document.getElementById("next");
let allResult = []
let currQues = 0;
let isCheck = false;


add(data[currQues]);


function next() {
  let radio = document.getElementsByTagName("input");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      radio[i].checked = false;
      let correctAnswer = data[currQues].correct; //Save the correct answer
      currQues++;
      check(correctAnswer, radio[i].defaultValue);
      add(data[currQues]);

      return;
    }
  }
  alert("please select an answer");
}

function add(text) {
  let countQue = currQues + 1;
  question.innerHTML = `Question.${[countQue]}` + ":" + " " + text["question"];
  let input = document.getElementsByTagName("input");
  for (let i = 1; i <= 4; i++) {
    let label = document.getElementById(`answer${i}`);
    input[i - 1].value = text[`answer_${i}`];
    label.innerHTML = text[`answer_${i}`];
    
  }
  if (currQues==19) {
    finishBtn.style.display = 'block'
    nextQuestion.style.display='none'
  }
}
function check(correctAnswer, selected) {
  let result = {
    question: "",
    answer: "",
    correct: "",
    isTrue: false,
  };
  let answers = document.getElementsByName("answer");
  
  for (let i = 0; i < answers.length; i++) {  
    if (correctAnswer == selected) {
      result.isTrue = true;
    }
    result.answer = selected
    result.correct = correctAnswer
    result.question=question.innerHTML
  }
  allResult.push(result);

}

function finish(){
localStorage.setItem('result' , JSON.stringify(allResult))
}