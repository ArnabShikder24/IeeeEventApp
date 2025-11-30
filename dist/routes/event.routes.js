"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("../controllers/event.controller");
const checkAuth_1 = require("../middlewares/checkAuth");
const user_interface_1 = require("../interfaces/user.interface");
const router = express_1.default.Router();
// Public routes
router.get("/", event_controller_1.EventController.getAllEvents);
router.get("/:id", event_controller_1.EventController.getSingleEvent);
// Admin/moderator-only routes
router.post("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator), event_controller_1.EventController.createEvent);
router.patch("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator), event_controller_1.EventController.updateEvent);
router.delete("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.admin, user_interface_1.Role.moderator), event_controller_1.EventController.deleteEvent);
exports.EventRoutes = router;
