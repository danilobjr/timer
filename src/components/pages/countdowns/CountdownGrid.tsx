import * as React from 'react';
import { Countdown } from 'models';
import { SFC } from 'react';
import { CountdownTimer } from './CountdownTimer';

type CountdownGridProps = {
  isEdition: boolean;
  countdowns: Countdown[];
} & Actions;

type Actions = {
  onClickPause: (id: string) => void;
  onClickRemove: (id: string) => void;
  onClickReset: (id: string) => void;
  onClickStart: (id: string) => void;
};

export const CountdownGrid: SFC<CountdownGridProps> = ({ isEdition, countdowns, ...otherProps }) => {
  const bindIdAndPropAction = (id: string, prop: keyof Actions) => () => otherProps[prop](id);

  return (
    <div className="countdown-grid">
      {countdowns.map(countdown => (
        <CountdownTimer
          key={countdown.id}
          countdown={countdown}
          isEdition={isEdition}
          onClickPause={bindIdAndPropAction(countdown.id, 'onClickPause')}
          onClickRemove={bindIdAndPropAction(countdown.id, 'onClickRemove')}
          onClickReset={bindIdAndPropAction(countdown.id, 'onClickReset')}
          onClickStart={bindIdAndPropAction(countdown.id, 'onClickStart')}
        />
      ))}
    </div>
  );
};
