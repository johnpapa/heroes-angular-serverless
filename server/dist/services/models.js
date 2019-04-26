"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.id = `Hero${this.name}`;
    }
}
exports.Hero = Hero;
class Villain {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.id = `Villain${this.name}`;
    }
}
exports.Villain = Villain;
//# sourceMappingURL=models.js.map