import { ILiveRepository } from "../repositories/ILiveRepository";
import { Live } from "../entities/Live"


class ListLiveUseCase {
    constructor(private liveRepository: ILiveRepository) { }

    async execute(): Promise<Live[]> {
        const lives = await this.liveRepository.list();

        return lives
    }
}

export { ListLiveUseCase }