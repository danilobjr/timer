import React, { Component } from 'react';
import { NumberSelector } from 'components/common';
import { inc, dec } from 'helpers';
import { createArrayOfNumbersOf, select } from './localHelpers';

export class TimeSelector extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            hours: 22,
            minutes: 2,
            seconds: 10
        };
    }

    render() {
        const { hours, minutes, seconds } = this.state;

        return (
            <div className="time-selector">
                <NumberSelector 
                    selected={hours} 
                    lastNumber={23} 
                    onSelectNext={() => this.updateStateByProperty('hours', 23, inc)}
                    onSelectPrevious={() => this.updateStateByProperty('hours', 23, dec)} 
                />
                <NumberSelector 
                    selected={minutes} 
                    lastNumber={59} 
                    onSelectNext={() => this.updateStateByProperty('minutes', 59, inc)}
                    onSelectPrevious={() => this.updateStateByProperty('minutes', 59, dec)} 
                />
                <NumberSelector 
                    selected={seconds} 
                    lastNumber={59} 
                    onSelectNext={() => this.updateStateByProperty('seconds', 59, inc)}
                    onSelectPrevious={() => this.updateStateByProperty('seconds', 59, dec)} 
                />
            </div>
        );
    }

    updateStateByProperty(property, lastNumber, operation) {
        const selectedNumber = this.state[property];
        const update = { [property]: select(createArrayOfNumbersOf(0)(lastNumber), selectedNumber, operation) };

        const newState = Object.assign(
            {}, 
            this.state, 
            update
        );

        this.setState(newState);
    }
}