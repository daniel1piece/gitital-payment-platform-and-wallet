import express from 'express';
import { createAudit, getAudit, getAudits, updateAudit } from '../controller/audit.controller.js';


const auditRouter = express.Router();

auditRouter.get('/', getAudits);
auditRouter.get('/:id', getAudit);
auditRouter.post('/', createAudit);
auditRouter.put('/:id', updateAudit);

export default auditRouter;