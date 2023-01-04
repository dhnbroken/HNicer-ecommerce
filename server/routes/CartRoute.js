import express from 'express';
import { deleteCart, getCart, saveCart, updateCart } from '../controllers/CartController.js';

const router = express.Router();

router.post('/', saveCart);
router.get('/:id', getCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);

export default router;
