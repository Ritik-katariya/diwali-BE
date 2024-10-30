import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    await userService.createUser(req, res);
};

const getUser = async (req: Request, res: Response) => {
    await userService.getUser(req, res);
};
const getallUsers = async (req: Request, res: Response) => {
    await userService.getallUsers(req, res);
};

export const UserController = {
    createUser,
    getUser,
    getallUsers
};
