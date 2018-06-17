import { GraphQLString, GraphQLNonNull } from 'graphql';
import { userLoginType } from '../../types/user';
import UserModel from '../../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secretKey } from '../../../configs/constants';

const login = {
  type: GraphQLString,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userLoginType),
    },
  },
  async resolve(root, { data }) {
    const { email, password } = data;

    const user = await UserModel.findOne({ email }, {}, err => {
      if (err) throw new Error('Not user with this e-mail was fond!');
    });

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) throw new Error('Incorrect password!');

    const token = generateToken(user);

    return token;
  },
};

export default login;
