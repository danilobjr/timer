import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { WatchCommands } from './WatchCommands';
import { StartPauseButton } from './StartPauseButton';
import { WatchCommandButton } from './WatchCommandButton';
import { validatePercentageProgressProp } from './propValidations';

export class CountdownTimerCommands extends BaseComponent {
    render() {
        const { lightTheme, disableStartPauseButton, showPauseIcon, 
                hideResetButton, hideExpandButton, hideShrinkButton, hideRemoveButton,
                percentageProgress, onClickStartPauseButton, onClickResetButton,
                onClickExpandButton, onClickShrinkButton, onClickRemoveButton } = this.props;

        return (
            <WatchCommands
                lightTheme={lightTheme}
                disableStartPauseButton={disableStartPauseButton}
                showPauseIcon={showPauseIcon}
                hideExpandButton={hideExpandButton}
                hideShrinkButton={hideShrinkButton}
                percentageProgress={percentageProgress}
                onClickStartPauseButton={onClickStartPauseButton}
                onClickExpandButton={onClickExpandButton}
                onClickShrinkButton={onClickShrinkButton}
            >
                <WatchCommandButton
                    className="remove"
                    icon="trash"
                    title="Remove" 
                    hideButton={hideRemoveButton}
                    onClick={onClickRemoveButton}
                />
                <WatchCommandButton
                    className="reset"
                    icon="reset"
                    title="Reset"
                    hideButton={hideResetButton} 
                    lightTheme={lightTheme}
                    onClick={onClickResetButton}
                /> 
            </WatchCommands>
        );
    }
}

CountdownTimerCommands.propTypes = {
    lightTheme: PropTypes.bool,
    disableStartPauseButton: PropTypes.bool,
    showPauseIcon: PropTypes.bool,
    hideResetButton: PropTypes.bool,
    hideRemoveButton: PropTypes.bool,
    hideExpandButton: PropTypes.bool,
    hideShrinkButton: PropTypes.bool,
    percentageProgress: validatePercentageProgressProp,
    onClickStartPauseButton: PropTypes.func.isRequired,
    onClickResetButton: PropTypes.func,
    onClickExpandButton: PropTypes.func,
    onClickShrinkButton: PropTypes.func,
    onClickRemoveButton: PropTypes.func
};

CountdownTimerCommands.defaultProps = {
    hideResetButton: true
};