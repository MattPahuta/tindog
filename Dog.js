// Dog class

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="dog" style="background-image: url(./${avatar});">
      <div class="badge" id="badge"></div>
      <div class="dog-meta">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
      </div>
    </div>
    `
  }
}

export default Dog


/*
  <div class="img-container" style="background-image: url(./${avatar});">
    <div class="badge" id="badge">
    </div>
      <div class="user-info">
        <h3>${name}, ${age}</h3>
        <p>${bio}</p>
      </div>
  </div>
*/