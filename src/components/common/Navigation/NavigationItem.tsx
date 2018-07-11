import * as React from 'react';
import * as classNames from 'classnames';
import { SFC, HTMLProps } from 'react';
import { IconStopwatch, IconTimer } from 'components/common';

export const icons = {
  stopwatch: IconStopwatch,
  timer: IconTimer,
};

const renderLiClassNames = (isActive: boolean) => {
  return classNames(
    'navigation-tab-item',
    isActive && '-active',
  );
};

type NavigationItemProps = {
  icon: keyof typeof icons;
  active?: boolean;
  text: string;
} & HTMLProps<HTMLLIElement>;

export const NavigationItem: SFC<NavigationItemProps> = ({
  icon,
  active,
  text,
  ...otherProps }) => (
    <li
      className={renderLiClassNames(active)}
      {...otherProps}
    >
      {React.createElement(icons[icon])}
      <span className="text">{text}</span>
    </li>
  );

NavigationItem.defaultProps = {
  active: false,
};
