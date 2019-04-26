import * as express from 'express';
import { heroRouter } from './hero.routes';
import { villainRouter } from './villain.routes';

export const router = express.Router();

router.use('/', heroRouter);
router.use('/', villainRouter);
