import * as React from 'react';
import { SFC } from 'react';
import { Toggleable, Timer, TimerProps } from 'components';

type ExpandableTimerProps = TimerProps;

export const ExpandableTimer: SFC<ExpandableTimerProps> = (props) => (
  <Toggleable>
    {({ active, toggle }) => (
      <Timer
        expanded={active}
        onClickToggleExpansion={toggle}
        {...props}
      />
    )}
  </Toggleable>
);
