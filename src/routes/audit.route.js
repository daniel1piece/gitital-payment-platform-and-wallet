import express from 'express';
import { createAudit, getAudit, getAudits, updateAudit, deleteAudit } from '../controller/audit.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';


const auditRouter = express.Router();

auditRouter.get('/', verifyToken, getAudits);
auditRouter.get('/:id', verifyToken, getAudit);
auditRouter.post('/', upload.none(), verifyToken, createAudit);
auditRouter.put('/:id', upload.none(), verifyToken, updateAudit);
auditRouter.delete('/:id', verifyToken, deleteAudit);

export default auditRouter;