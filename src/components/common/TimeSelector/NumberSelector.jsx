import React, { Component, PropTypes } from 'react';
import { IconAngleUp, IconAngleDown } from 'components/common';
import { 
    compose, range, splitAt, reverse, map, flatten,
    padLeft, replace, inc
} from 'helpers';

const formatNumbers = map(compose(replace(' ')('0'), padLeft(2)));

export class NumberSelector extends Component {
    constructor(props) {
        super(props);
    
        const from = 0;
        const until = this.props.fromZeroUntil;

        this.state = {
            numbers: compose(flatten, reverse, splitAt(inc(until - NumberSelector.splitAt)), formatNumbers, range(from), inc)(until),
            selected: 0
        };
    }

    render() {
        return (
            <div className="number-selector">
                <div className="slider">
                    <div className="scroller">
                        <ul className="numbers">
                            {this.renderNumbers()}
                        </ul>
                    </div>
                    <button className="btn -up"><IconAngleUp /></button>
                    <button className="btn -down"><IconAngleDown /></button>
                </div>
                <span className="label">hours</span>
            </div>
        );
    }

    renderNumbers() {
        const toListItem = map(n => <li key={n} className="number">{n}</li>);
        return toListItem(this.state.numbers);
    }
}

NumberSelector.propTypes = {
    fromZeroUntil: PropTypes.number.isRequired,
    label: PropTypes.string
};

NumberSelector.defaultProps = {
    label: 'numbers'
};

NumberSelector.splitAt = 5;