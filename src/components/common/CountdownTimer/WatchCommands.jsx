import React, { PropTypes } from 'react';
import { StartPauseButton } from './StartPauseButton';
import { CountdownCommandButton } from './CountDownCommandButton';
import { validatePercentageProgressProp } from './propValidations';

export const WatchCommands = (props) => 
    <div className="watch-commands">
        {props.children}
        <StartPauseButton 
            lightTheme={props.lightTheme}
            disabled={props.disableStartPauseButton}
            showPause={props.showPauseIcon}
            percentageProgress={props.percentageProgress}
            onClick={props.onClickStartPauseButton}
        />
        <CountdownCommandButton
            className="expand"
            icon="expand"
            title="Expand"
            showButton={props.showExpandButton}
            lightTheme={props.lightTheme}
            onClick={props.onClickExpandButton}
        /> 
        <CountdownCommandButton
            className="shrink"
            icon="compress"
            title="Shrink"
            showButton={props.showShrinkButton}
            lightTheme={props.lightTheme}
            onClick={props.onClickShrinkButton}
        /> 
    </div>

WatchCommands.propTypes = {
    lightTheme: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPauseIcon: PropTypes.bool,
    showExpandButton: PropTypes.bool,
    showShrinkButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickExpandButton: PropTypes.func.isRequired,
    onClickShrinkButton: PropTypes.func.isRequired
};

WatchCommands.defaultProps = {
    lightTheme: false,
    disableStartPauseButton: false,
    showPauseIcon: false,
    showExpandButton: true,
    showShrinkButton: false,
    percentageProgress: 0
};