import React, { Component, PropTypes } from 'react';
import { Watch } from 'components/common';

export class ChronometerResults extends Component {
    render() {
        if (!this.props.partials || this.props.partials.length === 0) {
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
        return this.props.partials.map(partial => {
            return (
                <li key={partial} className="lap">
                    <div className="partial">
                        <Watch time={6153} showHundredths />
                    </div>
                    <div className="total">
                        <Watch time={partial} showHundredths />
                    </div>
                </li>
            );
        });
    }
}

ChronometerResults.propTypes = {
    partials: PropTypes.arrayOf(PropTypes.number)
};