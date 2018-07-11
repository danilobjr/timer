import * as React from 'react';
import classNames from 'classnames';
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
} & HTMLProps<HTMLDivElement>;

export const CommandBarItem: SFC<CommandBarItemProps> = ({
  icon,
  narrow,
  ...otherProps }) => (
    <div
      className={classNames(
        'command-bar-item',
        narrow && '-narrow',
      )}
      {...otherProps}
    >
      {React.createElement(icons[icon])}
    </div>
  );

CommandBarItem.defaultProps = {
  narrow: false,
};
