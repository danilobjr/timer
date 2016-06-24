import React, { Component, PropTypes } from 'react';
import { Watch } from 'components/common';

export class ChronometerResults extends Component {
    render() {
        if (!this.props.results || this.props.results.length === 0) {
            return null;
        }

        return (
            <div className="chronometer-results">
                <header className="header">
                    <h4 className="title">Laps</h4>
                    <span>Partials</span>
                </header>
                <div className="scroller">
                    <ol className="laps">
                        {this.renderLaps()}
                    </ol>
                </div>
            </div>
        );
    }

    renderLaps() {
        return this.props.results.map(result => {
            return (
                <li key={result} className="lap">
                    <div className="partial">
                        <Watch time={6153} showHundredths />
                    </div>
                    <div className="total">
                        <Watch time={result} showHundredths />
                    </div>
                </li>
            );
        });
    }
}

ChronometerResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.number)
};