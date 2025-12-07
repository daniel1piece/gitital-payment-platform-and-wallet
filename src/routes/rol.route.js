import express from 'express';
import { getAllRols, getSingleRol, creatNewRol, updateNowRol, deleteNowRol } from '../controller/rol.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const rolRouter = express.Router();

rolRouter.get('/', getAllRols);
rolRouter.get('/:id', getSingleRol);
rolRouter.post('/', upload.none(), creatNewRol);
rolRouter.put('/:id', upload.none(), updateNowRol);
rolRouter.delete('/:id', deleteNowRol);

export default rolRouter;