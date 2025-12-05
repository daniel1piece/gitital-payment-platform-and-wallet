import express from 'express';
import { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } from '../controller/transaction.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const transactionRouter = express.Router();

transactionRouter.get('/', verifyToken, getTransactions);
transactionRouter.get('/:id', verifyToken, getTransaction);
transactionRouter.post('/', upload.none(), verifyToken,createTransaction);
transactionRouter.put("/:id", upload.none(), verifyToken, updateTransaction);
transactionRouter.delete("/:id", verifyToken, deleteTransaction);

export default transactionRouter;