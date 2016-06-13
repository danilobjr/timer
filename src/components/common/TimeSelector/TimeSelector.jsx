import React, { Component, PropTypes } from 'react';
import { NumberSelector } from 'components/common';
import { inc, dec } from 'helpers';
import { createArrayOfNumbersOf, select } from './localHelpers';

export class TimeSelector extends Component {
    constructor(props) {
        super(props);
    
        this.time = {
            hours: props.hours,
            minutes: props.minutes,
            seconds: props.seconds
        };
    }

    componentWillReceiveProps(newProps) {
        const { hours, minutes, seconds } = newProps;
        this.time = { hours, minutes, seconds };
    }

    render() {
        const { hours, minutes, seconds } = this.time;

        return (
            <div className="time-selector">
                <NumberSelector 
                    selected={hours} 
                    lastNumber={23} 
                    onSelectNext={() => this.updateDataByProperty('hours', 23, inc)}
                    onSelectPrevious={() => this.updateDataByProperty('hours', 23, dec)} 
                    onSelectExactly={(number) => this.updateData('hours', number)}
                />
                <NumberSelector 
                    selected={minutes} 
                    lastNumber={59} 
                    onSelectNext={() => this.updateDataByProperty('minutes', 59, inc)}
                    onSelectPrevious={() => this.updateDataByProperty('minutes', 59, dec)} 
                    onSelectExactly={(number) => this.updateData('minutes', number)}
                />
                <NumberSelector 
                    selected={seconds} 
                    lastNumber={59} 
                    onSelectNext={() => this.updateDataByProperty('seconds', 59, inc)}
                    onSelectPrevious={() => this.updateDataByProperty('seconds', 59, dec)} 
                    onSelectExactly={(number) => this.updateData('seconds', number)}
                />
            </div>
        );
    }

    updateData(property, number) {
        const updatedData = Object.assign(
            {}, 
            this.time, 
            { [property]: number }
        );

        this.props.onChange(updatedData);
    }

    updateDataByProperty(property, lastNumber, operation) {
        const selectedNumber = this.time[property];
        const update = { [property]: select(createArrayOfNumbersOf(0)(lastNumber), selectedNumber, operation) };

        const updatedData = Object.assign(
            {}, 
            this.time, 
            update
        );

        this.props.onChange(updatedData);
    }
}

TimeSelector.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    onChange: PropTypes.func
};