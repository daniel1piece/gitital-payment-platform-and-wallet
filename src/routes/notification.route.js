import express from 'express';
import { getNotifications, getNotification, createNotification, updateNotification, deleteNofication } 
from '../controller/notification.controller.js';

const notificationRouter = express.Router();

notificationRouter.get('/', getNotifications);
notificationRouter.get('/:id', getNotification);
notificationRouter.post('/', createNotification);
notificationRouter.put('/:id', updateNotification);
notificationRouter.delete('/:id', deleteNofication);

export default notificationRouter;