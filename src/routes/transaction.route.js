import express from 'express';
import { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } from '../controller/transaction.controller.js';

const transactionRouter = express.Router();

transactionRouter.get('/', getTransactions);
transactionRouter.get('/:id', getTransaction);
transactionRouter.post('/', createTransaction);
transactionRouter.put("/:id", updateTransaction);
transactionRouter.delete("/:id", deleteTransaction);

export default transactionRouter;