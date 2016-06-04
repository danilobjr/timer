import React, { Component, PropTypes } from 'react';

const renderHiddenClassWhen = (isHidden) => isHidden ? 'h-hidden' : '';

export const StartPauseButton = (props) => { 
    const { isPlaying } = props;
    
    return (
        <button {...props} id="start-pause-button">
            <svg className="border">
                <circle cx="35" cy="35" r="35" />
            </svg>
            <svg className={`start icon ${renderHiddenClassWhen(isPlaying)}`}>
                <polygon points="1,1 13,9 1,17" />
            </svg>
            <svg className={`pause icon ${renderHiddenClassWhen(!isPlaying)}`}>
                <polygon points="1,1 1,16 7,1 7,16" />
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
    isPlaying: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp 
};