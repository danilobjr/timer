import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { connect } from 'react-redux';
import { TitleBarButton } from './TitleBarButton';

interface TitleBarComponentInternalProps {
  backButtonCallback: () => void;
  backButtonEnabled: boolean;
  isLightThemeOn: boolean;
  windowIsMaximized: boolean;
}

const TitleBarComponent: SFC<any> = ({
  isLightThemeOn,
  backButtonEnabled,
  backButtonCallback,
  windowIsMaximized,
}: TitleBarComponentInternalProps) => (
  <div className={renderCssClasses(isLightThemeOn)}>
    <TitleBarButton
      className={classNames('-back', { 'h-display-none': !backButtonEnabled })}
      icon="arrowLeft"
      lightTheme={isLightThemeOn}
      onClick={backButtonCallback}
    />
    <h5 className="title">Timers</h5>
    <div className="buttons">
      <TitleBarButton className="btn-minimize" icon="minus" lightTheme={isLightThemeOn} />
      <TitleBarButton
        className="btn-maximize"
        icon={windowIsMaximized ? 'squareDouble' : 'square'}
        lightTheme={isLightThemeOn}
      />
      <TitleBarButton className="btn-close" icon="remove" red lightTheme={isLightThemeOn} />
    </div>
  </div>
);

const renderCssClasses = (isLightThemeOn: boolean) => (
  classNames(
    'title-bar',
    { '-lighttheme': isLightThemeOn },
  )
);

const mapStateToProps = (state: any) => ({
  backButtonEnabled: state.backButtonEnabled,
  backButtonCallback: state.backButtonCallback,
  isLightThemeOn: state.isLightThemeOn,
  windowIsMaximized: state.windowIsMaximized,
});

export const TitleBar = connect(mapStateToProps)(TitleBarComponent);
