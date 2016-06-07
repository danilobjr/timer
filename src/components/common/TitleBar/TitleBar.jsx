import React, { Component } from 'react';
import { TitleBarButton } from './TitleBarButton';

export class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <h5 className="title">Timers</h5>
                <div className="buttons">
                    <TitleBarButton className="btn-minimize" icon="minus" />
                    <TitleBarButton className="btn-maximize" icon="square" />
                    <TitleBarButton className="btn-close" icon="remove" red />
                </div>
            </div>
        );
    }
}