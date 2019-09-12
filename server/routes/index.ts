import express from 'express';

const router = express.Router();

import { heroRoutes } from './hero.routes';
import { villainRoutes } from './villain.routes';

router.use('/', heroRoutes);
router.use('/', villainRoutes);

export { router };
