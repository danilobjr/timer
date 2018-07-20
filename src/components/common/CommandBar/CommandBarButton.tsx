import * as React from 'react';
import classNames from 'classnames';
import { SFC, HTMLProps } from 'react';
import {
  IconCheck,
  IconChecklist,
  IconMoreHorizontal,
  IconPlus,
  IconFloppy,
} from 'icons';

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

export const CommandBarButton: SFC<CommandBarItemProps> = ({ icon, narrow, ...otherProps }) => (
  <div
    className={classNames(
      'command-bar-button',
      narrow && '-narrow',
    )}
    {...otherProps}
    onClick={handleClick(otherProps)}
  >
    {React.createElement(icons[icon])}
  </div>
);

CommandBarButton.defaultProps = {
  narrow: false,
};

function handleClick({ disabled, onClick }: Partial<CommandBarItemProps>) {
  return disabled
    ? () => { return; }
    : onClick;
}
