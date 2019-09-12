import * as express from 'express';
import { villainService } from '../services';

const router = express.Router();

router.get('/villains', (req, res) => {
  villainService.getVillains(req, res);
});

router.post('/villain', (req, res) => {
  villainService.postVillain(req, res);
});

router.put('/villain/:id', (req, res) => {
  villainService.putVillain(req, res);
});

router.delete('/villain/:id', (req, res) => {
  villainService.deleteVillain(req, res);
});

export const villainRoutes = router;
