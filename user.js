class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(num) {
    if (num === this.rank) {
      this.progress += 3
    } else {
      let difference = this.rank - num
      const addition = difference * difference * 10
      this.progress += addition
    }
  }

}

module.exports = User;