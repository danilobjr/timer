import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { compose, time, milliseconds, replace, padLeft } from 'helpers';

export class CounterWatch extends BaseComponent {
    render() {
        const [ hours, minutes, seconds ] = time(this.getRemainingTime());
        const oneSecond = milliseconds(0,0,1);
        const oneMinute = milliseconds(0,1);
        const oneHour = milliseconds(1);
        
        return (
            <div className={this.renderCounterWatchCssClasses()}>
                <span className={this.renderUnitCssClasses(oneHour)} title="Hours">
                    {this.padLeftWithZero(hours)}
                </span>
                <span className={this.renderUnitCssClasses(oneMinute)} title="Minutes">
                    {this.padLeftWithZero(minutes)}
                </span>
                <span className={this.renderUnitCssClasses(oneSecond)} title="Seconds">
                    {this.padLeftWithZero(seconds)}
                </span>
            </div>
        );
    }
    
    renderCounterWatchCssClasses() {
        const { className, lightTheme } = this.props;

        return this.classNames(
            'counter-watch',
            className,
            { 
                '-lighttheme': lightTheme, 
            }
        );
    }
    
    renderUnitCssClasses(value) {
        return this.classNames(
            'unit',
            { '-active': this.getRemainingTime() >= value }
        );
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