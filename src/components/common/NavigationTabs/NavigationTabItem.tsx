import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { IconStopwatch, IconTimer } from 'components/common';

export const icons = {
  stopwatch: IconStopwatch,
  timer: IconTimer,
};

const renderLiClassNames = (isActive: boolean) => {
  return classNames(
    'navigation-tab-item',
    isActive && '-active'
  );
}

interface NavigationTabItemProps {
  icon: keyof typeof icons;
  isActive?: boolean;
  text: string;
  onItemClick: () => void;
}

export const NavigationTabItem: SFC<NavigationTabItemProps> =
  ({ icon, isActive, text, onItemClick }) => (
    <li
      className={renderLiClassNames(isActive)}
      onClick={onItemClick}
    >
      {React.createElement(icons[icon])}
      <span className="text">{text}</span>
    </li>
  )

NavigationTabItem.defaultProps = {
  isActive: false,
  onItemClick: () => null,
};
