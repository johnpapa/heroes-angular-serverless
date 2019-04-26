import * as express from 'express';
import { heroService } from '../services';

export const heroRouter = express.Router();

heroRouter.get('/heroes', (req, res) => {
  heroService.getHeroes(req, res);
});

heroRouter.post('/hero', (req, res) => {
  heroService.postHero(req, res);
});

heroRouter.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

heroRouter.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});
