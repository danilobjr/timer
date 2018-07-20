import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { IconRemove } from 'icons';

type ToasterProps = {
  show?: boolean;
  onClickClose?: () => void;
};

export const Toaster: SFC<ToasterProps> = ({ children, show, onClickClose }) => (
  <div className={classNames('toaster', show && '-show')}>
    <div className="body">{children}</div>
    <div className="button" onClick={onClickClose}>
      <IconRemove />
    </div>
  </div>
);

Toaster.defaultProps = {
  show: false,
  onClickClose: () => null,
};
