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
  })
})
