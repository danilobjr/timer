import React, { Component, PropTypes } from 'react';
import { CounterWatch } from './CounterWatch';
import { StartPauseButton } from './StartPauseButton';

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
                <div className="commands">
                    <button className="reset">
                        <span className="icon ion-md-refresh"></span>
                    </button>
                    <StartPauseButton 
                        showPause={!paused}
                        percentageProgress={this.calculatePercentageProgress()}
                        onClick={this.togglePaused.bind(this)}
                    />
                    <button className="expand">
                        <span className="icon ion-md-expand"></span>
                    </button>
                </div>
                <div className="info">
                    <span className="name">{name}</span>
                    <CounterWatch totalTime={time} />
                </div>
            </div>
        );
    }
    
    calculatePercentageProgress() {
        const { paused, counter } = this.state;
        
        if (paused && counter === 0) {
            return 0;
        }
        
        const remainingTime = this.props.time - this.state.counter;
        return remainingTime / this.props.time
    }
    
    togglePaused() {
        this.setState({ paused: !this.state.paused });
    }
}

Timer.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number.isRequired
};

Timer.defaultProps = {
    name: 'Timer'
};