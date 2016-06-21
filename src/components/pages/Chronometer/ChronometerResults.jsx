import React, { Component } from 'react';

export class ChronometerResults extends Component {
    render() {
        return (
            <div className="chronometer-results">
                <h4>Partial laps</h4>
                <div className="scroller">
                    <ul className="laps">
                        <li className="lap">
                            <div className="partial">
                                <div className="watch">
                                    <span className="unit">00</span>
                                    <span className="unit">01</span>
                                    <span className="unit">21</span>
                                    <span className="unit -small">32</span>
                                </div>
                            </div>
                            <p className="total">00:04:38,05</p>
                        </li>
                        <li className="lap">
                            <p className="partial">00:00:01,20</p>
                            <p className="total">00:04:38,05</p>
                        </li>
                        <li className="lap">
                            <p className="partial">00:00:01,20</p>
                            <p className="total">00:04:38,05</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}