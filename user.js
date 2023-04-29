class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(num) {
    this.#calcAddition(num)
    if (this.progress >= 100) {
      this.#rankUp()
    }
  }

  #calcAddition(num) {
    if (num === this.rank) {
      this.progress += 3
    } else {
      let difference = this.rank - num
      this.progress += difference * difference * 10
    }
  }

  #rankUp() {
    this.rank = -7
    this.progress -= 100
  }

}

module.exports = User;