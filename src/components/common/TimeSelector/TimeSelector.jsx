import React, { Component } from 'react';
import { NumberSelector } from 'components/common';

export class TimeSelector extends Component {
    render() {
        return (
            <div className="time-selector">
                <NumberSelector fromZeroUntil={23} />
                <NumberSelector fromZeroUntil={59} />
                <NumberSelector fromZeroUntil={59} />
            </div>
        );
    }
}