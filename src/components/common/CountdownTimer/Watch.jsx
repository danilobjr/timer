import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { time, milliseconds } from 'helpers';
import { padLeftWithZero } from './localHelpers';

export class Watch extends BaseComponent {
    render() {
        const [ hours, minutes, seconds ] = time(this.getRemainingTime());
        const oneSecond = milliseconds(0,0,1);
        const oneMinute = milliseconds(0,1);
        const oneHour = milliseconds(1);
        
        return (
            <div className={this.renderWatchCssClasses()}>
                <span className={this.renderUnitCssClasses(oneHour)} title="Hours">
                    {padLeftWithZero(hours)}
                </span>
                <span className={this.renderUnitCssClasses(oneMinute)} title="Minutes">
                    {padLeftWithZero(minutes)}
                </span>
                <span className={this.renderUnitCssClasses(oneSecond)} title="Seconds">
                    {padLeftWithZero(seconds)}
                </span>
            </div>
        );
    }
    
    renderWatchCssClasses() {
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
}

Watch.propTypes = {
    currentTime: PropTypes.number,
    totalTime: PropTypes.number,
    lightTheme: PropTypes.bool
};

Watch.defaultProps = {
    currentTime: 0,
    totalTime: 0
};