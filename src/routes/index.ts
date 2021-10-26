import { Router } from 'express';
import { livesRoutes } from './lives.routes';

const router = Router();


router.use("/live", livesRoutes)

export { router }