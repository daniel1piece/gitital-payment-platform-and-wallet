import express from 'express';
import { getAllUsers, getSingleUser, createNewUser, updateUser, deleteUser} from '../controller/user.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import {  createUserSchema } from '../schemas/user.schema.js';
import { validateSchema } from '../middlewares/validator.schema.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { readUsersPermissionAccess } from '../middlewares/access.control.middleware.js';

const userRouter = express.Router();

userRouter.get('/', upload.none(), readUsersPermissionAccess, verifyToken, getAllUsers);
userRouter.get('/:id', verifyToken, getSingleUser);
userRouter.post('/', upload.none(), validateSchema(createUserSchema), createNewUser);
userRouter.put('/:id', upload.none(), verifyToken, updateUser);
userRouter.delete("/:id", verifyToken, deleteUser);

export default userRouter;