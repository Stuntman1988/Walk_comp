export class StepsOfUsers {
    id: number;
    name: string;
    totalSteps: number;
    comment?: string

    constructor(id: number, name: string, totalSteps: number, comment?: string) {
        this.id = id;
        this.name = name;
        this.totalSteps = totalSteps;
        this.comment = comment
    }
}