"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.RoleEnum = void 0;
const zod_1 = require("zod");
exports.RoleEnum = zod_1.z.enum(["admin", "moderator", "member"]);
exports.UserSchema = zod_1.z.object({
    firstname: zod_1.z.string(),
    lastname: zod_1.z.string(),
    email: zod_1.z
        .string()
        .email({ message: "Invalid email address format." }),
    student_id: zod_1.z.string(),
    department: zod_1.z.string(),
    password: zod_1.z.string(),
    role: exports.RoleEnum.default("member").optional(),
});
