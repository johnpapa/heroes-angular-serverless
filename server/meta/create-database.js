// @ts-check
require('dotenv').config(); // eslint-disable-line

const cosmos = require('@azure/cosmos');

const exit = require('./exit');
const { databaseDefName, endpoint, masterKey } = require('../services/config');
const heroes = require('./heroes');
const villains = require('./villains');

const captains = console;
const { CosmosClient } = cosmos;
const client = new CosmosClient({ endpoint, auth: { masterKey } });

process.env.DATA_OPTION = 'cloud_cosmos_sdk';

go()
  .then(() => {
    exit(`Completed successfully`);
  })
  .catch(error => {
    exit(`Completed with error ${JSON.stringify(error)}`);
  });

async function go() {
  // Delete the database
  console.log(databaseDefName);
  await client.database(databaseDefName).delete();
  captains.log(`deleted database`);

  // Create the database
  const { database } = await client.databases.createIfNotExists({
    id: databaseDefName
  });
  captains.log(`created database ${database.id}`);

  await bulkCreate(database, 'heroes', heroes);
  await bulkCreate(database, 'villains', villains);
}

async function bulkCreate(database, containerDef, items) {
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
