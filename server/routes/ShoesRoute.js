import express from 'express';
import { createShoes, deleteShoes, getAllShoes, getShoes } from '../controllers/ShoesController.js';

const router = express.Router();

router.post('/', createShoes);
router.get('/', getAllShoes);
router.get('/:id', getShoes);
router.delete('/:id', deleteShoes);

export default router;
