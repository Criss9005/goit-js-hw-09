import Notiflix from 'notiflix';
console.log('running')
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => { 
       
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      
    }

    }, delay)
}



const timeInit = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form')




form.addEventListener('submit', (e) => {
e.preventDefault()
let stepInt = parseInt(timeInit.value)
   for (let i = 0; i < amount.value; i++) {
     if (i == 0) {
       createPromise(i +1 , stepInt) 
      } else { 
        stepInt += parseInt(step.value)
       createPromise(i +1 , stepInt) 
       
     }
}
})

