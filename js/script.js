window.onload = sendApiRequest

async function sendApiRequest() {
    let response = await fetch(`https://opentdb.com/api.php?amount=15&category=20&type=multiple`);
    console.log(response)
    let data = await response.json()
    console.log(data);
    useApiData(data)
}


function useApiData (data) {
    document.querySelector('#category').innerHTML = `Category: ${data.results[0].category}`
    document.querySelector('#difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector('#questions').innerHTML = `Question: ${data.results[0].question}`

    document.querySelector('#answer1').innerHTML = data.results[0].correct_answer
    document.querySelector('#answer2').innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector('#answer3').innerHTML = data.results[1].incorrect_answers[0]
    document.querySelector('#answer4').innerHTML = data.results[2].incorrect_answers[0]
}


let correctButton = document.querySelector('#answer1')
let incorrectButton = document.querySelector('#answer2')


correctButton.addEventListener('click', ()=>{
    alert('correct!');
    sendApiRequest ()
})

incorrectButton.addEventListener('click', ()=>{
    alert('wrong!');
    sendApiRequest ()
})