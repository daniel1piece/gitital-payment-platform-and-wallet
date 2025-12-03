import express from 'express';
import { getAllUsers, getSingleUser, createNewUser, updateUser, deleteUser} from '../controller/user.controller.js';
import { upload } from '../middlewares/upload.middleware.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getSingleUser);
userRouter.post('/', upload.none(), createNewUser);
userRouter.put('/:id', upload.none(), updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;