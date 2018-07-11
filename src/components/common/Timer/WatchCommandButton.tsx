import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import {
  IconCompress, IconExpand, IconFlag,
  IconReset, IconTrash
} from './../Icons';

const icons = {
  compress: IconCompress,
  expand: IconExpand,
  flag: IconFlag,
  reset: IconReset,
  trash: IconTrash
};

interface WatchCommandButtonProps extends HTMLProps<HTMLButtonElement> {
  icon: keyof typeof icons;
  title: string;
  hideButton?: boolean;
  lightTheme?: boolean;
  position?: 'left' | 'right';
}

export const WatchCommandButton: SFC<WatchCommandButtonProps> = ({ icon, title, onClick, ...otherProps }) => {
  const iconElement = icon ? React.createElement(icons[icon]) : null;

  return (
    <button
      className={renderCommonButtonCssClasses(otherProps)}
      onClick={onClick}
      title={title}
    >
      {iconElement}
    </button>
  );
}

const renderCommonButtonCssClasses = (props: Partial<WatchCommandButtonProps>) => {
  return classNames(
    'watch-command-button',
    props.className,
    '-reactive',
    {
      '-lightTheme': props.lightTheme,
      'h-display-none': props.hideButton,
      'h-pull-left': props.position === 'left',
      'h-pull-right': props.position === 'right'
    }
  );
}

WatchCommandButton.defaultProps = {
  hideButton: false,
  lightTheme: false,
  position: 'left'
};
