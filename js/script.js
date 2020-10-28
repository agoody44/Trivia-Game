const baseURL = `https://opentdb.com/api.php?amount=15&category=20&type=multiple`;
// const scoreEl = document.querySelector('.scoreboard. score-num');
// const answeredEl = document.querySelector('.scoreBoard .answer-num');



const startButton = document.getElementById('startBtn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame () {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}



window.onload = sendApiRequest

async function sendApiRequest() {
    let response = await fetch(baseURL);
    console.log(response)
    let data = await response.json()
    console.log(data);
    useApiData(data)
}


function useApiData (data) {
    document.querySelector('#category').innerHTML = `Category: ${data.results[0].category}`
    document.querySelector('#difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector('#questions').innerHTML = `Question: ${data.results[0].question}`
    
    
    const answers = [data.results[0].correct_answer, data.results[0].incorrect_answers[0], data.results[0].incorrect_answers[1], data.results[0].incorrect_answers[2]]
    const answerElements = [
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
        document.getElementById("answer4")
      ];
      
      // Shuffles the answers
      randomize(answers);
      
      // Loops 
      for(let i = 0; i < answers.length; i++){
        if(answerElements[i] && answerElements[i].textContent){
          answerElements[i].textContent = answers[i];
        }
      }
      
      // Implements shuffle
      function randomize(array){
        for(let i = array.length - 1; i > 0; i--){
          const index = Math.floor(Math.random() * i);
          const tmp = array[index];
          array[index] = array[i];
          array[i] = tmp;
        }
      }
    }
// let correctButton = document.querySelector('answer1')



// correctButton.addEventListener('click', ()=>{
//     alert('correct!');
//     sendApiRequest ()
// })

// incorrectButton.addEventListener('click', ()=>{
//     alert('wrong!');
//     sendApiRequest ()
// });
// }
    