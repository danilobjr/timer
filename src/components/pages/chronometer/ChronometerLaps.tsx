import * as React from 'react';
import { Component } from 'react';
import { Watch } from 'components';
import { compose, prepend, head, when, last, flatten, map } from 'utils';
import { differenceBetweenResults, mapResults } from './localUtils';
import { StringKeyValuePair } from 'models';

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
          <ul className="laps">
            {this.renderLaps()}
          </ul>
        </div>
      </div>
    );
  }

  // TODO: refactor
  // TODO: use reselect for a better performance?
  renderLaps() {
    const { laps, showOnlyLastLap } = this.props;

    const partials = compose(
      prepend(head(laps)),
      differenceBetweenResults,
    )(laps);

    const mappedLaps = mapResults(laps)(partials);
    const maybeOnlyLast = when(() => showOnlyLastLap)(last);
    const mapToListItems = map<StringKeyValuePair>((result, index) => (
      <li key={result.total} className="lap">
        <span className="number">{index + 1}</span>
        <div className="partial">
          <Watch time={result.partial} showHundredths />
        </div>
        <div className="total">
          <Watch time={result.total} showHundredths />
        </div>
      </li>
    ));

    return compose(
      maybeOnlyLast,
      mapToListItems,
      flatten,
    )(mappedLaps);
  }
}
