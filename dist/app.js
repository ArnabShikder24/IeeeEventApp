"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const error_middleware_1 = require("./middlewares/error.middleware");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// CORS configuration
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:3000', // React/Next.js development
        'http://localhost:3001', // Alternative frontend port
        'http://127.0.0.1:3000', // Alternative localhost format
    ],
    credentials: true, // Allow cookies and auth headers
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.json());
app.use("/api/", routes_1.router);
app.get('/', (req, res) => {
    res.send('Welcome to PUC IEEE Event App');
});
app.use(error_middleware_1.errorHandler);
exports.default = app;
