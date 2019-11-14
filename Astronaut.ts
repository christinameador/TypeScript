import { Payload } from './Payload';

export class Astronaut {

}

class Astronaut implements Payload {
    constructor (massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}