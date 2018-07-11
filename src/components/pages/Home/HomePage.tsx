import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationTabs, PageView } from 'components/common';
import { ChronometerTab } from 'components/pages/Chronometer';
import { TimerTab } from 'components/pages/Timer';

const tabs = [
  <TimerTab />,
  <ChronometerTab />
];

class HomePageComponent extends Component<any> {
  render() {
    return (
      <PageView>
        <NavigationTabs />
        {this.renderTab()}
      </PageView>
    );
  }

  renderTab() {
    return tabs[this.props.activeTabIndex];
  }
}

const mapStateToProps = (state: any) => ({
  activeTabIndex: state.activeNavigationTabItemIndexHistory[0]
})

export const HomePage = connect(mapStateToProps)(HomePageComponent);
