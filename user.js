class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(num) {
    this.#calcAddition(num)
    this.#rankUp()
  }

  #calcAddition(num) {
    num = this.#removeZero(num)
    num === this.rank ? this.progress += 3 : this.#useFormula(num)
  }

  #useFormula(num) {
    let difference = this.rank - num
    this.progress += difference * difference * 10
  }

  #removeZero(num) {
    if (num > 0 && this.rank < 0) {
      return num - 1
    } else {
      return num
    }
  }

  #rankUp() {
    if (this.progress >= 100) {
      this.rank += 1;
      this.progress -= 100;
      this.#rankUp()
    }
  }

}

module.exports = User;