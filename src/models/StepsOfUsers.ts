export class StepsOfUsers {
    id: number;
    name: string;
    totalSteps: number;

    constructor(id: number, name: string, totalSteps: number) {
        this.id = id;
        this.name = name;
        this.totalSteps = totalSteps;
    }
}