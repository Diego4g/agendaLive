import { Request, Response } from "express";
import { ListLiveUseCase } from "./ListLiveUseCase";


class ListLiveController {
    constructor(private listLiveUseCase: ListLiveUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listLiveUseCase.execute();

        return response.json(all);
    }
}

export { ListLiveController }