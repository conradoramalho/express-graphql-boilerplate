import UserModel from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Auth {
  async _generateToken ({ id, name, lastName, type, email }) {
    const user = { id, name, lastName, type, email };
    const token = await jwt.sign({ user }, secretKey, { expiresIn: '1h' });

    return token;
  };


  async static login(data) {
    const { email, password } = data;

    const user = await UserModel.findOne({ email }, {}, err => {
      if (err) throw new Error('Not user with this e-mail was fond!');
    });

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) throw new Error('Incorrect password!');

    const token = this._generateToken(user);

    return token;
  }
}
