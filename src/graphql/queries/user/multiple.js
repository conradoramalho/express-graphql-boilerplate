import { GraphQLList } from 'graphql';
import { userType } from '../../types/user';
import UserModel from '../../../mongo/models/user';

const multiple = {
  type: new GraphQLList(userType),
  async resolve() {
    const users = await UserModel.find({}, {}, err => {
      if (err) throw err;
    });

    return users;
  },
};

export default multiple;
