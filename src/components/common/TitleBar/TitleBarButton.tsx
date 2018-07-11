import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';
import {
  IconArrowLeft, IconMinus, IconRemove,
  IconSquare, IconSquareDouble
} from 'components/common';

const icons = {
  arrowLeft: IconArrowLeft,
  minus: IconMinus,
  remove: IconRemove,
  square: IconSquare,
  squareDouble: IconSquareDouble
};

const renderCssClasses = (props: TitleBarButtonProps) => (
  classNames(
    'title-bar-button',
    props.className,
    {
      '-red': props.red,
      '-lighttheme': props.lightTheme
    }
  )
)

interface TitleBarButtonProps extends HTMLProps<HTMLButtonElement> {
  icon: keyof typeof icons;
  red?: boolean;
  lightTheme?: boolean;
  onClick?: () => void;
}

export const TitleBarButton: SFC<TitleBarButtonProps> = (props) => {
  const icon = props.icon ? React.createElement(icons[props.icon]) : null;
  const lightTheme = props.lightTheme ? '-lighttheme' : '';

  return <button className={renderCssClasses(props)} onClick={props.onClick}>{icon}</button>;
}

TitleBarButton.defaultProps = {
  red: false,
  lightTheme: false,
  onClick: () => null,
};
