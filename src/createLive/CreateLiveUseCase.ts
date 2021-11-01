import { ILiveRepository } from "../repositories/ILiveRepository";

interface IRequest {
    nameLive: string;
    nameChannel: string;
    urlLive: string;
    dateLive: Date;
    hourLive: string;
}


class CreateLiveUseCase {

    constructor(private livesRepository: ILiveRepository) { }

    async execute({ nameLive, nameChannel, urlLive, dateLive, hourLive }: IRequest): Promise<void> {
        const liveAlreadyExists = await this.livesRepository.findByName(nameLive);

        if (liveAlreadyExists) {
            throw new Error("Live já cadastrada!")
        }

        this.livesRepository.create({ nameLive, nameChannel, urlLive, dateLive, hourLive });
    }

}

export { CreateLiveUseCase }