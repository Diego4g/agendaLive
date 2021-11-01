import { Live } from '../entities/Live'

interface ICreateLiveDTO {
    nameLive: string;
    nameChannel: string;
    urlLive: string;
    dateLive: Date;
    hourLive: string;
}


interface ILiveRepository {
    findByName(name: string): Promise<Live>;
    list(): Promise<Live[]>;
    create({ nameLive, nameChannel, urlLive, dateLive, hourLive }: ICreateLiveDTO): Promise<void>;
}

export { ILiveRepository, ICreateLiveDTO }