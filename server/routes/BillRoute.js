import express from 'express';
import { getAllBill, saveBill, getBill, updateBill, deleteBill } from '../controllers/BillController.js';

const router = express.Router();

router.post('/', saveBill);
router.get('/', getAllBill);
router.get('/:id', getBill);
router.put('/:id', updateBill);
router.delete('/:id', deleteBill);

export default router;
