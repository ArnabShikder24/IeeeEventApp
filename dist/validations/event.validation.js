"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = exports.AgendaItemSchema = exports.SpeakerSchema = exports.HighlightSchema = exports.EventSchema = void 0;
const zod_1 = require("zod");
exports.EventSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    subtitle: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    date: zod_1.z.date(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    venue: zod_1.z.string(),
    attendeesCount: zod_1.z.number(),
    prerequisites: zod_1.z.string().optional(),
    registrationFee: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.HighlightSchema = zod_1.z.object({
    id: zod_1.z.number(),
    text: zod_1.z.string(),
    eventId: zod_1.z.number(),
});
exports.SpeakerSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    title: zod_1.z.string(),
    imageUrl: zod_1.z.string().url().optional(),
    eventId: zod_1.z.number(),
});
exports.AgendaItemSchema = zod_1.z.object({
    id: zod_1.z.number(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    topic: zod_1.z.string(),
    eventId: zod_1.z.number(),
});
exports.TagSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
