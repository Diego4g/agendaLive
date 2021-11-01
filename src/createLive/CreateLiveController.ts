import { Request, Response } from 'express';
import { CreateLiveUseCase } from "./CreateLiveUseCase";


class CreateLiveController {
    constructor(private createLiveUseCase: CreateLiveUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { nameLive, nameChannel, urlLive, dateLive, hourLive } = request.body;

        await this.createLiveUseCase.execute({ nameLive, nameChannel, urlLive, dateLive, hourLive });
        return response.status(201).send();
    }
}

export { CreateLiveController }