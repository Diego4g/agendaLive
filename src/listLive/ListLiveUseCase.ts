import { ILiveRepository } from "../repositories/implementations/ILiveRepository";
import { Live } from "../model/Live"


class ListLiveUseCase {
    constructor(private liveRepository: ILiveRepository) { }

    execute(): Live[] {
        const lives = this.liveRepository.list();

        return lives
    }
}

export { ListLiveUseCase }