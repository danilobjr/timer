import React, { Component, PropTypes } from 'react';
import { compose, time, milliseconds, replace, padLeft } from 'helpers';

export class CounterWatch extends Component {
    render() {
        const [ hours, minutes, seconds ] = time(this.getRemainingTime());
        const oneSecond = milliseconds(0,0,1);
        const oneMinute = milliseconds(0,1);
        const oneHour = milliseconds(1);
        
        return (
            <div className={this.renderCounterWatchCssClasses()}>
                <span className={`unit ${this.renderActiveClass(oneHour)}`} title="Hours">
                    {this.padLeftWithZero(hours)}
                </span>
                <span className={`unit ${this.renderActiveClass(oneMinute)}`} title="Minutes">
                    {this.padLeftWithZero(minutes)}
                </span>
                <span className={`unit ${this.renderActiveClass(oneSecond)}`} title="Seconds">
                    {this.padLeftWithZero(seconds)}
                </span>
            </div>
        );
    }
    
    renderCounterWatchCssClasses() {
        const { className, lightTheme } = this.props;
        return `counter-watch ${lightTheme ? '-lighttheme' : ''} ${className}`.trim();
    }
    
    renderActiveClass(value) {
        return this.getRemainingTime() >= value ? '-active' : '';
    }
    
    getRemainingTime() {
        return this.props.totalTime - this.props.currentTime;
    }
    
    padLeftWithZero(value) {
        return compose(replace(' ')('0'), padLeft(2))(value);
    }
}

CounterWatch.propTypes = {
    currentTime: PropTypes.number,
    totalTime: PropTypes.number,
    lightTheme: PropTypes.bool
};

CounterWatch.defaultProps = {
    currentTime: 0,
    totalTime: 0
};