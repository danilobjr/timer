import * as React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import { Watch } from 'components/common';
import { compose, prepend, head } from 'utils';
import { differenceBetweenResults, mapResults } from './localUtils';

type ChronometerLapsProps = {
  laps: number[];
  noHeader?: boolean;
  showOnlyLastLap?: boolean;
};

export class ChronometerLaps extends Component<ChronometerLapsProps> {
  static defaultProps: Partial<ChronometerLapsProps> = {
    noHeader: false,
    showOnlyLastLap: false,
  };

  render() {
    const { laps, noHeader, showOnlyLastLap } = this.props;
    const hasNoResults = !laps || laps.length === 0;

    if (hasNoResults) {
      return null;
    }

    return (
      <div
        className={classNames(
          'chronometer-laps',
          showOnlyLastLap && '-show-only-last-lap',
        )}
      >
        {!noHeader && (
          <header className="header">
            <h4 className="title">Laps</h4>
            <span>Partials</span>
          </header>
        )}

        <div className="scroller">
          <ul className="laps">
            {this.renderLaps()}
          </ul>
        </div>
      </div>
    );
  }

  // TODO: refactor
  renderLaps() {
    const { laps } = this.props;

    const partials = compose(
      prepend(head(laps)),
      differenceBetweenResults,
    )(laps);

    const mappedResults = mapResults(laps)(partials);

    return mappedResults.map((result, index) => {
      return (
        <li key={result.total} className="lap">
          <span className="number">{index + 1}</span>
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
