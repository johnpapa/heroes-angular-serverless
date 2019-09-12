import { Request, Response } from 'express';
import containers from './config';
const { villains: container } = containers;

async function getVillains(req: Request, res: Response) {
  try {
    const { resources: villains } = await container.items.readAll().fetchAll();
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain(req: Request, res: Response) {
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

async function putVillain(req: Request, res: Response) {
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

async function deleteVillain(req: Request, res: Response) {
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
