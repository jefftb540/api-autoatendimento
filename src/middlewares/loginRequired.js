import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) { return res.status(401).json({ errors: ['Login Required'] }); }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, ifrn_id } = data;

    const user = await User.findOne({
      where: {
        id,
        ifrn_id,
      },
    });
    if (!user) return res.status(401).json({ errors: ['Login required'] });
    req.userId = id;
    req.ifrn_id = ifrn_id;
    return next();
  } catch (e) {
    console.log('e');
  }
};
