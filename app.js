import dogs from './data.js';
import Dog from './Dog.js'

// dogs array
// let dogsArray = ['Rex', 'Bella', 'Teddy']

// function getNewDog() {
//   const nextDogData = dogs[dogs.pop()];
//   return nextDogData ? new Dog(nextDogData) : {};
// }

function render() {
  document.querySelector('.dog').innerHTML = dog.getDogHtml()
}

const dog = new Dog(dogs[0])