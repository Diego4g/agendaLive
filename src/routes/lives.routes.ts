import { Router } from 'express';
import createLiveController  from '../createLive/index';
import listLiveController  from '../listLive';



const livesRoutes = Router();

livesRoutes.post("/", (request, response) => {
    return createLiveController().handle(request, response);
});

livesRoutes.get("/", (request, response) => {
    return listLiveController().handle(request, response);
})

export { livesRoutes }