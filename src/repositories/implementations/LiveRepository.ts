import { Live } from "../../entities/Live"
import { ICreateLiveDTO } from "../ILiveRepository";



class LiveRepository {
    private lives: Live[];
    private static INSTANCE: LiveRepository;

    private constructor() {
        this.lives = [];
    }

    public static getInstance(): LiveRepository {
        if (!LiveRepository.INSTANCE) {
            LiveRepository.INSTANCE = new LiveRepository();
        }

        return LiveRepository.INSTANCE;
    }

    create({ nameLive, nameChannel, urlLive, dateLive, hourLive }: ICreateLiveDTO): void {
        const live = new Live();
        Object.assign(live, {
            nameLive,
            nameChannel,
            urlLive,
            dateLive,
            hourLive,
        });

        this.lives.push(live);
    }
    list(): Live[] {
        return this.lives;
    }

    findByName(name: string): Live {
        const live = this.lives.find(live => live.nameLive === name);
        return live;
    }
}

export { LiveRepository }