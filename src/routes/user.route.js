import express from 'express';
import { getAllUsers, getSingleUser, createNewUser, updateUser, deleteUser} from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getSingleUser);
userRouter.post('/', createNewUser);
userRouter.put('/:id', updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;