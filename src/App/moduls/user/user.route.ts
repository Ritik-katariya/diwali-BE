import express from 'express';
import { UserController } from './user.controller';
import { CloudinaryHelper } from '../../../helpers/uploadHelper';

const router = express.Router();

// Define routes
router.post(
    '/',
    CloudinaryHelper.upload.single('file'), // Handle single file uploads
    UserController.createUser
);

router.get('/', UserController.getallUsers);
router.get('/:id', UserController.getUser);

export const userRoutes = router;
