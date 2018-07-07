import { GraphQLNonNull } from 'graphql';
import { userType, userInputType } from '../../types/user';
import UserModel from '../../../mongo/models/user';
import bcrypt from 'bcryptjs';

const add = {
  type: userType,
  args: {
    user: {
      name: 'user',
      type: new GraphQLNonNull(userInputType),
    },
  },
  async resolve(root, { user }) {
    const userData = { ...user, password: encryptPassword(user.password) };

    const userModel = new UserModel(userData);

    const newUser = await userModel.save();

    if (!newUser) throw new Error('Error add user');

    return newUser;
  },
};

const encryptPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);

  return encryptedPassword;
};

export default add;
