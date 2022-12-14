// import Dog class and dogs array of dog objects
import Dog from './Dog.js'
import dogsData from './data.js';


let currentDog = new Dog(dogsData.shift());
let moreDogs = true;
let isWaiting = false;

document.querySelectorAll('.swipe-btn').forEach(btn => {
  btn.addEventListener('click', () => { // move logic to stand-alone function

    currentDog.hasBeenSwiped = true; // flip the swiped flag
    getNextDog()
  })
})

function handleSwipe() {

}


// hasBeenSwiped - set to true if either btn clicked
// hasBeenLiked - set to true if 'accept' btn clicked

function getNextDog() {
  if (dogsData.length) { // check there's dogs available in the array
    currentDog = new Dog(dogsData.shift())


    setTimeout(render, 1000)
  } else {
    console.log('nope')
  }

}



function render() {
  document.querySelector('.dog-container').innerHTML = currentDog.getDogHtml()
  console.log(`${currentDog.name} has been swiped: ${currentDog.hasBeenSwiped}`)
}

render()

