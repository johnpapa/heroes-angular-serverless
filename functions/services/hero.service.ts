import { Context } from '@azure/functions';
import containers from './config';
const { heroes: container } = containers;

async function getHeroes({ req, res }: Context) {
  try {
    const { resources: heroes } = await container.items.readAll().fetchAll();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postHero({ req, res }: Context) {
  const hero = {
    name: req.body.name,
    description: req.body.description,
    id: undefined
  };
  hero.id = `Hero${hero.name}`;

  try {
    const { item } = await container.items.create(hero);
    const { resource } = await item.read();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero({ req, res }: Context) {
  const hero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const partitionKey = hero.id;
    const { resource } = await container.item(hero.id, partitionKey).replace(hero);
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero({ req, res }: Context) {
  const { id } = req.params;

  try {
    const partitionKey = id;
    const { resource } = await container.item(id, partitionKey).delete();
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getHeroes, postHero, putHero, deleteHero };
