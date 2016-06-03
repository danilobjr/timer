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
        const { currentActiveItem, changeActiveItem } = this.props;
        
        return items.map(item => 
            <NavigationBarItem
                key={item.text}
                href={item.href} 
                text={item.text} 
                iconClassName={item.iconClassName}
                isActive={currentActiveItem === item.text}
                onItemClick={changeActiveItem} 
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentActiveItem: state.currentActiveNavigationBarItem
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeActiveItem: (text) => dispatch(changeActiveNavigationBarItem(text))
})

export const NavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent);