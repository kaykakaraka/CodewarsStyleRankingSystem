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
  }

  #calcAddition(num) {
    let difference = this.rank - num
    return difference * difference * 10
  }

}

module.exports = User;