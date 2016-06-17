import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationTabItem } from './NavigationTabItem';
import { changeActiveNavigationTabItem } from './actions';
import { items } from './items';

class NavigationTabsComponent extends Component {
    render() {
        return (
            <nav className="navigation-tabs">
                <ul className="list">
                    {this.renderNavigationTabItems()}
                </ul>
            </nav>
        );
    }
    
    renderNavigationTabItems() {
        const { currentActiveItemId, changeActiveItemId } = this.props;

        return items.map(item => 
            <NavigationTabItem
                key={item.id}
                id={item.id}
                href={item.href} 
                text={item.text} 
                icon={item.icon}
                isActive={currentActiveItemId === item.id}
                onItemClick={(id) => changeActiveItemId(id)} 
            />
        );
    }
}

const mapStateToProps = (state) => ({
    currentActiveItemId: state.activeNavigationTabItemIdHistory[0]
})

const mapDispatchToProps = (dispatch) => ({
    changeActiveItemId: (id) => dispatch(changeActiveNavigationTabItem(id))
})

export const NavigationTabs = connect(mapStateToProps, mapDispatchToProps)(NavigationTabsComponent);