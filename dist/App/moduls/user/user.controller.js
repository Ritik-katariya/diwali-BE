"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res) => {
    await user_service_1.userService.createUser(req, res);
};
const getUser = async (req, res) => {
    await user_service_1.userService.getUser(req, res);
};
const getallUsers = async (req, res) => {
    await user_service_1.userService.getallUsers(req, res);
};
exports.UserController = {
    createUser,
    getUser,
    getallUsers
};
