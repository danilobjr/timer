import * as React from 'react';
import Link from 'next/link';
import { Fragment, SFC } from 'react';
import { CommandBar, CommandBarItem } from 'components/common';

type CountdownsPageCommandBarProps = {
  hideEditButton?: boolean;
  isEdition: boolean;
  onClickEdit?: () => void;
  onClickDone?: () => void;
};

export const CountdownsPageCommandBar: SFC<CountdownsPageCommandBarProps> = ({
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
            <Link href="/new-countdown">
              <CommandBarItem icon="plus" title="New" />
            </Link>

            {!hideEditButton && (
              <CommandBarItem
                icon="checklist"
                title="Edit"
                onClick={onClickEdit}
              />
            )}

            {/* <CommandBarItem
              icon="moreHorizontal"
              narrow
              title="More"
            /> */}
          </Fragment>
        )}
    </CommandBar>
  );

CountdownsPageCommandBar.defaultProps = {
  hideEditButton: true,
  onClickDone: () => null,
  onClickEdit: () => null,
};
