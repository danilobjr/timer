import * as React from 'react';
import { SFC } from 'react';
import { CommandBar, CommandBarItem } from 'components/common';

interface TimerTabCommandBarProps {
  hideEditButton?: boolean;
  isEditionMode: boolean;
  onClickEdit?: () => void;
  onClickDone?: () => void;
}

export const TimerTabCommandBar: SFC<TimerTabCommandBarProps> = (props) => (
  <CommandBar>
    {renderItems(props)}
    <CommandBarItem icon="moreHorizontal" title="More" />
  </CommandBar>
)

const renderItems = ({ hideEditButton, isEditionMode, onClickEdit, onClickDone }: TimerTabCommandBarProps) => {
  if (isEditionMode) {
    return [<CommandBarItem key="0" icon="check" title="Done" onClick={onClickDone} />];
  } else {
    const items = [<CommandBarItem key="0" href="/new-timer" icon="plus" title="New" />];
    hideEditButton || items.push(<CommandBarItem key="1" icon="checklist" title="Edit" onClick={onClickEdit} />);
    return items;
  }
}

TimerTabCommandBar.defaultProps = {
  hideEditButton: true,
};
