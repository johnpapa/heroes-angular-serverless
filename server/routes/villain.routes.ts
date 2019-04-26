import * as express from 'express';
import { villainService } from '../services';

export const villainRouter = express.Router();

villainRouter.get('/villains', (req, res) => {
  villainService.getVillains(req, res);
});

villainRouter.post('/villain', (req, res) => {
  villainService.postVillain(req, res);
});

villainRouter.put('/villain/:id', (req, res) => {
  villainService.putVillain(req, res);
});

villainRouter.delete('/villain/:id', (req, res) => {
  villainService.deleteVillain(req, res);
});
