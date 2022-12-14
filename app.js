// import Dog class and dogs array of dog objects
import Dog from './Dog.js'
import dogsData from './data.js';


let currentDog = new Dog(dogsData.shift()); // get the first dog from the array (index 0)

let isWaiting = false; // use for badge application?

const swipeBtns = document.querySelectorAll('.swipe-btn');

// hasBeenSwiped - set to true if either btn clicked
// hasBeenLiked - set to true if 'accept' btn clicked

swipeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => { // move logic to stand-alone function

    currentDog.hasBeenSwiped = true; // flip the swiped flag  
    if (e.target.classList.contains('swipe-right')){ // determine btn selected
      currentDog.hasBeenLiked = true;
      handleBadgeHtml()
    } 
    if (e.target.classList.contains('swipe-left')) { // determine btn selected
      handleBadgeHtml()
    }

    getNextDog()
  })
})

function handleBadgeHtml() {
  const badge = document.querySelector('#badge');
  if (currentDog.hasBeenLiked) {
    badge.innerHTML = `
      <img src="./images/badge-like.png" class="badge-img" alt="like">
      `
  } else {
    badge.innerHTML = `
      <img src="./images/badge-nope.png" class="badge-img" alt="nope">
      `
  }
}



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
  console.log(`${currentDog.name} has been liked: ${currentDog.hasBeenLiked}`)
}

render()

