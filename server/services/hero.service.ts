import { Response, Request } from 'express';
// import { Context } from '@azure/functions';
import { containers } from './config';
import { Hero } from './models';

const { heroes: container } = containers;

export async function getHeroes(req: Request, res: Response) {
  try {
    const { result: heroes } = await container.items.readAll().toArray();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postHero(req: Request, res: Response) {
  const hero = new Hero(req.body.name, req.body.description);

  try {
    const { body } = await container.items.create(hero);
    res.status(201).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function putHero(req: Request, res: Response) {
  const hero = new Hero(req.body.name, req.body.description, req.params.id);

  try {
    const { body } = await container.items.upsert(hero);
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteHero(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
  } catch (error) {
    res.status(500).send(error);
  }
}
