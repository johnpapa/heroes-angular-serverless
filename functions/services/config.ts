import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.CORE_API_URL;
const masterKey = process.env.CORE_API_KEY;
const databaseDefName = 'hero-db';
const heroContainerName = 'heroes';
const villainContainerName = 'villains';

const client = new CosmosClient({ endpoint, key: masterKey });

const containers = {
  heroes: client.database(databaseDefName).container(heroContainerName),
  villains: client.database(databaseDefName).container(villainContainerName)
};

export default containers;
