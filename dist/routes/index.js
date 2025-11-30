"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("./user.route");
const auth_routes_1 = require("./auth.routes");
const event_routes_1 = require("./event.routes");
const blog_routes_1 = require("./blog.routes");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes
    },
    {
        path: "/auth",
        route: auth_routes_1.AuthRoutes
    },
    {
        path: "/event",
        route: event_routes_1.EventRoutes
    },
    {
        path: "/blog",
        route: blog_routes_1.BlogRoutes
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
