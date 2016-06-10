import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { IconPlay, IconPause } from 'components/common/Icons';

export class StartPauseButton extends BaseComponent {
    render() {        
        const { showPause, percentageProgress, onClick } = this.props;
        
        return (
            <button 
                {...this.props} 
                className={this.renderMainCssClasses()} 
                id="start-pause-button" 
                title="Start/Pause"
            >
                <svg 
                    className="border"
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="30" cy="30" r="29" />
                </svg>
                
                <svg 
                    className="time-progress"
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="30" cy="30" r="29" 
                        style={{ strokeDashoffset: this.calculateStrokeDashoffsetSize(percentageProgress) }} 
                    />
                </svg>
                
                <IconPlay className={this.renderHiddenClassWhen(showPause)} />
                <IconPause className={this.renderHiddenClassWhen(!showPause)} />
            </button>
        );
    } 

    renderMainCssClasses() {
        const { className, lightTheme } = this.props;
        return this.classNames(
            className,
            { '-lighttheme': lightTheme }
        );
    }

    renderHiddenClassWhen(isHidden) {
        return isHidden ? 'h-hidden' : '';
    }

    calculateStrokeDashoffsetSize(percentageProgress) {
        return ((1 - percentageProgress) * 100) * 182 / 100 + 'px';
    }
}

const validatePercentageProgressProp = (props, propName, componentName) => {
    const percentageValue = props[propName];
    
    if (percentageValue < 0 || percentageValue > 1) {
        return new Error(
            "Invalid prop '" + propName + "' supplied to" +
            " '" + componentName + "'. Validation failed. " +
            propName + " value must be between 0 and 1."
        );
    }
    
    return null;
}

StartPauseButton.propTypes = {
    lightTheme: PropTypes.bool,
    showPause: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp ,
    onClick: PropTypes.func.isRequired
};