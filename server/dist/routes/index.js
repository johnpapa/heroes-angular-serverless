"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const hero_routes_1 = require("./hero.routes");
const villain_routes_1 = require("./villain.routes");
router.use('/', hero_routes_1.heroRoutes);
router.use('/', villain_routes_1.villainRoutes);
//# sourceMappingURL=index.js.map