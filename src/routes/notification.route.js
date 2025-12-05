import express from 'express';
import { getNotifications, getNotification, createNotification, updateNotification, deleteNofication } 
from '../controller/notification.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const notificationRouter = express.Router();

notificationRouter.get('/', verifyToken, getNotifications);
notificationRouter.get('/:id', verifyToken, getNotification);
notificationRouter.post('/', upload.none(), verifyToken, createNotification);
notificationRouter.put('/:id', upload.none(), verifyToken, updateNotification);
notificationRouter.delete('/:id', verifyToken, deleteNofication);

export default notificationRouter;