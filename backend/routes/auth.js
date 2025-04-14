import { Router } from 'express';

const router = Router();

const user = {
  username: "admin",
  password: "admin"
}

// POST /api/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.status(201).json({ success: true, message: 'Login exitoso', token: 'FAKE_TOKEN' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
});

export default router;