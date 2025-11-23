import express from 'express';
import { getAllRols, getSingleRol, creatNewRol, updateNowRol, deleteNowRol } from '../controller/rol.controller.js';

const rolRouter = express.Router();

rolRouter.get('/', getAllRols);
rolRouter.get('/:id', getSingleRol);
rolRouter.post('/', creatNewRol);
rolRouter.put('/:id', updateNowRol);
rolRouter.delete('/:id', deleteNowRol);

export default rolRouter;