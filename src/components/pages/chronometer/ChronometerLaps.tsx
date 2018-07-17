import * as React from 'react';
import { Component } from 'react';
import { Watch } from 'components/common';
import { compose, prepend, head, when, last, log, flatten } from 'utils';
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
    const { laps, noHeader } = this.props;
    const hasNoResults = !laps || laps.length === 0;

    if (hasNoResults) {
      return null;
    }

    return (
      <div className="chronometer-laps">
        {!noHeader && (
          <header className="header">
            <h4 className="title">Laps</h4>
            <span>Partials</span>
          </header>
        )}

        <div className="scroller">
          <ol className="laps">
            {this.renderLaps()}
          </ol>
        </div>
      </div>
    );
  }

  // TODO: refactor
  renderLaps() {
    const maybeLast = when<number[], number>(() => this.props.showOnlyLastLap)(last);

    const laps = flatten([maybeLast(this.props.laps)]);

    const partials = compose(
      prepend(head(laps)),
      differenceBetweenResults,
    )(laps);

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
