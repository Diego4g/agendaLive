import { ILiveRepository } from "../repositories/ILiveRepository";
import { Live } from "../entities/Live"


class ListLiveUseCase {
    constructor(private liveRepository: ILiveRepository) { }

    execute(): Live[] {
        const lives = this.liveRepository.list();

        return lives
    }
}

export { ListLiveUseCase }