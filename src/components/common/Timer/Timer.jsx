import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BaseComponent } from 'BaseComponent';
import { Watch } from './Watch';
import { CountdownWatch } from './CountdownWatch';
import { WatchCommands } from './WatchCommands';
import { turnOnLightTheme, turnOffLightTheme } from './actions';
import { notify } from 'native';
import { add, subtract } from 'helpers';
import { timeToString } from './localHelpers';

export class TimerComponent extends BaseComponent {
    constructor(props) {
        super(props);
    
        this.state = {
            paused: true,
            counter: 0,
            expanded: false
        };
        
        this.interval = null;
        this.oneSecond = 1000;
        this.oneHundredth = 10;
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const { hideExpandButton } = this.props;
        const { paused, counter, expanded } = this.state;

        return (
            <div className={this.renderTimerCssClasses()}>
                {this.renderWatch()}
                <WatchCommands
                    lightTheme={expanded}
                    disableStartPauseButton={this.shouldDisableStartPauseButton()}
                    showPauseIcon={!paused}
                    hideExpandButton={expanded || hideExpandButton}
                    hideShrinkButton={!expanded}
                    percentageProgress={this.calculatePercentageProgress()}
                    onClickStartPauseButton={this.togglePaused.bind(this)}
                    onClickExpandButton={this.toggleExpanded.bind(this)}
                    onClickShrinkButton={this.toggleExpanded.bind(this)}
                >
                    {this.props.children}
                </WatchCommands>
                {this.renderInfo()}
            </div>
        );
    }
    
    renderTimerCssClasses() {
        return this.classNames(
            'timer',
            { 
                '-no-info': !this.props.isRegressive,
                '-expanded': this.state.expanded 
            }
        );
    }

    renderWatch() {
        const { counter, expanded } = this.state;
        const { startTime, showHundredths } = this.props;

        if (this.props.isRegressive) {
            return <CountdownWatch currentTime={counter} totalTime={startTime} lightTheme={expanded} />;
        } 
        
        return <Watch time={counter} showHundredths={showHundredths} lightTheme={expanded} />;
    }

    renderInfo() {
        const { expanded } = this.state;
        const { name, startTime, isRegressive } = this.props;

        if (isRegressive) {
            <div className="info">
                <span className="name">{name}</span>
                <CountdownWatch className={this.classNames({ 'h-hidden': expanded })} totalTime={startTime} />
            </div>
        }

        return null;
    }
    
    shouldHideResetButton() {
        const { paused, counter } = this.state;        
        return paused && counter === 0;
    }
    
    shouldDisableStartPauseButton() {
        const { startTime, disableStartPauseButton, isRegressive } = this.props;
        const { paused, counter } = this.state;

        if (isRegressive) {
            return (paused && counter === startTime) || disableStartPauseButton;
        }

        return disableStartPauseButton;
    }
    
    calculatePercentageProgress() {
        const { isRegressive, startTime } = this.props;
        const { paused, counter } = this.state;
        
        if (paused && counter === 0) {
            return 0;
        }
        
        if (isRegressive) {
            const remainingTime = startTime - counter;
            return remainingTime / startTime;
        }

        return counter / (this.oneSecond * 60);
    }
    
    stopIfTimeIsOver() {
        const timeIsOver = this.props.startTime === this.state.counter;
        timeIsOver && this.setState({ paused: true });

        if (timeIsOver) {
            clearInterval(this.interval);
            notify(this.props.name, { body: timeToString(this.props.startTime) });
        }
    }
    
    resetCounter() {
        this.setState({ counter: 0 });
    }
    
    startCounting() {
        this.interval = setInterval(() => {
            this.updateCounter();
            this.stopIfTimeIsOver();
        }, this.oneHundredth);

        this.props.onStartCounting && this.props.onStartCounting();
    }

    updateCounter() {
        const { paused, counter } = this.state;            
        let updateCounter = this.props.isRegressive ? subtract(counter) : add(counter);
        
        if (!paused) {
            this.setState({ counter: add(counter)(this.oneHundredth) });
        }        
    }
    
    togglePaused() {
        this.state.paused ? this.startCounting() : clearInterval(this.interval);
        this.setState({ paused: !this.state.paused });
    }

    toggleExpanded() {
        this.state.expanded ? this.shrink() : this.expand();
    }

    expand() {
        const { onExpand, turnOnLightTheme } = this.props;

        onExpand && onExpand(this);
        turnOnLightTheme();
        this.setState({ expanded: true });
    }

    shrink() {
        const { onShrink, turnOffLightTheme } = this.props;

        onShrink && onShrink(this);        
        turnOffLightTheme();
        this.setState({ expanded: false });
    }

    reset() {
        this.setState({ counter: 0 });

        if (this.state.paused) {
            this.props.onReset();
        }
    }
}

TimerComponent.propTypes = {
    name: PropTypes.string,
    isRegressive: PropTypes.bool,
    startTime: PropTypes.number,
    disableStartPauseButton: PropTypes.bool,
    hideExpandButton: PropTypes.bool,
    showHundredths: PropTypes.bool,
    onExpand: PropTypes.func,
    onShrink: PropTypes.func,
    onStartCounting: PropTypes.func,
    onReset: PropTypes.func
};

TimerComponent.defaultProps = {
    name: 'Timer',
    isRegressive: false,
    startTime: 0,
    disableStartPauseButton: false,
    showHundredths: false
};

const mapDispatchToProps = (dispatch) => ({
    turnOnLightTheme: () => dispatch(turnOnLightTheme()),
    turnOffLightTheme: () => dispatch(turnOffLightTheme()),
})

export const Timer = connect(null, mapDispatchToProps, null, { withRef: true })(TimerComponent);