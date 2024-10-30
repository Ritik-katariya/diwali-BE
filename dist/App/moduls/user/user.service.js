"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const prisma_1 = require("../../Shared/prisma");
const uploadHelper_1 = require("../../../helpers/uploadHelper");
const createUser = async (req, res) => {
    const data = { ...req.body }; // Spread request body for expected fields
    if (req.file) {
        const img = await uploadHelper_1.CloudinaryHelper.uploadFile(req.file);
        data.img = img.secure_url; // Ensure img is correctly assigned
    }
    try {
        const newUser = await prisma_1.prisma.user.create({ data });
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            result: newUser,
        });
    }
    catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message,
        });
    }
};
const getUser = async (req, res) => {
    try {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: req.params.id },
        });
        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            result: user,
        });
    }
    catch (error) {
        console.error("Error retrieving user:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve user",
            error: error.message,
        });
    }
};
const getallUsers = async (req, res) => {
    try {
        const user = await prisma_1.prisma.user.findMany();
        return res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            result: user,
        });
    }
    catch (error) {
        console.error("Error retrieving user:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve user",
            error: error.message,
        });
    }
};
exports.userService = {
    createUser,
    getUser,
    getallUsers
};
