import React, { Component, PropTypes } from 'react';

const renderHiddenClassWhen = (isHidden) => isHidden ? 'h-hidden' : '';

const calculateStrokeDashoffsetSize = (percentageProgress) =>
    ((1 - percentageProgress) * 100) * 182 / 100 + 'px'

export const StartPauseButton = (props) => { 
    const { showPause, onClick } = props;
    
    return (
        <button {...props} className={`${props.className} ${props.lightTheme ? '-lighttheme' : ''}`} id="start-pause-button" title="Start/Pause">
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
                    style={{ strokeDashoffset: calculateStrokeDashoffsetSize(props.percentageProgress) }} 
                />
            </svg>
            
            <svg 
                className={`start icon ${renderHiddenClassWhen(showPause)}`}
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon points="1,1 13,9 1,17" />
            </svg>
            
            <svg 
                className={`pause icon ${renderHiddenClassWhen(!showPause)}`} 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
            >        
                <line x1="1" y1="0.7" x2="1" y2="15.3"/>
                <line x1="7" y1="0.7" x2="7" y2="15.3" />
            </svg>
        </button>
    );
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