import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { ifrn_id = '', password = '' } = req.body;
    if (!ifrn_id || !password) return res.status(400).json({ errors: ['Credenciais inválidas'] });

    const user = await User.findOne({ where: { ifrn_id } });
    if (!user) return res.status(400).json({ errors: ['Usuário não existe'] });
    if (!(await user.isValidPassword(password))) return res.status(400).json({ errors: ['Senha invalida'] });

    const { id } = user;
    const token = jwt.sign(
      { id, ifrn_id },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );
    return res.json({ token });
  }
}

export default new TokenController();
