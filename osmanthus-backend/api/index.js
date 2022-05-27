import express from 'express';
import userApi from './user.js';

const router = express.Router();

router.use('/user', userApi);

export default router;
