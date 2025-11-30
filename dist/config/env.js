"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loadEnvVariables = () => {
    const requiredEnvVariables = [
        "DATABASE_URL",
        "PORT",
        "JWT_SECRET",
        "JWT_EXPIRES_IN"
    ];
    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variables ${key}`);
        }
    });
    return {
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: process.env.PORT,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
    };
};
exports.envVars = loadEnvVariables();
