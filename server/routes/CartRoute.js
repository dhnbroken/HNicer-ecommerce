import express from 'express';
import { getCart, saveCart, updateCart } from '../controllers/CartController.js';

const router = express.Router();

router.post('/', saveCart);
router.get('/:id', getCart);
router.put('/:id', updateCart);

export default router;
