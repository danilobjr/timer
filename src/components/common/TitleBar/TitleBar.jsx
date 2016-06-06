import React, { Component } from 'react';

export class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <h5 className="title">Timers</h5>
                <div className="window-controls">
                    <button className="minimize">
                        <svg viewBox="0 0 10 10" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="5" x2="10" y2="5"/>
                        </svg>
                    </button>
                    <button className="maximize">
                        <svg viewBox="0 0 10 10" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="0" width="10" height="10" />
                        </svg>
                    </button>
                    <button className="close -red">
                        <svg viewBox="0 0 10 10" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="10" y2="10" />
                            <line x1="10" y1="0" x2="0" y2="10" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}