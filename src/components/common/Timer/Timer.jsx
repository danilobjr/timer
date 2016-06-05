import React, { Component, PropTypes } from 'react';
import { CounterWatch } from './CounterWatch';
import { StartPauseButton } from './StartPauseButton';
import { TimerCommands } from './TimerCommands';

export class Timer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            paused: true,
            counter: 0
        };
        
        this.interval = null;
    }
    
    componentDidMount() {
        const oneSecond = 1000;
        
        this.interval = setInterval(() => {
            const { paused, counter } = this.state;            
            
            if (!paused) {
                this.setState({ counter: counter + oneSecond });
            }
            
            this.stopIfTimeIsOver();
        }, oneSecond);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const { paused, counter } = this.state;
        const { name, time } = this.props;
        
        return (
            <div className="timer">
                <CounterWatch currentTime={counter} totalTime={time} />
                <TimerCommands 
                    showPause={!paused}
                    showResetButton={this.shouldShowResetButton()}
                    percentageProgress={this.calculatePercentageProgress()}
                    disableStartPauseButton={this.shouldDisableStartPauseButton()}
                    onClickStartPauseButton={this.togglePaused.bind(this)}
                    onClickResetButton={this.resetCounter.bind(this)}
                    onClickExpandButton={() => console.log('Expand clicked')}
                />
                <div className="info">
                    <span className="name">{name}</span>
                    <CounterWatch totalTime={time} />
                </div>
            </div>
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
        this.props.time === this.state.counter && this.setState({ paused: true });
    }
    
    togglePaused() {
        this.setState({ paused: !this.state.paused });
    }
    
    resetCounter() {
        this.setState({ counter: 0 });
    }
}

Timer.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number.isRequired
};

Timer.defaultProps = {
    name: 'Timer'
};