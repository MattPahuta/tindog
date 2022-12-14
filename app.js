// import Dog class and dogs array of dog objects
import Dog from './Dog.js'
import dogsData from './data.js';


let currentDog = new Dog(dogsData.shift());
let moreDogs = true; // track if there are dogs left in array
let isWaiting = false;

// Event listeners 
document.getElementById('swipe-right').addEventListener('click', () => { // accept/reject btns
  console.log('swipe right')
  if (moreDogs && !isWaiting) {
    getNextDog()
    isWaiting = true
    setTimeout(()=> isWaiting = false, 1500)
  }

})

function getNextDog() {
  if (dogsData.length) {
    currentDog = new Dog(dogsData.shift())
    setTimeout(render, 1000)
  } else {
    console.log('nope')
  }

}



function render() {
  document.querySelector('.dog').innerHTML = currentDog.getDogHtml()
}

render()

