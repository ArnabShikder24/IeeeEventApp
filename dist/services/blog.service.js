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
exports.BlogService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.blog.create({
        data: payload,
    });
});
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.blog.findMany({
        include: {
            comments: true,
            likes: true,
            dislikes: true,
        },
        orderBy: { createdAt: "desc" },
    });
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.blog.findUnique({
        where: { id },
        include: {
            comments: {
                include: {
                    user: true,
                },
            },
            likes: true,
            dislikes: true,
        },
    });
});
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.blog.update({
        where: { id },
        data: payload,
    });
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.blog.delete({
        where: { id },
    });
});
const addComment = (userId, blogId, content) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.comment.create({
        data: {
            userId,
            blogId,
            content,
        },
        include: {
            user: true,
        },
    });
});
const likeBlog = (userId, blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const alreadyLiked = yield prisma.like.findFirst({
        where: { userId, blogId },
    });
    if (alreadyLiked) {
        throw new Error("You already liked this blog");
    }
    yield prisma.dislike.deleteMany({ where: { userId, blogId } });
    return yield prisma.like.create({
        data: { userId, blogId },
    });
});
const dislikeBlog = (userId, blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const alreadyDisliked = yield prisma.dislike.findFirst({
        where: { userId, blogId },
    });
    if (alreadyDisliked) {
        throw new Error("You already disliked this blog");
    }
    yield prisma.like.deleteMany({ where: { userId, blogId } });
    return yield prisma.dislike.create({
        data: { userId, blogId },
    });
});
exports.BlogService = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
    addComment,
    likeBlog,
    dislikeBlog
};
