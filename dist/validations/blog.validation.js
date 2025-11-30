"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DislikeSchema = exports.LikeSchema = exports.CommentSchema = exports.BlogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.BlogSchema = zod_1.default.object({
    id: zod_1.default.number(),
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    createdAt: zod_1.default.date(),
});
exports.CommentSchema = zod_1.default.object({
    id: zod_1.default.number(),
    content: zod_1.default.string(),
    createdAt: zod_1.default.date(),
    blogId: zod_1.default.number(),
    userId: zod_1.default.number(),
});
exports.LikeSchema = zod_1.default.object({
    id: zod_1.default.number(),
    blogId: zod_1.default.number(),
    userId: zod_1.default.number(),
});
exports.DislikeSchema = zod_1.default.object({
    id: zod_1.default.number(),
    blogId: zod_1.default.number(),
    userId: zod_1.default.number(),
});
// export const BlogWithCommentsSchema = BlogSchema.extend({
//   comments: z.array(CommentSchema),
//   likes: z.array(LikeSchema),
//   dislikes: z.array(DislikeSchema),
// });
