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
const config_1 = require("./config");
const models_1 = require("./models");
const { villains: container } = config_1.containers;
function getVillains(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { result: villains } = yield container.items.readAll().toArray();
            res.status(200).json(villains);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.getVillains = getVillains;
function postVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const villain = new models_1.Villain(req.body.name, req.body.description);
        try {
            const { body } = yield container.items.create(villain);
            res.status(201).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.postVillain = postVillain;
function putVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const villain = new models_1.Villain(req.body.name, req.body.description, req.params.id);
        try {
            const { body } = yield container.items.upsert(villain);
            res.status(200).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.putVillain = putVillain;
function deleteVillain(req, res) {
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
exports.deleteVillain = deleteVillain;
//# sourceMappingURL=villain.service.js.map