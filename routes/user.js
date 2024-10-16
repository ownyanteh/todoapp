// import router
import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.js";
import { userProfileUpload } from "../middlewares/upload.js";


// create router
const userRouter = Router();

// define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.post('users/logout', logoutUser);

userRouter.post('/users/me', userProfileUpload.single('avatar'), updateProfile);

export default userRouter;