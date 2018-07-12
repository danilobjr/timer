import * as React from 'react';
import { SFC } from 'react';
import { Timer } from 'models';
import { CountdownTimer } from 'components/pages/timer';
import { milliseconds } from 'helpers';

type TimerGridProps = {
  isEdition: boolean;
  timers: Timer[];
  onClickRemove: (id: string) => void;
};

export const TimerGrid: SFC<TimerGridProps> = ({ isEdition, timers, onClickRemove }) => {
  const remove = (id: string) => () => onClickRemove(id);

  return (
    <div className="timer-grid">
      {timers.map((timer: Timer) => {
        const { id, name, hours, minutes, seconds } = timer;

        return (
          <CountdownTimer
            key={id}
            name={name}
            time={milliseconds(hours, minutes, seconds)}
            isEdition={isEdition}
            onClickRemoveButton={remove(id)}
          />
        );
      })}
    </div>
  );
};
