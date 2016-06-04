import React, { Component } from 'react';
import { CounterWatch } from './CounterWatch';
import { StartPauseButton } from './StartPauseButton';

export class Timer extends Component {
    render() {
        return (
            <div className="timer">
                <CounterWatch />
                <div className="commands">
                    <button className="reset">
                        <span className="icon ion-md-refresh"></span>
                    </button>
                    <StartPauseButton isPlaying percentageProgress={.5} />
                    <button className="expand">
                        <span className="icon ion-md-expand"></span>
                    </button>
                </div>
                <div className="info">
                    <span className="name">My interval</span>
                    <CounterWatch />
                </div>
            </div>
        );
    }
}