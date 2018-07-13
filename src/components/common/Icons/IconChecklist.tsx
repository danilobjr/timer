import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

const styles = {
  checkmark: {
    fill: 'none',
    transformOrigin: '100% 100%',
    transform: 'rotateZ(45deg)',
  },
  phrase: {
    strokeWidth: 1.3,
    crispEdges: iconStyles.crispEdges,
  },
};

type IconChecklistProps = IconProps;

export const IconChecklist: SFC<IconChecklistProps> = (props) => (
  <Icon name="icon-checklist" width={20} height={15} {...props}>
    <defs>
      <polyline id="checkmark" points="0.5,5 3,5 3,1" style={styles.checkmark} />
      <line id="phrase" x1="1" y1="0.5" x2="14" y2="0.5" style={styles.phrase} />
    </defs>
    <use xlinkHref="#checkmark" x="-13" y="8" />
    <use xlinkHref="#checkmark" x="-13" y="14" />
    <use xlinkHref="#phrase" x="6" y="2" />
    <use xlinkHref="#phrase" x="6" y="6" />
    <use xlinkHref="#phrase" x="6" y="10" />
    <use xlinkHref="#phrase" x="6" y="14" />
  </Icon>
);
