import React from 'react';
import { BaseComponent } from 'BaseComponent';
import { connect } from 'react-redux';
import { TitleBarButton } from './TitleBarButton';

class TitleBarComponent extends BaseComponent {
    render() {
        const { isLightThemeOn } = this.props;

        return (
            <div className={this.renderCssClasses()}>
                <h5 className="title">Timers</h5>
                <div className="buttons">
                    <TitleBarButton className="btn-minimize" icon="minus" lightTheme={isLightThemeOn} />
                    <TitleBarButton className="btn-maximize" icon="square" lightTheme={isLightThemeOn} />
                    <TitleBarButton className="btn-close" icon="remove" red lightTheme={isLightThemeOn} />
                </div>
            </div>
        );
    }

    renderCssClasses() {
        return this.classNames(
            'title-bar',
            { '-lighttheme': this.props.isLightThemeOn }
        );
    }
}

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const TitleBar = connect(mapStateToProps)(TitleBarComponent);