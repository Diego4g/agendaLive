import { Request, Response } from "express";
import { ListLiveUseCase } from "./ListLiveUseCase";


class ListLiveController {
    constructor(private listLiveUseCase: ListLiveUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listLiveUseCase.execute();

        return response.json(all);
    }
}

export { ListLiveController }