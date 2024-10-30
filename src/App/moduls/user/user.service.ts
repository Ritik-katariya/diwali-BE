import { Request, Response } from "express";
import { User } from "@prisma/client";
import { prisma } from "../../Shared/prisma";
import { CloudinaryHelper } from "../../../helpers/uploadHelper";

const createUser = async (req: Request, res: Response) => {
    const data = { ...req.body }; // Spread request body for expected fields

    if (req.file) {
        const img = await CloudinaryHelper.uploadFile(req.file);
        data.img = img.secure_url;  // Ensure img is correctly assigned
    }

    try {
        const newUser: User = await prisma.user.create({ data });
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            result: newUser,
        });
    } catch (error: any) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message,
        });
    }
};

const getUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.params.id },
        });
        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            result: user,
        });
    } catch (error: any) {
        console.error("Error retrieving user:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve user",
            error: error.message,
        });
    }
};
const getallUsers = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findMany();
        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            result: user,
        });
    } catch (error: any) {
        console.error("Error retrieving user:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve user",
            error: error.message,
        });
    }
};

export const userService = {
    createUser,
    getUser,
    getallUsers
};
