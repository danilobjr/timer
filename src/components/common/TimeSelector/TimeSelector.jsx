import React, { Component } from 'react';
import { NumberSelector } from 'components/common';

export class TimeSelector extends Component {
    render() {
        return (
            <div className="time-selector">
                <NumberSelector />
                <NumberSelector />
                <NumberSelector />
            </div>
        );
    }
}