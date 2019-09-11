"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const captains = console;
function start() {
    if (!process.env.NODE_ENV || !process.env.PORT) {
        captains.error('ENV variables are missing.', 'Verify that you have set them directly or in a .env file.');
        process.exit(1);
    }
    else {
        captains.log('Using ENV variables');
    }
    const app = express_1.default();
    const port = process.env.PORT || 7627;
    const www = process.env.WWW || './';
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.static(www));
    captains.log(`serving ${www}`);
    app.use('/api', routes_1.router);
    app.get('*', (req, res) => {
        res.sendFile(`index.html`, { root: www });
    });
    app.listen(port, () => captains.log(`listening on http://localhost:${port}`));
}
exports.start = start;
//# sourceMappingURL=index.js.map