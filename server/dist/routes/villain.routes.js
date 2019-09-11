"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const services_1 = require("../services");
const router = express.Router();
router.get('/villains', (req, res) => {
    services_1.villainService.getVillains(req, res);
});
router.post('/villain', (req, res) => {
    services_1.villainService.postVillain(req, res);
});
router.put('/villain/:id', (req, res) => {
    services_1.villainService.putVillain(req, res);
});
router.delete('/villain/:id', (req, res) => {
    services_1.villainService.deleteVillain(req, res);
});
exports.villainRoutes = router;
//# sourceMappingURL=villain.routes.js.map