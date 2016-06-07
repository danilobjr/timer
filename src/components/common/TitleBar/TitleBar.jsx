import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TitleBarButton } from './TitleBarButton';

class TitleBarComponent extends Component {
    render() {
        const { isLightThemeOn } = this.props;

        return (
            <div className={`title-bar ${isLightThemeOn ? '-lighttheme' : ''}`}>
                <h5 className="title">Timers</h5>
                <div className="buttons">
                    <TitleBarButton className="btn-minimize" icon="minus" lightTheme={isLightThemeOn} />
                    <TitleBarButton className="btn-maximize" icon="square" lightTheme={isLightThemeOn} />
                    <TitleBarButton className="btn-close" icon="remove" red lightTheme={isLightThemeOn} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const TitleBar = connect(mapStateToProps)(TitleBarComponent);