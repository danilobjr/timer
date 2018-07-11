import * as React from 'react';
import { SFC } from 'react';
import { Icon } from './Icon';
import { iconStyles } from './styles';

const styles = Object.assign({},
  iconStyles.timerCommandButton.base,
  iconStyles.timerCommandButton.reset
);

export const IconReset: SFC<{}> = () => (
  <Icon name="icon-reset" width={20} height={20}>
    <g>
      <circle className="arc" cx="10" cy="10" r="9.4" style={styles} />
      <g>
        <line x1="0.6" y1="2" x2="0.6" y2="7" />
        <line x1="0" y1="6.5" x2="5" y2="6.5" />
      </g>
    </g>
  </Icon>
)
