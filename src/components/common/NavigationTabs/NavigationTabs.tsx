import * as React from 'react';
import { SFC } from 'react';
import { connect } from 'react-redux';
import { NavigationTabItem } from './NavigationTabItem';
import { changeActiveNavigationTabItem } from './actions';
import { items } from './items';

interface NavigationTabsComponentProps {
  currentActiveItemIndex: number;
  changeActiveItemIndex: (id: number) => void;
}

const NavigationTabsComponent: SFC<NavigationTabsComponentProps> = (props) => (
  <nav className="navigation-tabs">
    <ul className="list">
      {renderNavigationTabItems(props)}
    </ul>
  </nav>
);

const renderNavigationTabItems = (props: NavigationTabsComponentProps) => {
  const { currentActiveItemIndex, changeActiveItemIndex } = props;

  return items.map((item, index) =>
    <NavigationTabItem
      key={index}
      text={item.text}
      icon={item.icon}
      isActive={currentActiveItemIndex === index}
      onItemClick={() => changeActiveItemIndex(index)}
    />
  );
}

const mapStateToProps = (state: any) => ({
  currentActiveItemIndex: state.activeNavigationTabItemIndexHistory[0]
})

const mapDispatchToProps = (dispatch: any) => ({
  changeActiveItemIndex: (id: number) => dispatch(changeActiveNavigationTabItem(id))
})

export const NavigationTabs = connect(mapStateToProps, mapDispatchToProps)(NavigationTabsComponent);
