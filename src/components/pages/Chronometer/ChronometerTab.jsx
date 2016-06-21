import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, TabContent, Timer, WatchCommandButton } from 'components/common';
import { ChronometerResults } from './ChronometerResults';

class ChronometerTabComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isResetButtonHidden: true,
            isLapsButtonHidden: true
        };
    }

    render() {
        const { isLightThemeOn } = this.props;
        const { isResetButtonHidden, isLapsButtonHidden } = this.state;

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
                            hideButton={isResetButtonHidden}
                            lightTheme={isLightThemeOn}
                            onClick={this.resetTimer.bind(this)}
                        />
                        <WatchCommandButton
                            icon="trash"
                            title="Laps" 
                            hideButton={isLapsButtonHidden}
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
        this.setState({ isResetButtonHidden: false });
    }

    hideResetButton() {
        this.setState({ isResetButtonHidden: true });
    }
}

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const ChronometerTab = connect(mapStateToProps)(ChronometerTabComponent);