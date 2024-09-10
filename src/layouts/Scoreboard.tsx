import { StepsOfUsers } from "../models/StepsOfUsers";
import { Progressbar } from "./Progressbar";

export const Scoreboard = () => {

    const steps = [
        new StepsOfUsers(1, 'Robin', 0),
        new StepsOfUsers(2, 'Isabell', 0),
        new StepsOfUsers(3, 'Eva', 0),
        new StepsOfUsers(4, 'Christer', 0),
        new StepsOfUsers(5, 'Bosse', 0),
        new StepsOfUsers(6, 'Annika', 0),
        new StepsOfUsers(7, 'Crisse', 0),
    ]

    steps.sort((a, b) => b.totalSteps - a.totalSteps)

    steps.sort
    return (
        <div className={'container mt-3'}>
            <h1 className={'text-center'}>Vem vinner?</h1>
            <h5 className={'text-end'}>Stegmål: 3 541 429</h5>
            {steps.map((t, index) => (
                <Progressbar data={t} key={index}/>
            ))}
        </div>
    )
}
