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
        const { currentActiveItemIndex, changeActiveItemIndex } = this.props;

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
}

const mapStateToProps = (state) => ({
    currentActiveItemIndex: state.activeNavigationTabItemIndexHistory[0]
})

const mapDispatchToProps = (dispatch) => ({
    changeActiveItemIndex: (id) => dispatch(changeActiveNavigationTabItem(id))
})

export const NavigationTabs = connect(mapStateToProps, mapDispatchToProps)(NavigationTabsComponent);