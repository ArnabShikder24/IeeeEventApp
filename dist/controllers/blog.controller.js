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
exports.BlogController = void 0;
const blog_service_1 = require("../services/blog.service");
const sendResponse_1 = require("../utils/sendResponse");
exports.BlogController = {
    createBlog: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const blog = yield blog_service_1.BlogService.createBlog(req.body);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 201,
                message: "Blog created successfully",
                data: blog,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    getAllBlogs: (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const blogs = yield blog_service_1.BlogService.getAllBlogs();
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 200,
                message: "All blogs fetched",
                data: blogs,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    getSingleBlog: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const blog = yield blog_service_1.BlogService.getSingleBlog(id);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 200,
                message: "Blog fetched",
                data: blog,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    updateBlog: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const blog = yield blog_service_1.BlogService.updateBlog(id, req.body);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 200,
                message: "Blog updated",
                data: blog,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    deleteBlog: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const blog = yield blog_service_1.BlogService.deleteBlog(id);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 200,
                message: "Blog deleted",
                data: blog,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    comment: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.user.id;
            const { blogId, content } = req.body;
            const result = yield blog_service_1.BlogService.addComment(userId, blogId, content);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 201,
                message: "Comment added",
                data: result,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    like: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.user.id;
            const { blogId } = req.body;
            const result = yield blog_service_1.BlogService.likeBlog(userId, blogId);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 200,
                message: "Blog liked",
                data: result,
            });
        }
        catch (err) {
            next(err);
        }
    }),
    dislike: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.user.id;
            const { blogId } = req.body;
            const result = yield blog_service_1.BlogService.dislikeBlog(userId, blogId);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: 200,
                message: "Blog disliked",
                data: result,
            });
        }
        catch (err) {
            next(err);
        }
    }),
};
