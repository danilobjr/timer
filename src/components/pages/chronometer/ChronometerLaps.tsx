import * as React from 'react';
import { Component } from 'react';
import { Watch } from 'components/common';
import { compose, prepend, head } from 'utils';
import { differenceBetweenResults, mapResults } from './localUtils';

interface ChronometerLapsProps {
  laps: number[];
}

export class ChronometerLaps extends Component<ChronometerLapsProps> {
  render() {
    const { laps } = this.props;
    const hasNoResults = !laps || laps.length === 0;

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
    const { laps } = this.props;

    const partials = compose(prepend(head(laps)), differenceBetweenResults)(laps);
    const mappedResults = mapResults(laps)(partials);

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
