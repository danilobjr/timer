import React, { PropTypes } from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { CounterWatch } from './CounterWatch';
import { StartPauseButton } from './StartPauseButton';
import { CountdownTimerCommands } from './CountdownTimerCommands';
import { turnOnLightTheme, turnOffLightTheme } from './actions';
import { notify } from 'native';
import { timeToString } from './localHelpers';

export class CountdownTimerComponent extends BaseComponent {
    constructor(props) {
        super(props);
    
        this.state = {
            paused: true,
            counter: 0,
            expanded: false
        };
        
        this.interval = null;
    }
    
    componentDidUpdate() {
        if (this.state.expanded) {
            this.props.onExpand(this);
        } else {
            this.props.onShrink(this);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const { paused, counter, expanded } = this.state;
        const { name, time, isEditionEnabled, onClickRemoveButton } = this.props;
        
        return (
            <div className={this.renderCountdownTimerCssClasses()}>
                <CounterWatch currentTime={counter} totalTime={time} lightTheme={expanded} />
                <CountdownTimerCommands 
                    lightTheme={expanded}
                    isEditionEnabled={isEditionEnabled}
                    showPause={!paused}
                    showResetButton={this.shouldShowResetButton()}
                    percentageProgress={this.calculatePercentageProgress()}
                    disableStartPauseButton={this.shouldDisableStartPauseButton()}
                    onClickStartPauseButton={this.togglePaused.bind(this)}
                    onClickResetButton={this.resetCounter.bind(this)}
                    onClickExpandButton={this.toggleExpanded.bind(this)}
                    onClickRemoveButton={onClickRemoveButton}
                />
                <div className="info">
                    <span className="name">{name}</span>
                    <CounterWatch className={this.classNames({ 'h-hidden': expanded })} totalTime={time} />
                </div>
            </div>
        );
    }
    
    renderCountdownTimerCssClasses() {
        return this.classNames(
            'countdown-timer',
            { '-expanded': this.state.expanded }
        );
    }
    
    shouldShowResetButton() {
        const { paused, counter } = this.state;        
        return !(paused && counter === 0);
    }
    
    shouldDisableStartPauseButton() {
        const { paused, counter } = this.state;
        return paused && counter === this.props.time;
    }
    
    calculatePercentageProgress() {
        const { paused, counter } = this.state;
        
        if (paused && counter === 0) {
            return 0;
        }
        
        const remainingTime = this.props.time - this.state.counter;
        return remainingTime / this.props.time
    }
    
    stopIfTimeIsOver() {
        const timeIsOver = this.props.time === this.state.counter;
        timeIsOver && this.setState({ paused: true });

        if (timeIsOver) {
            clearInterval(this.interval);
            notify(this.props.name, { body: timeToString(this.props.time) })
        }
    }
    
    resetCounter() {
        this.setState({ counter: 0 });
    }
    
    startCounting() {
        const oneSecond = 1000;

        this.interval = setInterval(() => {
            const { paused, counter } = this.state;            
            
            if (!paused) {
                this.setState({ counter: counter + oneSecond });
            }

            this.stopIfTimeIsOver();
        }, oneSecond);
    }
    
    togglePaused() {
        this.state.paused ? this.startCounting() : clearInterval(this.interval);
        this.setState({ paused: !this.state.paused });
    }

    toggleExpanded() {
        this.state.expanded ? this.shrink() : this.expand();
    }

    expand() {
        this.props.turnOnLightTheme();
        this.setState({ expanded: true });
    }

    shrink() {
        this.props.turnOffLightTheme();
        this.setState({ expanded: false });        
    }
}

CountdownTimerComponent.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number.isRequired,
    isEditionEnabled: PropTypes.bool,
    onExpand: PropTypes.func,
    onShrink: PropTypes.func,
    onClickRemoveButton: PropTypes.func
};

CountdownTimerComponent.defaultProps = {
    name: 'Timer'
};

const mapDispatchToProps = (dispatch) => ({
    turnOnLightTheme: () => dispatch(turnOnLightTheme()),
    turnOffLightTheme: () => dispatch(turnOffLightTheme()),
})

export const CountdownTimer = connect(null, mapDispatchToProps)(CountdownTimerComponent);