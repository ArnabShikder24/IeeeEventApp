"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const sendResponse_1 = require("../utils/sendResponse");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.UserService.createUser(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 201,
            message: "User created Successfully!",
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
});
const getUserProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            return (0, sendResponse_1.sendResponse)(res, {
                success: false,
                statusCode: 401,
                message: "Unauthorized",
                data: null,
            });
        }
        const userProfile = yield user_service_1.UserService.getUserById(req.user.id);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 200,
            message: "User profile retrieved successfully!",
            data: userProfile,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createUser,
    getUserProfile,
};
