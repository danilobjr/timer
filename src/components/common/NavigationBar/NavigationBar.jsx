import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavigationBarItem } from './NavigationBarItem';
import { changeActiveNavigationBarItem } from './actions';
import { items } from './items';

class NavigationBarComponent extends Component {
    render() {
        return (
            <nav className="navigation-bar">
                <ul className="list">
                    {this.renderNavigationBarItems()}
                </ul>
            </nav>
        );
    }
    
    renderNavigationBarItems() {
        const { currentActiveItemId, changeActiveItemId } = this.props;

        return items.map(item => 
            <NavigationBarItem
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
    currentActiveItemId: state.activeNavigationBarItemIdHistory[0]
})

const mapDispatchToProps = (dispatch) => ({
    changeActiveItemId: (id) => dispatch(changeActiveNavigationBarItem(id))
})

export const NavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent);