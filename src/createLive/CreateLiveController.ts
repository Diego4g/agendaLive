import { Request, Response } from 'express';
import { CreateLiveUseCase } from "./CreateLiveUseCase";


class CreateLiveController {
    constructor(private createLiveUseCase: CreateLiveUseCase) { }
    handle(request: Request, response: Response): Response {
        const { nameLive, nameChannel, urlLive, dateLive, hourLive } = request.body;

        this.createLiveUseCase.execute({ nameLive, nameChannel, urlLive, dateLive, hourLive });
        return response.status(201).send();
    }
}

export { CreateLiveController }