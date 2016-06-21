import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, TabContent, Timer, WatchCommandButton } from 'components/common';
import { ChronometerResults } from './ChronometerResults';

class ChronometerTabComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isResetButtonHide: true
        };
    }

    render() {
        const { isLightThemeOn } = this.props;
        const { isResetButtonHide } = this.state;

        return (
            <Tab className="chronometer-tab">
                <TabContent>
                    <Timer
                        ref="timer" 
                        showHundredths
                        onPause={this.showResetButton.bind(this)}
                        onReset={this.hideResetButton.bind(this)}
                    >
                        <WatchCommandButton
                            icon="reset"
                            title="Reset" 
                            hideButton={isResetButtonHide}
                            lightTheme={isLightThemeOn}
                            onClick={this.resetTimer.bind(this)}
                        />
                    </Timer>
                    <ChronometerResults />
                </TabContent>
            </Tab>
        );
    }

    resetTimer() {
        this.refs.timer.getWrappedInstance().reset();
    }

    showResetButton() {
        this.setState({ isResetButtonHide: false });
    }

    hideResetButton() {
        this.setState({ isResetButtonHide: true });
    }
}

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const ChronometerTab = connect(mapStateToProps)(ChronometerTabComponent);