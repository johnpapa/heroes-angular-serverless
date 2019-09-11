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
const { villains: container } = config_1.default;
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
function postVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const villain = {
            name: req.body.name,
            description: req.body.description,
            id: undefined
        };
        villain.id = `Villain${villain.name}`;
        try {
            const { body } = yield container.items.create(villain);
            res.status(201).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
function putVillain(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const villain = {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description
        };
        try {
            const { body } = yield container.items.upsert(villain);
            res.status(200).json(body);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
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
exports.default = { getVillains, postVillain, putVillain, deleteVillain };
//# sourceMappingURL=villain.service.js.map