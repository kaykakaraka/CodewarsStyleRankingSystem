const User = require('./user')

describe(User,() => {
  it('constructs with a rank of -8',() => {
    const user = new User
    expect(user.rank).toEqual(-8)
  })
})
