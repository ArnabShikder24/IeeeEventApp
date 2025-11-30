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
exports.AuthController = void 0;
const sendResponse_1 = require("../utils/sendResponse");
const auth_service_1 = require("../services/auth.service");
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthService.loginUser(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 200,
            message: "User logged in successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.AuthController = {
    loginUser,
};
