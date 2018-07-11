import * as React from 'react';
import { SFC } from 'react';
import { Icon } from './Icon';

const styles = {
  stroke: 'none'
};

export const IconMoreHorizontal: SFC<{}> = () => (
  <Icon name="icon-more-horizontal" width={14} height={2}>
    <defs>
      <rect id="dot" x="0" y="0" width="2" height="2" style={styles} />
    </defs>
    <use xlinkHref="#dot" x="0" y="0" />
    <use xlinkHref="#dot" x="6" y="0" />
    <use xlinkHref="#dot" x="12" y="0" />
  </Icon>
)
