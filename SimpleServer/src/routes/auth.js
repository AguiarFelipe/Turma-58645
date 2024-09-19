import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import {faker} from '@faker-js/faker';
import { createHash, passwordValidation } from '../utils.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email já está em uso' });
    };

    const hashedPassword = await createHash(password);
    const user = new User({ first_name, last_name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Usuário criado com sucesso' });
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    };
    const isMatch = await passwordValidation(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    };

    const token = jwt.sign({ userId: user._id }, 'secreta', { expiresIn: '1h' });
    res.json({ token });
});
 


router.get('/user', async (req, res) => {
    
    const user = {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        };
        
        const hashedPassword = await createHash(user.password);
        await User.create({ ...user, password: hashedPassword });

    res.status(201).json(user);
});

export default router;
