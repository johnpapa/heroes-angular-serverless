import * as express from 'express';
import { villainService } from '../services';

const router = express.Router();

router.get('/villains', (req, res) => {
  villainService.getVillains(req, res);
});

router.post('/villains', (req, res) => {
  villainService.postVillain(req, res);
});

router.put('/villains/:id', (req, res) => {
  villainService.putVillain(req, res);
});

router.delete('/villains/:id', (req, res) => {
  villainService.deleteVillain(req, res);
});

export const villainRoutes = router;
