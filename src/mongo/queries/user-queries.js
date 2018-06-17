import UserModel from '../models/user';

class User {
  async static add(user) {
    const userData = { ...user, password: encryptPassword(user.password) };

    const userModel = new UserModel(userData);

    const newUser = await userModel.save();

    if (!newUser) throw new Error('Error add user');

    return newUser;
  }

  async static remove(params) {
    const removedUser = await UserModel.findByIdAndRemove(params.id).exec();

    if (!removedUser) throw new Error('Error remove user');

    return removedUser;
  }

  async static update(params) {
    const updatedUser = await UserModel.findByIdAndUpdate(params.id, {
      $set: { ...params.data },
    }).exec();

    if (!updatedUser) throw new Error('Error update user');

    return updatedUser;
  }
}

export default User;
