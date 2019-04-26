"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hero_routes_1 = require("./hero.routes");
const villain_routes_1 = require("./villain.routes");
exports.router = express.Router();
exports.router.use('/', hero_routes_1.heroRouter);
exports.router.use('/', villain_routes_1.villainRouter);
//# sourceMappingURL=index.js.map