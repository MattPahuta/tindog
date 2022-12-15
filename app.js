// import Dog class and dogs array of dog objects
import Dog from './Dog.js'
import dogsData from './data.js';

let currentDog = new Dog(dogsData.shift()); // get the first dog from the array (index 0)
let isWaiting = false; // add to prevent double button execute on same image
const swipeBtns = document.querySelectorAll('.swipe-btn');

// hasBeenSwiped - set to true if either btn clicked
// hasBeenLiked - set to true if 'accept' btn clicked

// swipe handling 1.0
// swipeBtns.forEach(btn => {
//   btn.addEventListener('click', (e) => { // move logic to stand-alone function

//     currentDog.hasBeenSwiped = true; // flip the swiped flag  
//     if (e.target.classList.contains('swipe-right')){ // determine btn selected
//       currentDog.hasBeenLiked = true;
//       handleBadgeHtml()
//     } 
//     if (e.target.classList.contains('swipe-left')) { // determine btn selected
//       handleBadgeHtml()
//     }
//     getNextDog()
//   })
// })

// swipe handling 2.0
swipeBtns.forEach(btn => {
  btn.addEventListener('click', handleSwipe)
})

function handleSwipe(e) {
  currentDog.hasBeenSwiped = true; // flip the swiped flag  
  if (e.target.classList.contains('swipe-right')){ // determine btn selected
    currentDog.hasBeenLiked = true;
  } 
  handleBadgeHtml()
  getNextDog()
}

// handle the like/nope badges
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
    setTimeout(render, 1200) // wait a second to render next dog
  } else {
    console.log('nope')
    // add a render of end of dogs array message
    setTimeout(noMoreDogsHtml, 1200)
    // noMoreDogsHtml()
  }
}

function noMoreDogsHtml() {
  // disable buttons?
  // add isWaiting
  document.querySelector('.dog-container').innerHTML = `
  <div class="animal cat-end"">
    <div class="dog-meta">
      <h1>No more dogs</h1>
      <p>Go away</p>
    </div>
  </div>
  `
}



function render() {
  document.querySelector('.dog-container').innerHTML = currentDog.getDogHtml()
  console.log(`${currentDog.name} has been swiped: ${currentDog.hasBeenSwiped}`) // debug
  console.log(`${currentDog.name} has been liked: ${currentDog.hasBeenLiked}`) // debug
}

render()

