import express from 'express';
import { getAllRols, getSingleRol, creatNewRol, updateNowRol, deleteNowRol } from '../controller/rol.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const rolRouter = express.Router();

rolRouter.get('/', verifyToken, getAllRols);
rolRouter.get('/:id', verifyToken, getSingleRol);
rolRouter.post('/', upload.none(), verifyToken, creatNewRol);
rolRouter.put('/:id', upload.none(), verifyToken, updateNowRol);
rolRouter.delete('/:id', verifyToken, deleteNowRol);

export default rolRouter;