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
exports.EventController = void 0;
const event_service_1 = require("../services/event.service");
const sendResponse_1 = require("../utils/sendResponse");
const createEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_service_1.EventService.createEvent(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 201,
            message: "Event created successfully",
            data: event,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield event_service_1.EventService.getAllEvents(req.query);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 200,
            message: "Events fetched successfully",
            data: result.data,
            meta: result.pagination
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const event = yield event_service_1.EventService.getSingleEvent(id);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 200,
            message: "Event fetched successfully",
            data: event,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const event = yield event_service_1.EventService.updateEvent(id, req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 200,
            message: "Event updated successfully",
            data: event,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const event = yield event_service_1.EventService.deleteEvent(id);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            statusCode: 200,
            message: "Event deleted successfully",
            data: event,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.EventController = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    updateEvent,
    deleteEvent,
};
