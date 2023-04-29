class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(num) {
    if (num === -8) {
      this.progress += 3;
    } else if (num === -7) {
      this.progress += 10;
    } else if (num === -6) {
      this.progress += 40
    }
  }
}

module.exports = User;