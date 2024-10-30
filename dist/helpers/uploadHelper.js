"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryHelper = void 0;
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../config/config"));
const multer_1 = __importDefault(require("multer"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary.name,
    api_key: config_1.default.cloudinary.key,
    api_secret: config_1.default.cloudinary.secret,
});
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
const uploadFile = async (file) => {
    if (!file || !file.buffer) {
        throw new Error('File not provided or invalid');
    }
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader.upload_stream({ resource_type: 'auto', folder: 'dewali' }, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        }).end(file.buffer);
    });
};
exports.CloudinaryHelper = {
    uploadFile,
    upload,
};
