// import Dog class and dogs array of dog objects
import Dog from './Dog.js'
import dogsData from './data.js';

let currentDog = new Dog(dogsData.shift()); // get the first dog from the array (index 0)
let isWaiting = false; // add to prevent double button execute on same image

// button event handlers
document.getElementById('swipe-left').addEventListener('click', handleSwipe);
document.getElementById('swipe-right').addEventListener('click', handleSwipe);


// handle the button clicks (swipes)
function handleSwipe(e) {
  if (!isWaiting) { // check if isWaiting resolves as falsy
    currentDog.swiped(); // call currentDog's swiped method
    if (e.target.classList.contains('swipe-right')){ // determine btn selected
      currentDog.liked(); // call currentDog's liked method
    } 
    handleBadgeHtml() // call handleBadgeHtml
    getNextDog() // call getNextDog
  }
}

// get next dog 
function getNextDog() {
  isWaiting = true; // prevent handleSwipe from running while waiting to get next dog
  if (dogsData.length) { // check there's dogs available in the array
    currentDog = new Dog(dogsData.shift()) // assign next dog to currentDog
    setTimeout(render, 1200) // wait ~ a second to render next dog
  } else { // if no more dogs...
    setTimeout(noMoreDogsHtml, 1200) // wait ~ a second to call noMoreDogs
  }
}

// handle the like/nope badges
function handleBadgeHtml() {
  const badge = document.querySelector('#badge'); // get the badge element
  if (currentDog.hasBeenLiked) { // html if liked
    badge.innerHTML = `
      <img src="./images/badge-like.png" class="badge-img" alt="like">
      `
  } else { // html if rejected
    badge.innerHTML = `
      <img src="./images/badge-nope.png" class="badge-img" alt="nope">
      `
  }
}

// show a final image once all the dogs have been swiped
function noMoreDogsHtml() { 
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
  isWaiting = false; // once the new dog is called to render, flip isWaiting to false
  document.querySelector('.dog-container').innerHTML = currentDog.getDogHtml()
}

render()

