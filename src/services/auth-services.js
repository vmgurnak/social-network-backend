import Users from '../db/models/User.js';

export const getUsers = async () => {
  const users = await Users.find();
  return users;
};
