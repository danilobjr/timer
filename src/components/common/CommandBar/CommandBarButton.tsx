import * as React from 'react';
import * as classNames from 'classnames';
import { SFC, HTMLProps } from 'react';
import {
  IconArrowLeft,
  IconCheck,
  IconChecklist,
  IconFloppy,
  IconMoreHorizontal,
  IconPlus,
  IconRemove,
} from 'icons';

const icons = {
  arrowLeft: IconArrowLeft,
  check: IconCheck,
  checklist: IconChecklist,
  floppy: IconFloppy,
  moreHorizontal: IconMoreHorizontal,
  plus: IconPlus,
  remove: IconRemove,
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
