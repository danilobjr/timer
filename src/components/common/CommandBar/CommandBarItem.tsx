import * as React from 'react';
import { SFC } from 'react';
import Link, { LinkProps } from 'next/link';
import {
  IconCheck,
  IconChecklist,
  IconMoreHorizontal,
  IconPlus,
  IconFloppy,
} from 'components/common/Icons';

const icons = {
  check: IconCheck,
  checklist: IconChecklist,
  moreHorizontal: IconMoreHorizontal,
  plus: IconPlus,
  floppy: IconFloppy
};

// TODO: refactor for use HTMLProps
type CommandBarItemProps = {
  disabled?: boolean;
  icon: keyof typeof icons;
  title?: string;
  onClick?: () => void;
} & LinkProps;

export const CommandBarItem: SFC<Partial<CommandBarItemProps>> = ({ icon, title, onClick, ...otherProps }) => (
  <Link {...otherProps}>
    <a className="command-bar-item" title={title} onClick={onClick}>
      {React.createElement(icons[icon])}
    </a>
  </Link>
);

CommandBarItem.defaultProps = {
  disabled: false,
  title: '',
  onClick: () => null,
};
