const BASE_API = 'https://api.adviceslip.com/advice'

const adviceNumber = document.getElementById('numAdvice')
const randomAdvice = document.getElementById('btRandom')
const adviceElement = document.getElementById('advice')

window.onload = getAdvice
randomAdvice.addEventListener('click', getAdvice)

function getAdvice() {
  fetch(BASE_API)
    .then((res) => res.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceElement.innerText = data.advice
      adviceNumber.innerText = data.id
    })
    .catch((error) => {
      alert(`Error ${error}`)
    })
}
