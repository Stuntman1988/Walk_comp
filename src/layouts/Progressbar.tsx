import * as React from 'react';
import { StepsOfUsers } from '../models/StepsOfUsers';

export const Progressbar: React.FC<{ data: StepsOfUsers, goalSteps: number, week: number }> = (prop) => {


    const goalSteps = prop.goalSteps
    const percentOfSteps = parseFloat(((prop.data.totalSteps / goalSteps) * 100).toFixed(1));

    function countAveragePerDay(totSteps: number) {
        return Math.round(totSteps / (prop.week * 7))
    }


    return (
        <div className={'mt-3'}>
            <p className={'form-label'}>{prop.data.name} - {prop.data.totalSteps.toLocaleString('sv-SE')} steg - {countAveragePerDay(prop.data.totalSteps)} steg/dag
                {prop.data.comment && ` - ${prop.data.comment}`}
            </p>
            <div className={'progress bg-light bg-opacity-25'} role={'progressbar'} aria-label={'Animated striped example'}
                 aria-valuenow={percentOfSteps}
                 aria-valuemin={0} aria-valuemax={100}>
                <div className={'progress-bar progress-bar-striped progress-bar-animated bg-success overflow-visible'}
                     style={{width: `${percentOfSteps}%`}}>{percentOfSteps}%
                </div>
            </div>
        </div>
    )
}
