import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { SFC, HTMLProps } from 'react';
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
  floppy: IconFloppy,
};

type CommandBarItemProps = {
  icon: keyof typeof icons;
  narrow?: boolean;
} & HTMLProps<HTMLAnchorElement>;

export const CommandBarItem: SFC<Partial<CommandBarItemProps>> = ({ href, icon, narrow, ...otherProps }) => (
  <Link href={href}>
    <a
      className={classNames(
        'command-bar-item',
        { '-narrow': narrow },
      )}
      {...otherProps}
    >
      {React.createElement(icons[icon])}
    </a>
  </Link>
);

CommandBarItem.defaultProps = {
  narrow: false,
};
