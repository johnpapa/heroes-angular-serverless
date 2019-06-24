// @ts-check
require('dotenv').config(); // eslint-disable-line

const { exit } = require('./exit');
const { heroes } = require('./heroes');
const { villains } = require('./villains');

const captains = console;
const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.CORE_API_URL || '';
const masterKey = process.env.CORE_API_KEY || '';
const databaseDefName = 'hero-db';
const heroContainerName = 'heroes';
const villainContainerName = 'villains';

const options = { endpoint, auth: { masterKey } };
const client = new CosmosClient(options);

const containers = {
  heroes: client.database(databaseDefName).container(heroContainerName),
  villains: client.database(databaseDefName).container(villainContainerName)
};

go()
  .then(() => {
    exit(`Completed successfully`);
  })
  .catch(error => {
    exit(`Completed with error ${JSON.stringify(error)}`);
  });

async function go() {
  // Delete the database
  await client.database(databaseDefName).delete();
  captains.log(`deleted database`);

  // Create the database
  const { database } = await client.databases.createIfNotExists({
    id: databaseDefName
  });
  captains.log(`created database ${database.id}`);

  await bulkCreate(database, heroContainerName, heroes);
  await bulkCreate(database, villainContainerName, villains);

  async function bulkCreate(database, containerDef, items) {
    captains.log(`adding data to container ${database.id}`);
    // Create the container
    const containerDefinition = {
      id: containerDef,
      indexingPolicy: { automatic: true } // turn on indexes (default)
      // indexingPolicy: { automatic: false }, // turn of indexes
    };
    const { container } = await database.containers.createIfNotExists(
      containerDefinition
    );
    captains.log(`created container ${container.id}`);

    // Insert the items
    /* eslint-disable */
    for (const item of items) {
      const { body } = await container.items.create(item);
      captains.log(`created item with content: `, body);
    }
    /* eslint-enable */

    // Read the items
    const { result } = await container.items.readAll().toArray();
    captains.log(result);
  }
}
