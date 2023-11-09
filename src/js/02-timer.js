import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
console.log('running')
const input = document.querySelector('#datetime-picker')
const btn = document.querySelector('button[data-start]')

const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')
btn.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    const date = new Date()
    let timeMs = selectedDates[0].getTime() - date.getTime()
    const timeObject = convertMs(timeMs)
    
    if (timeMs > 0) {
      btn.disabled = false

    }
    else { 
      Notiflix.Notify.failure('Please choose a date in the future');
    
    }

    btn.addEventListener('click', (e) => { 
      btn.disabled = true
      const intervalID = setInterval(fx, 1000)
      
      function fx() { 
        timeMs = timeMs -1000
        const objectToShow = convertMs(timeMs)
        //addLeadingZero(objectToShow)
        seconds.innerText = addLeadingZero(objectToShow.seconds.toString())
        days.innerText = addLeadingZero(objectToShow.days.toString())
        hours.innerText = addLeadingZero(objectToShow.hours.toString())
        minutes.innerText = addLeadingZero(objectToShow.minutes.toString())
        
      }

    

})


  },
};

function addLeadingZero(string) { 
  return string.padStart(2, "0")
} 

const fp = flatpickr(input, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

