import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({
    dest: 'upload/'
});

export const todoRemoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/todo-api/todos/*'
    }),
    preseverPath: true
});

export const userProfileUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/todo-api/user/profile/*'
    }),
    preseverPath: true
});