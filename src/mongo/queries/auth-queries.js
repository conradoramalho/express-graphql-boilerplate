class Auth {
  async login(data) {
    const { email, password } = data;

    const user = await UserModel.findOne({ email }, {}, err => {
      if (err) throw new Error('Not user with this e-mail was fond!');
    });

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) throw new Error('Incorrect password!');

    const token = generateToken(user);

    return token;
  }
}
