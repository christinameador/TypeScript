import { Astronaut } from './Astronaut';

export class Rocket {

}

class Rocket {
    let name: string;
    let totalCapacityKg: number;
    let cargoItems: string[];
    let astronauts: Astronaut[];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let array = items.map(item => item.massKg);
        let sum = array.reduce((a, b) => a + b, 0);
        return sum;
    }
    currentMassKg(): number {
        return this.sumMass(this.astronauts, this.cargoItems);
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    addCargo(cargo: Cargo) {
        if (this.canAdd()) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd()) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}

