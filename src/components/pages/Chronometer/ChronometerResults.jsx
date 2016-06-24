import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BaseComponent } from 'BaseComponent';
import { Watch } from 'components/common';
import { compose, prepend, head } from 'helpers';
import { differenceBetweenResults, mapResults } from './localHelpers';

export class ChronometerResultsComponent extends BaseComponent {
    render() {
        const { results, isLightThemeOn } = this.props;
        const hasNoResults = !results || results.length === 0;
        if (hasNoResults) { 
            return null; 
        }

        return (
            <div className={this.classNames('chronometer-results', { '-lighttheme': isLightThemeOn })}>
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

ChronometerResultsComponent.propTypes = {
    results: PropTypes.arrayOf(PropTypes.number)
};

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const ChronometerResults = connect(mapStateToProps)(ChronometerResultsComponent);