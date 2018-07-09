import jwt from 'jsonwebtoken';
import { secretKey } from '../environment';

const userResolver = async (req, res, next) => {
  const token = req.headers.authentication;
  const { user } = await getCurrentUser(token);

  req.user = user;

  next();
};

const getCurrentUser = async token => {
  if (!token) return { user: null };

  try {
    const { user } = await jwt.verify(token, secretKey);

    return user;
  } catch (err) {
    return { user: null };
  }
};

export { userResolver };
