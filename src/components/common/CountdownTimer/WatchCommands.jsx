import React, { PropTypes } from 'react';
import { StartPauseButton } from './StartPauseButton';
import { WatchCommandButton } from './WatchCommandButton';
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
        <WatchCommandButton
            className="expand"
            icon="expand"
            title="Expand"
            hideButton={props.hideExpandButton}
            position="right"
            lightTheme={props.lightTheme}
            onClick={props.onClickExpandButton}
        /> 
        <WatchCommandButton
            className="shrink"
            icon="compress"
            title="Shrink"
            hideButton={props.hideShrinkButton}
            position="right"
            lightTheme={props.lightTheme}
            onClick={props.onClickShrinkButton}
        /> 
    </div>

WatchCommands.propTypes = {
    lightTheme: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPauseIcon: PropTypes.bool,
    hideExpandButton: PropTypes.bool,
    hideShrinkButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickExpandButton: PropTypes.func.isRequired,
    onClickShrinkButton: PropTypes.func.isRequired
};

WatchCommands.defaultProps = {
    lightTheme: false,
    disableStartPauseButton: false,
    showPauseIcon: false,
    hideExpandButton: false,
    hideShrinkButton: true,
    percentageProgress: 0
};