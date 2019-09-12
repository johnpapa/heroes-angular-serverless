import { Context } from '@azure/functions';
import containers from './config';
const { villains: container } = containers;

async function getVillains({ req, res }: Context) {
  try {
    const { result: villains } = await container.items.readAll().toArray();
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
    const { body } = await container.items.create(villain);
    res.status(201).json(body);
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
    const { body } = await container.items.upsert(villain);
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain({ req, res }: Context) {
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getVillains, postVillain, putVillain, deleteVillain };
