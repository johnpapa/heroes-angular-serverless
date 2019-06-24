"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cosmos_1 = require("@azure/cosmos");
const endpoint = process.env.CORE_API_URL || '';
const masterKey = process.env.CORE_API_KEY || '';
const databaseDefName = 'hero-db';
const heroContainerName = 'heroes';
const villainContainerName = 'villains';
const options = { endpoint, auth: { masterKey } };
const client = new cosmos_1.CosmosClient(options);
exports.containers = {
    heroes: client.database(databaseDefName).container(heroContainerName),
    villains: client.database(databaseDefName).container(villainContainerName)
};
//# sourceMappingURL=config.js.map