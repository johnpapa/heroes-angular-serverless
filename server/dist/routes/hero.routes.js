"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const services_1 = require("../services");
exports.heroRouter = express.Router();
exports.heroRouter.get('/heroes', (req, res) => {
    services_1.heroService.getHeroes(req, res);
});
exports.heroRouter.post('/hero', (req, res) => {
    services_1.heroService.postHero(req, res);
});
exports.heroRouter.put('/hero/:id', (req, res) => {
    services_1.heroService.putHero(req, res);
});
exports.heroRouter.delete('/hero/:id', (req, res) => {
    services_1.heroService.deleteHero(req, res);
});
//# sourceMappingURL=hero.routes.js.map