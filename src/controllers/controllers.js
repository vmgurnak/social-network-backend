import { getUsers } from '../services/auth-services.js';

export const getRegisterController = async (req, res) => {
  const data = await getUsers();
  res.json({ data });
};
