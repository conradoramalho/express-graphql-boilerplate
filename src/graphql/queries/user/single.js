import { GraphQLID, GraphQLNonNull } from 'graphql';
import { userType } from '../../types/user';
import UserModel from '../../../models/user';

const single = {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params) {
    const user = await UserModel.findById(params.id).exec();

    return user;
  },
};

export default single;
