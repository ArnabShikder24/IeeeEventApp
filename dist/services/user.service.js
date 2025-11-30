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
exports.UserService = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, student_id, department, password, role } = payload;
    const isUserExists = yield prisma.users.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (isUserExists) {
        throw new Error("user already exists");
    }
    if (!firstname ||
        !lastname ||
        !email ||
        !student_id ||
        !department ||
        !password) {
        throw new Error("Missing required fields");
    }
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    if (!hashedPassword) {
        throw new Error("password Missing");
    }
    const user = yield prisma.users.create({
        data: {
            firstname,
            lastname,
            email,
            student_id,
            department,
            password: hashedPassword,
            role: role || "member",
        },
    });
    return user;
});
exports.createUser = createUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.users.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            student_id: true,
            department: true,
            role: true,
            createdAt: true,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
});
exports.UserService = {
    createUser: exports.createUser,
    getUserById
};
