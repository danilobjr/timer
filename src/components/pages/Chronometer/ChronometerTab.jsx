import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, TabContent, Timer, WatchCommandButton } from 'components/common';
import { ChronometerResults } from './ChronometerResults';

class ChronometerTabComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isResetButtonHidden: true,
            isLapsButtonHidden: true,
            results: []
        };

        this.timer = null;
    }

    componentDidUpdate() {
        this.timer = this.refs.timer.getWrappedInstance();
    }

    render() {
        const { isLightThemeOn } = this.props;
        const { isResetButtonHidden, isLapsButtonHidden, results } = this.state;

        return (
            <Tab className="chronometer-tab">
                <TabContent>
                    <Timer
                        ref="timer" 
                        showHundredths
                        onStartCounting={this.handleTimerStart.bind(this)}
                        onPause={this.handleTimerPause.bind(this)}
                        onReset={this.hideResetButton.bind(this)}
                    >
                        <WatchCommandButton
                            icon="reset"
                            title="Reset" 
                            hideButton={isResetButtonHidden}
                            lightTheme={isLightThemeOn}
                            onClick={this.restartChronometer.bind(this)}
                        />
                        <WatchCommandButton
                            icon="flag"
                            title="Laps" 
                            hideButton={isLapsButtonHidden}
                            lightTheme={isLightThemeOn}
                            onClick={this.registerLapTime.bind(this)}
                        />
                    </Timer>
                    <ChronometerResults results={results} />
                </TabContent>
            </Tab>
        );
    }

    handleTimerStart() {
        this.setState({ 
            isResetButtonHidden: true,
            isLapsButtonHidden: false,
        });        
    }

    handleTimerPause() {
        this.setState({ 
            isResetButtonHidden: false,
            isLapsButtonHidden: true 
        });
    }

    restartChronometer() {
        this.timer.reset();

        const newState = Object.assign({},
            this.state,
            { results: [] }
        );

        this.setState(newState);
    }

    hideResetButton() {
        this.setState({ isResetButtonHidden: true });
    }

    registerLapTime() {
        const { results } = this.state;
        const newState = Object.assign({}, 
            this.state, 
            { results: [...results, this.timer.getCurrentTime()] }
        );

        this.setState(newState);
    }
}

const mapStateToProps = (state) => ({
    isLightThemeOn: state.isLightThemeOn
})

export const ChronometerTab = connect(mapStateToProps)(ChronometerTabComponent);