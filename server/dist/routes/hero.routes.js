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
router.get('/heroes', (req, res) => {
    services_1.heroService.getHeroes(req, res);
});
router.post('/hero', (req, res) => {
    services_1.heroService.postHero(req, res);
});
router.put('/hero/:id', (req, res) => {
    services_1.heroService.putHero(req, res);
});
router.delete('/hero/:id', (req, res) => {
    services_1.heroService.deleteHero(req, res);
});
// TODO: example of SQL query
// Learn more here: https://www.documentdb.com/sql/demo
// router.get('/hero/querybyname/:name', (req, res) => {
//   heroService.queryHeroesNyName(req, res);
// });
exports.heroRoutes = router;
//# sourceMappingURL=hero.routes.js.map