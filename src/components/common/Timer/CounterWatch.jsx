import React, { Component } from 'react';

export class CounterWatch extends Component {
    render() {
        return (
            <div className="counter-watch">
                <span className="unit">00</span>
                <span className="unit active">21</span>
                <span className="unit active">40</span>
            </div>
        );
    }
}