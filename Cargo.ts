import { Payload } from './Payload';

export class Cargo {

}

class Cargo implements Payload {
    constructor (massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
}