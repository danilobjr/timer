import React, { Component, PropTypes } from 'react';
import { Watch } from 'components/common';
import { compose, prepend, head } from 'helpers';
import { differenceBetweenResults, mapResults } from './localHelpers';

export class ChronometerResults extends Component {
    render() {
        const { results } = this.props;
        const hasNoResults = !results || results.length === 0;
        if (hasNoResults) { 
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
        const { results } = this.props;

        const partials = compose(prepend(head(results)), differenceBetweenResults)(results);
        const mappedResults = mapResults(results)(partials);

        return mappedResults.map(result => {
            return (
                <li key={result.total} className="lap">
                    <div className="partial">
                        <Watch time={result.partial} showHundredths />
                    </div>
                    <div className="total">
                        <Watch time={result.total} showHundredths />
                    </div>
                </li>
            );
        });
    }
}

ChronometerResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.number)
};