class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(num) {
    if (num === this.rank) {
      this.progress += 3
    } else {
      this.progress += this.#calcAddition(num)
    }
    if (this.progress === 100) {
      this.#rankUp()
    }
  }

  #calcAddition(num) {
    let difference = this.rank - num
    return difference * difference * 10
  }

  #rankUp() {
    this.rank = -7
    this.progress = 0
  }

}

module.exports = User;