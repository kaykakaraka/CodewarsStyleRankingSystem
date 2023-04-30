const User = require('./user')

describe(User,() => {
  it('constructs with a rank of -8 and progress of 0',() => {
    const user = new User
    expect(user.rank).toEqual(-8)
    expect(user.progress).toEqual(0)
  })

  it('increases progress by 3 each time a task is completed of the same level',() => {
    const user = new User
    user.incProgress(-8)
    expect(user.progress).toEqual(3)
    user.incProgress(-8)
    expect(user.progress).toEqual(6)
    user.incProgress(-8)
    expect(user.progress).toEqual(9)
  })

  it('increases progress by 10 when task is completed of the level above',() => {
    const user = new User
    user.incProgress(-7)
    expect(user.progress).toEqual(10)
    user.incProgress(-7)
    expect(user.progress).toEqual(20)
  })

  it('increases by 40 when the task completed is of 2 levels above',() => {
    const user = new User
    user.incProgress(-6)
    expect(user.progress).toEqual(40)
  })

  it('increases by 90 when the task completed is of 3 levels above',() => {
    const user = new User
    user.incProgress(-5)
    expect(user.progress).toEqual(90)
  })

  it('ranks up and resets progress to 0 when 100 progress is reached',() => {
    const user = new User
    user.incProgress(-5)
    user.incProgress(-7)
    expect(user.rank).toEqual(-7)
    expect(user.progress).toEqual(0)
  })

  it('increases progress by 1 when the activity completed is one level below',() => {
    const user = new User
    user.incProgress(-4)
    expect(user.rank).toEqual(-7)
    expect(user.progress).toEqual(60)
    user.incProgress(-8)
    expect(user.progress).toEqual(61)
  })

  it('does not increase progress when the activity completed is two levels or more below',() => {
    const user = new User
    user.incProgress(-4)
    expect(user.rank).toEqual(-7)
    user.incProgress(-3)
    expect(user.rank).toEqual(-5)
    expect(user.progress).toEqual(20)
    user.incProgress(-7)
    expect(user.progress).toEqual(20)
    user.incProgress(-8)
    expect(user.progress).toEqual(20)
  })

  it('increases by 2 ranks when reaching over 200 progress in one go',() => {
    const user = new User;
    user.incProgress(-3)
    expect(user.rank).toEqual(-6)
    expect(user.progress).toEqual(50)
  })

  it('counts again from zero after ranking up',() => {
    const user = new User
    user.incProgress(-5)
    user.incProgress(-5)
    expect(user.rank).toEqual(-7)
    expect(user.progress).toEqual(80)
  })

  it('correctly progresses through each level to -2',() => {
    const user = new User
    user.incProgress(-5)
    user.incProgress(-5)
    expect(user.rank).toEqual(-7)
    user.incProgress(-4)
    expect(user.rank).toEqual(-6)
    expect(user.progress).toEqual(70)
    user.incProgress(-4)
    expect(user.rank).toEqual(-5)
    expect(user.progress).toEqual(10)
    user.incProgress(-2)
    expect(user.rank).toEqual(-4)
    expect(user.progress).toEqual(0)
    user.incProgress(-1)
    user.incProgress(-1)
    expect(user.rank).toEqual(-3)
    expect(user.progress).toEqual(80)
    user.incProgress(-1)
    expect(user.rank).toEqual(-2)
    expect(user.progress).toEqual(20)
  })

  it('skips rank 0 when calculating progress',() => {
    const user = new User
    user.incProgress(1)
    expect(user.progress).toEqual(40)
    expect(user.rank).toEqual(-2)
    user.incProgress(2)
    expect(user.progress).toEqual(30)
    expect(user.rank).toEqual(-1)
  })

  it('skips rank 0 when calculating rank',() => {
    const user = new User
    user.incProgress(1)
    user.incProgress(2)
    user.incProgress(3)
    expect(user.rank).toEqual(1)
    expect(user.progress).toEqual(20)
  })

  it('correctly calculate score when rank is 1 and activity is -1',() => {
    const user = new User
    user.incProgress(1)
    user.incProgress(2)
    user.incProgress(3)
    user.incProgress(-1)
    expect(user.progress).toEqual(21)
  })

  it('does not progress any further once rank is 8',() => {
    const user = new User
    user.incProgress(3)
    while (user.rank < 8) {
      user.incProgress(8)
    }
    user.incProgress(8)
    expect(user.progress).toEqual(0)
    expect(user.rank).toEqual(8)
  })

  it('sets progress to 0 when you reach rank 8, even if there is additional progress',() => {
    const user = new User
    // user.incProgress(4)
    while (user.rank < 8) {
      user.incProgress(8)
    }
    expect(user.progress).toEqual(0)
  })
})
