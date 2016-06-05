import React, { Component, PropTypes } from 'react';
import { compose, time, replace, padLeft } from 'helpers';

export class CounterWatch extends Component {
    render() {
        const [ hours, minutes, seconds ] = this.getRemainingTime();
        
        return (
            <div className="counter-watch">
                <span className="unit">{this.padLeftWithZero(hours)}</span>
                <span className="unit active">{this.padLeftWithZero(minutes)}</span>
                <span className="unit active">{this.padLeftWithZero(seconds)}</span>
            </div>
        );
    }
    
    getRemainingTime() {
        console.log(time(this.props.totalTime - this.props.currentTime));
        return time(this.props.totalTime - this.props.currentTime);
    }
    
    padLeftWithZero(value) {
        console.log(compose(replace(' ', '0'), padLeft(2))(value));
        return compose(replace(' ')('0'), padLeft(2))(value);
    }
}

CounterWatch.propTypes = {
    currentTime: PropTypes.number,
    totalTime: PropTypes.number
};

CounterWatch.defaultProps = {
    currentTime: 0,
    totalTime: 0
};