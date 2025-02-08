import { StepsOfUsers } from "../models/StepsOfUsers";
import { Progressbar } from "./Progressbar";
import { StepConverter } from "./StepConverter";

export const Scoreboard = () => {

    const goalSteps = 3541429
    const week = 20

    const steps = [
        new StepsOfUsers(1, 'Robin', 1108659),
        new StepsOfUsers(2, 'Isabell', 1499966),
        new StepsOfUsers(3, 'Eva', 1403073),
        new StepsOfUsers(4, 'Christer', 848350),
        new StepsOfUsers(5, 'Bosse', 494566),
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
