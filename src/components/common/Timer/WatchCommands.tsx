import * as React from 'react';
import { SFC } from 'react';
import { StartPauseButton } from './StartPauseButton';
import { WatchCommandButton } from './WatchCommandButton';
import { validatePercentageProgressProp } from './propValidations';

interface WatchCommandsProps {
  disableStartPauseButton?: boolean;
  hideExpandButton?: boolean;
  hideShrinkButton?: boolean
  lightTheme?: boolean;
  percentageProgress?: number;
  showPauseIcon?: boolean;
  onClickExpandButton: () => void;
  onClickShrinkButton: () => void;
  onClickStartPauseButton: () => void;
}

export const WatchCommands: SFC<WatchCommandsProps> = ({
    children,
    hideExpandButton,
    hideShrinkButton,
    lightTheme,
    disableStartPauseButton,
    showPauseIcon,
    percentageProgress,
    onClickExpandButton,
    onClickShrinkButton,
    onClickStartPauseButton
  }) => (
    <div className="watch-commands">
      {children}

      <StartPauseButton
        lightTheme={lightTheme}
        disabled={disableStartPauseButton}
        showPause={showPauseIcon}
        percentageProgress={percentageProgress}
        onClick={onClickStartPauseButton}
      />
      <WatchCommandButton
        className="expand"
        icon="expand"
        title="Expand"
        hideButton={hideExpandButton}
        position="right"
        lightTheme={lightTheme}
        onClick={onClickExpandButton}
      />
      <WatchCommandButton
        className="shrink"
        icon="compress"
        title="Shrink"
        hideButton={hideShrinkButton}
        position="right"
        lightTheme={lightTheme}
        onClick={onClickShrinkButton}
      />
    </div>
)

WatchCommands.defaultProps = {
  disableStartPauseButton: false,
  hideExpandButton: false,
  hideShrinkButton: true,
  lightTheme: false,
  percentageProgress: 0,
  showPauseIcon: false,
};
