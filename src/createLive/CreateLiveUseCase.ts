import { ILiveRepository } from "../repositories/implementations/ILiveRepository";

interface IRequest {
    nameLive: string;
    nameChannel: string;
    urlLive: string;
    dateLive: Date;
    hourLive: string;
}


class CreateLiveUseCase {

    constructor(private livesRepository: ILiveRepository) { }

    execute({ nameLive, nameChannel, urlLive, dateLive, hourLive }: IRequest): void {
        const liveAlreadyExists = this.livesRepository.findByName(nameLive);

        if (liveAlreadyExists) {
            throw new Error("Live já cadastrada!")
        }

        this.livesRepository.create({ nameLive, nameChannel, urlLive, dateLive, hourLive });
    }

}

export { CreateLiveUseCase }