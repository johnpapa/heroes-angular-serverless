import { Request, Response } from 'express';
import containers from './config';
const { villains: container } = containers;

async function getVillains(req: Request, res: Response) {
  try {
    const { result: villains } = await container.items.readAll().toArray();
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
    const { body } = await container.items.create(villain);
    res.status(201).json(body);
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
    const { body } = await container.items.upsert(villain);
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getVillains, postVillain, putVillain, deleteVillain };
