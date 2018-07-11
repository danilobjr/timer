import * as React from 'react';
import { Fragment, SFC } from 'react';
import { CommandBar, CommandBarItem } from 'components/common';

type TimersPageCommandBarProps = {
  hideEditButton?: boolean;
  isEditionMode: boolean;
  onClickEdit?: () => void;
  onClickDone?: () => void;
};

export const TimersPageCommandBar: SFC<TimersPageCommandBarProps> = ({
  hideEditButton,
  isEditionMode,
  onClickDone,
  onClickEdit }) => (
    <CommandBar>
      {!!isEditionMode ? (
        <CommandBarItem
          icon="check"
          title="Done"
          onClick={onClickDone}
        />
      ) : (
        <Fragment>
          <CommandBarItem
            href="/new-timer"
            icon="plus"
            title="New"
          />

          {!hideEditButton && (
            <CommandBarItem
              icon="checklist"
              title="Edit"
              onClick={onClickEdit}
            />
          )}

          <CommandBarItem
            icon="moreHorizontal"
            narrow
            title="More"
          />
        </Fragment>
      )}
    </CommandBar>
  );

TimersPageCommandBar.defaultProps = {
  hideEditButton: true,
  onClickDone: () => null,
  onClickEdit: () => null,
};
