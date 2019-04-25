// @ts-check

const cosmos = require('@azure/cosmos');

const endpoint = process.env.CORE_API_URL;
const masterKey = process.env.CORE_API_KEY;
const databaseDefName = 'vikings-db';
const heroContainerName = 'heroes';
const villainContainerName = 'villains';
const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, auth: { masterKey } });

const containers = {
  heroes: client.database(databaseDefName).container(heroContainerName),
  villains: client.database(databaseDefName).container(villainContainerName)
};

module.exports = { containers };
