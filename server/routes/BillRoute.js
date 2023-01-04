import express from 'express';
import { getAllBill, saveBill } from '../controllers/BillController.js';

const router = express.Router();

router.post('/', saveBill);
router.get('/', getAllBill);

export default router;
