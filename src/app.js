import express from 'express';
import cors from 'cors';
import rolRouter from './routes/rol.route.js';

const app = express();

// middlewares
// Frontend port (only accepts origin from localhost port 5501)
app.use(cors({origin: 'http://127.0.0.1:5501'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/rols/', rolRouter);

export default app;
