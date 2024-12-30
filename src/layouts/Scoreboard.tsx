import { StepsOfUsers } from "../models/StepsOfUsers";
import { Progressbar } from "./Progressbar";
import { StepConverter } from "./StepConverter";

export const Scoreboard = () => {

    const goalSteps = 3541429
    const week = 14

    const steps = [
        new StepsOfUsers(1, 'Robin', 877674),
        new StepsOfUsers(2, 'Isabell', 1256868),
        new StepsOfUsers(3, 'Eva', 1073318),
        new StepsOfUsers(4, 'Christer', 573952),
        new StepsOfUsers(5, 'Bosse', 356931),
        new StepsOfUsers(6, 'Crisse', 1097520, "Vecka 10"),
    ]

    steps.sort((a, b) => b.totalSteps - a.totalSteps)

    steps.sort
    
    return (
        <div className={'container mt-3'}>
            <h1 className={'text-center'}>Vem vinner?</h1>
            <div className="row">
                <h5 className={'col-6'}>Vecka {week}</h5>
                <h5 className={'col-6 text-end'}>Stegmål: {goalSteps.toLocaleString('sv-SE')}</h5>
            </div>

            {steps.map((t, index) => (
                <Progressbar data={t} goalSteps={goalSteps} week={week} key={index} />
            ))}
            <button type="button" className="btn btn-success mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Stegkonverterare
            </button>
            <StepConverter />
        </div>
    )
}
