import express from 'express';
import { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } from '../controller/transaction.controller.js';
import { upload } from '../middlewares/upload.middleware.js';

const transactionRouter = express.Router();

transactionRouter.get('/', getTransactions);
transactionRouter.get('/:id', getTransaction);
transactionRouter.post('/', upload.none(),createTransaction);
transactionRouter.put("/:id", upload.none(), updateTransaction);
transactionRouter.delete("/:id", deleteTransaction);

export default transactionRouter;