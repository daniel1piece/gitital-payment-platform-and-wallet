import express from 'express';
import cors from 'cors';
import rolRouter from './routes/rol.route.js';
import userRouter from './routes/user.route.js';
import transactionRouter from './routes/transaction.route.js';
import notificationRouter from './routes/notification.route.js';
import auditRouter from './routes/audit.route.js';
import authRouter from './routes/auth.route.js';
import helmet from 'helmet';

const app = express();

// middlewares
app.use(helmet()); // security for headers
// Frontend port (only accepts origin from localhost port 5501)
// Module for the origin policy
app.use(cors({origin: 'http://127.0.0.1:5501'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/rols/', rolRouter);
app.use('/api/v1/users/', userRouter);
app.use('/api/v1/transactions/', transactionRouter);
app.use('/api/v1/notifications/', notificationRouter);
app.use('/api/v1/audits/', auditRouter);

export default app;
