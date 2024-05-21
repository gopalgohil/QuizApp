
const question = [
    {
        'que': 'When the introduced mongodb ?',
        'a': '2009',
        'b': '2008',
        'c': '2007',
        'd': '2006',
        'correct': 'a'
    },

    {
        'que': 'which of the folowing format is supported by mongodb ?',
        'a': 'SQL',
        'b': 'BSON',
        'c': 'XML',
        'd': 'HTML',
        'correct': 'b'
    },

    {
        'que': 'MongoDB Provides high ___ with replica sets ?',
        'a': 'Scalability',
        'b': 'Availability',
        'c': 'Performance',
        'd': 'None of these',
        'correct': 'b'
    }
]
let index = 0;
let total = question.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".option");
const loadQuestion = () => {
    if (index == total) {
        return endQuiz();
    }

    reset();
    const data = question[index];
    console.log(data);
    // quesBox.innerText=data.que;
    quesBox.innerText = `${index + 1} ${data.que}`;

    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {

            if (input.checked) {
                answer = input.value;
                answer = input.value;
            }
        }

    )
    return answer;
}
const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h3 style="margin-top:120px;">Thank You For Plyaing Quize</h3>
    <h2 style="margin-top:40px;">${right}/${total} are Coreect</h2>

    `
}
// inital call
loadQuestion();

let home=document.querySelector("#home");
home.addEventListener("click",function(){
   window.location.href="coding.html";
})
