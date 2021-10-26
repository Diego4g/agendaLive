import { Live } from '../../model/Live'

interface ICreateLiveDTO {
    nameLive: string;
    nameChannel: string;
    urlLive: string;
    dateLive: Date;
    hourLive: string;
}


interface ILiveRepository {
    findByName(name: string): Live;
    list(): Live[];
    create({ nameLive, nameChannel, urlLive, dateLive, hourLive }: ICreateLiveDTO): void;
}

export { ILiveRepository, ICreateLiveDTO }