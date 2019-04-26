import { CosmosClient, CosmosClientOptions } from '@azure/cosmos';

const endpoint = process.env.CORE_API_URL || '';
const masterKey = process.env.CORE_API_KEY || '';
const databaseDefName = 'hero-db';
const heroContainerName = 'heroes';
const villainContainerName = 'villains';

const options: CosmosClientOptions = { endpoint, auth: { masterKey } };
const client = new CosmosClient(options);

export const containers = {
  heroes: client.database(databaseDefName).container(heroContainerName),
  villains: client.database(databaseDefName).container(villainContainerName)
};
