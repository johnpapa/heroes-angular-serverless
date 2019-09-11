"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const { heroes: container } = config_1.default;
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
function postHero(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const hero = {
            name: req.body.name,
            description: req.body.description,
            id: undefined
        };
        hero.id = `Hero${hero.name}`;
        try {
            const { body } = yield container.items.create(hero);
            res.status(201).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
function putHero(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const hero = {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description
        };
        try {
            const { body } = yield container.items.upsert(hero);
            res.status(200).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
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
exports.default = { getHeroes, postHero, putHero, deleteHero };
//# sourceMappingURL=hero.service.js.map