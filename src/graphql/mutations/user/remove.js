import { GraphQLNonNull, GraphQLID } from "graphql";
import { userType } from "../../types/user";
import UserModel from "../../../models/user";

const remove = {
  type: userType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(root, params) {
    const removedUser = await UserModel.findByIdAndRemove(params.id).exec();

    if (!removedUser) throw new Error("Error remove user");

    return removedUser;
  }
};

export default remove;
