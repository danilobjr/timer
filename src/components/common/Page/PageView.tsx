import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { FlexBox, FlexBoxProps } from 'components/common';

interface PageViewProps extends FlexBoxProps {
  row?: boolean;
}

export const PageView: SFC<PageViewProps> = ({children, className, row}) => (
  <FlexBox className={classNames('page-view', className)} column={!row} >
    {children}
  </FlexBox>
)

PageView.defaultProps = {
  row: false
};
