console.log('running')
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

btnStart.addEventListener('click', () => { 
    const intervalID = setInterval(changeColor, 1000)
    
    function changeColor() { 
        body.style.backgroundColor = getRandomHexColor()
    }
    btnStart.disabled = true
    btnStop.disabled = false
    btnStop.addEventListener('click', () => { 
        btnStop.disabled = true
        btnStart.disabled = false
        clearInterval(intervalID)
    })
})
