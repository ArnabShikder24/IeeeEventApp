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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const prisma = new client_1.PrismaClient();
const JWT_SECRET = env_1.envVars.JWT_SECRET;
const JWT_EXPIRES_IN = env_1.envVars.JWT_EXPIRES_IN;
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield prisma.users.findUnique({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatched = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Invalid credentials");
    }
    const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    });
    return {
        accessToken: token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role,
        },
    };
});
exports.AuthService = {
    loginUser,
};
