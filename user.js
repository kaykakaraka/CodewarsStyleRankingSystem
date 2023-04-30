class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(num) {
    this.#checkForErrors(num);
    if (this.rank < 8) {
      this.#calcAddition(num)
      this.#rankUp()
    }
  }

  #checkForErrors(num) {
    if (num > 8) {
      throw new Error()
    }
  }

  #calcAddition(num) {
      num = this.#removeZero(num)
      num <= this.rank ? this.#selectScore(num) : this.#useFormula(num)
  }

  #selectScore(num) {
    num = this.#removeAlternativeZero(num)
    if (num === this.rank) {
      this.progress += 3
    } else if (num === this.rank - 1) {
      this.progress += 1
    }
  }

  #useFormula(num) {
    let difference = this.rank - num
    this.progress += difference * difference * 10
  }

  #removeZero(num) {
    return num > 0 && this.rank < 0 ? num - 1 : num
  }

  #removeAlternativeZero(num) {
    return num < 0 && this.rank > 0 ? num + 1 : num
  }

  #rankUp() {
    if (this.progress >= 100) {
      this.rank += 1;
      if (this.rank === 0) {
        this.rank += 1;
      }
      this.rank === 8 ? this.progress = 0: this.progress -= 100;
      this.#rankUp()
    }
  }

}

module.exports = User;