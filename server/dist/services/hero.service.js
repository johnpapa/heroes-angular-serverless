"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Context } from '@azure/functions';
const config_1 = require("./config");
const models_1 = require("./models");
const { heroes: container } = config_1.containers;
function getHeroes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { result: heroes } = yield container.items.readAll().toArray();
            res.status(200).json(heroes);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.getHeroes = getHeroes;
function postHero(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const hero = new models_1.Hero(req.body.name, req.body.description);
        try {
            const { body } = yield container.items.create(hero);
            res.status(201).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.postHero = postHero;
function putHero(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const hero = new models_1.Hero(req.body.name, req.body.description, req.params.id);
        try {
            const { body } = yield container.items.upsert(hero);
            res.status(200).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.putHero = putHero;
function deleteHero(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const { body } = yield container.item(id).delete();
            res.status(200).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.deleteHero = deleteHero;
//# sourceMappingURL=hero.service.js.map