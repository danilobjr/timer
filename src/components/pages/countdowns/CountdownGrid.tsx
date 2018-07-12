import * as React from 'react';
import { Countdown } from 'models';
import { SFC } from 'react';
import { CountdownTimer } from './CountdownTimer';

type CountdownGridProps = {
  isEdition: boolean;
  timers: Countdown[];
  onClickRemove: (id: string) => void;
};

export const CountdownGrid: SFC<CountdownGridProps> = ({ isEdition, timers, onClickRemove }) => {
  const remove = (id: string) => () => onClickRemove(id);

  return (
    <div className="countdown-grid">
      {timers.map(({ id, name, milliseconds }) => (
        <CountdownTimer
          key={id}
          name={name}
          time={milliseconds}
          isEdition={isEdition}
          onClickRemove={remove(id)}
        />
      ))}
    </div>
  );
};
