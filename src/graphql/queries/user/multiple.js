import { GraphQLList } from 'graphql';
import { userType } from '../../types/user';
import UserModel from '../../../models/user';

const multiple = {
  type: new GraphQLList(userType),
  async resolve() {
    return await UserModel.find({}, {}, err => {
      if (err) throw err;
    });
  },
};

export default multiple;
