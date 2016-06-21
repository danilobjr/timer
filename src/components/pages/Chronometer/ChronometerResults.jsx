import React, { Component } from 'react';
import { Watch } from 'components/common';

export class ChronometerResults extends Component {
    render() {
        return (
            <div className="chronometer-results">
                <header className="header">
                    <h4 className="title">Laps</h4>
                    <span>Partials</span>
                </header>
                <div className="scroller">
                    <ol className="laps">
                        <li className="lap">
                            <div className="partial">
                                <Watch time={6123} />
                            </div>
                            <div className="total">
                                <Watch time={6123} />
                            </div>
                        </li>
                        <li className="lap">
                            <div className="partial">
                                <Watch time={6123} />
                            </div>
                            <div className="total">
                                <Watch time={6123} />
                            </div>
                        </li>
                        <li className="lap">
                            <div className="partial">
                                <Watch time={6123} />
                            </div>
                            <div className="total">
                                <Watch time={6123} />
                            </div>
                        </li>
                        <li className="lap">
                            <div className="partial">
                                <Watch time={6123} />
                            </div>
                            <div className="total">
                                <Watch time={6123} />
                            </div>
                        </li>
                        <li className="lap">
                            <div className="partial">
                                <div className="watch">
                                    <span className="unit">00</span>
                                    <span className="unit -active">01</span>
                                    <span className="unit -active">21</span>
                                    <span className="unit -active -small">32</span>
                                </div>
                            </div>
                            <div className="total">
                                <div className="watch">
                                    <span className="unit">00</span>
                                    <span className="unit -active">01</span>
                                    <span className="unit -active">21</span>
                                    <span className="unit -active -small">32</span>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}