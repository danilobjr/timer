import * as React from 'react';
import Link from 'next/link';
import { SFC } from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import { NavigationItem } from './NavigationItem';

export const Navigation: SFC<{}> = withRouter<WithRouterProps>(({ router }) => (
  <nav className="navigation-tabs">
    <ul className="list">
      <Link href="/">
        <NavigationItem
          text="Timer"
          icon="timer"
          active={router.pathname.includes('/')}
        />
      </Link>
      <Link href="/chronometer">
        <NavigationItem
          text="Chronometer"
          icon="stopwatch"
          active={router.pathname.includes('chronometer')}
        />
      </Link>
    </ul>
  </nav>
)) as any;
