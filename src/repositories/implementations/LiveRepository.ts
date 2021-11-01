import { Live } from "../../entities/Live"
import { ICreateLiveDTO, ILiveRepository } from "../ILiveRepository";

import { getRepository, Repository } from "typeorm"

class LiveRepository implements ILiveRepository{

    private repository: Repository<Live>;

    private static INSTANCE: LiveRepository;

    constructor() {
        this.repository = getRepository(Live);
    }

    async create({ nameLive, nameChannel, urlLive, dateLive, hourLive }: ICreateLiveDTO): Promise<void> {
        const live = this.repository.create({
            nameLive,
            nameChannel,
            urlLive,
            dateLive,
            hourLive
        })
        await this.repository.save(live);
    }
    async list(): Promise<Live[]> {
        const lives = await this.repository.find();
        return lives;
    }

    async findByName(nameLive: string): Promise<Live> {
        const live = await this.repository.findOne({nameLive});
        return live
    } 
}

export { LiveRepository }