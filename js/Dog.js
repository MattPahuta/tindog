// Dog class
class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  // swiped method
  swiped() {
    this.hasBeenSwiped = true;
  }
  // liked method 
  liked() {
    this.hasBeenLiked = true;
  }
  // build and return the dog's html
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="dog" style="background-image: url(./${avatar});">
      <div class="badge" id="badge"></div>
      <div class="meta">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
      </div>
    </div>
    `
  }
}

export default Dog
