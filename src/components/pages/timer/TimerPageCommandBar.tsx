import * as React from 'react';
import Link from 'next/link';
import { Fragment, SFC } from 'react';
import { CommandBar, CommandBarItem } from 'components/common';

type TimerPageCommandBarProps = {
  hideEditButton?: boolean;
  isEdition: boolean;
  onClickEdit?: () => void;
  onClickDone?: () => void;
};

export const TimerPageCommandBar: SFC<TimerPageCommandBarProps> = ({
  hideEditButton,
  isEdition,
  onClickDone,
  onClickEdit }) => (
    <CommandBar>
      {!!isEdition ? (
        <CommandBarItem
          icon="check"
          title="Done"
          onClick={onClickDone}
        />
      ) : (
          <Fragment>
            <Link href="/new-timer">
              <CommandBarItem icon="plus" title="New" />
            </Link>

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

TimerPageCommandBar.defaultProps = {
  hideEditButton: true,
  onClickDone: () => null,
  onClickEdit: () => null,
};
