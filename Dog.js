// Dog class
class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="dog">
      <img src="./${avatar}" alt="" class="dog-img">
      <div class="dog-meta">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
      </div>
    </div>
    `
  }
}

export default Dog