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
    return await UserModel.findById(params.id).exec();
  },
};

export default single;
