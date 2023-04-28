const User = require('./user')

describe(User,() => {
  it('constructs with a rank of -8 and progress of 0',() => {
    const user = new User
    expect(user.rank).toEqual(-8)
    expect(user.progress).toEqual(0)
  })

  it('increases progress by 3 when a task is completed of the same level',() => {
    const user = new User
    user.incProgress(-8)
    expect(user.progress).toEqual(3)
  })
})
