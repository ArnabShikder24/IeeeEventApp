"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("../controllers/blog.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
const user_interface_1 = require("../interfaces/user.interface");
const router = express_1.default.Router();
// All blogs
router.get("/", blog_controller_1.BlogController.getAllBlogs);
router.get("/:id", blog_controller_1.BlogController.getSingleBlog);
// Protected routes
router.post("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator), blog_controller_1.BlogController.createBlog);
router.patch("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator), blog_controller_1.BlogController.updateBlog);
router.delete("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin), blog_controller_1.BlogController.deleteBlog);
router.post("/comment", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator, user_interface_1.Role.member), blog_controller_1.BlogController.comment);
router.post("/like", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator, user_interface_1.Role.member), blog_controller_1.BlogController.like);
router.post("/dislike", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator, user_interface_1.Role.member), blog_controller_1.BlogController.dislike);
exports.BlogRoutes = router;
