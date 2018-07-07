import { GraphQLNonNull, GraphQLID } from 'graphql';
import { userType, userInputType } from '../../types/user';
import UserModel from '../../../mongo/models/user';

const update = {
  type: userType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID),
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType),
    },
  },
  async resolve(root, params) {
    const updatedUser = await UserModel.findByIdAndUpdate(params.id, {
      $set: { ...params.data },
    }).exec();

    if (!updatedUser) throw new Error('Error update user');

    return updatedUser;
  },
};

export default update;
