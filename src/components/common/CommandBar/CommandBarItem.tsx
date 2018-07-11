import * as React from 'react';
import { HTMLProps, SFC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import {
  IconCheck, IconChecklist, IconMoreHorizontal, IconPlus,
  IconFloppy
} from 'components/common/Icons';

const icons = {
  check: IconCheck,
  checklist: IconChecklist,
  moreHorizontal: IconMoreHorizontal,
  plus: IconPlus,
  floppy: IconFloppy
};

const renderTo = (to: string) => to || ''

interface CommandBarItemProps extends LinkProps {
  icon: keyof typeof icons;
  to: string;
}

export const CommandBarItem: SFC<Partial<CommandBarItemProps>> = (props) => (
  <Link {...props} className="command-bar-item" to={renderTo(props.to)}>
    {React.createElement(icons[props.icon])}
  </Link>
)
