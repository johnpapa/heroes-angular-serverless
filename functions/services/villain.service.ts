import { Context } from '@azure/functions';
import containers from './config';
const { villains: container } = containers;

async function getVillains({ req, res }: Context) {
  try {
    const { resources: villains } = await container.items.readAll().fetchAll();
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain({ req, res }: Context) {
  const villain = {
    name: req.body.name,
    description: req.body.description,
    id: undefined
  };
  villain.id = `Villain${villain.name}`;

  try {
    const { item } = await container.items.create(villain);
    const { resource } = await item.read();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putVillain({ req, res }: Context) {
  const villain = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const partitionKey = villain.id;
    const { resource } = await container.item(villain.id, partitionKey).replace(villain);
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain({ req, res }: Context) {
  const { id } = req.params;

  try {
    const partitionKey = id;
    const { resource } = await container.item(id, partitionKey).delete();
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getVillains, postVillain, putVillain, deleteVillain };
