import { Response, Request } from 'express';
import { containers } from './config';
import { Villain } from './models';

const { villains: container } = containers;

export async function getVillains(req: Request, res: Response) {
  try {
    const { result: villains } = await container.items.readAll().toArray();
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postVillain(req: Request, res: Response) {
  const villain = new Villain(req.body.name, req.body.description);

  try {
    const { body } = await container.items.create(villain);
    res.status(201).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function putVillain(req: Request, res: Response) {
  const villain = new Villain(
    req.body.name,
    req.body.description,
    req.params.id
  );

  try {
    const { body } = await container.items.upsert(villain);
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteVillain(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}
