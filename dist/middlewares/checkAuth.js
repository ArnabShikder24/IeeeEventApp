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
exports.checkAuth = void 0;
const env_1 = require("../config/env");
const client_1 = require("@prisma/client");
const jwt_1 = require("../utils/jwt");
const prisma = new client_1.PrismaClient();
const checkAuth = (...authRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            throw new Error("No token received");
        }
        const verifiedToken = (0, jwt_1.verifyToken)(accessToken, env_1.envVars.JWT_SECRET);
        const user = yield prisma.users.findUnique({
            where: { email: verifiedToken.email },
        });
        if (!user) {
            throw new Error("User does not exist");
        }
        if (!authRoles.includes(user.role)) {
            throw new Error("Access denied");
        }
        req.user = Object.assign(Object.assign({}, verifiedToken), { id: user.id, role: user.role });
        next();
    }
    catch (error) {
        console.error("JWT Auth Error:", error);
        next(error);
    }
});
exports.checkAuth = checkAuth;
