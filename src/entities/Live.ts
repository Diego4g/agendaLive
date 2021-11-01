import { v4 as uuidV4 } from 'uuid';

import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("Lives")
class Live {

    @PrimaryColumn()
    id?: string;

    @Column()
    nameLive: string;

    @Column()
    nameChannel: string;

    @Column()
    urlLive: string;

    @Column()
    dateLive: Date;

    @Column()
    hourLive: string;
    constructor() {
        if (!this.id) { //se nao existe id eu crio um
            this.id = uuidV4();
        }
    }
}

export { Live }