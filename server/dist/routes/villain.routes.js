"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const services_1 = require("../services");
exports.villainRouter = express.Router();
exports.villainRouter.get('/villains', (req, res) => {
    services_1.villainService.getVillains(req, res);
});
exports.villainRouter.post('/villain', (req, res) => {
    services_1.villainService.postVillain(req, res);
});
exports.villainRouter.put('/villain/:id', (req, res) => {
    services_1.villainService.putVillain(req, res);
});
exports.villainRouter.delete('/villain/:id', (req, res) => {
    services_1.villainService.deleteVillain(req, res);
});
//# sourceMappingURL=villain.routes.js.map