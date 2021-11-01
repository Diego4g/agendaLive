import { v4 as uuidV4 } from 'uuid';

class Live {
    id?: string;
    nameLive: string;
    nameChannel: string;
    urlLive: string;
    dateLive: Date;
    hourLive: string;
    constructor() {
        if (!this.id) { //se nao existe id eu crio um
            this.id = uuidV4();
        }
    }
}

export { Live }