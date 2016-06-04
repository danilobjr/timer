import React, { Component } from 'react';
import { 
    CommandBar, CommandBarItem, 
    FlexBox, FlexItem,
    NavigationBar 
} from 'components/common';

export class Timer extends Component {
    render() {
        // back use for FlexBox n FlexItem when done with new Timer/Counter component
        return (
            <div>
                <NavigationBar />
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '12px'}}>
                    <div className="timer">
                        <div className="counter">
                            <span className="unit">00</span>
                            <span className="unit active">21</span>
                            <span className="unit active">40</span>
                        </div>
                        <div className="commands">
                            <button className="reset">
                                <span className="icon ion-md-refresh"></span>
                            </button>
                            <button className="start">
                                <span className="icon ion-md-play"></span>
                            </button>
                            <button className="expand">
                                <span className="icon ion-md-expand"></span>
                            </button>
                        </div>
                        <div className="info">
                            <span className="name">My interval</span>
                            <div className="counter">
                                <span className="unit">00</span>
                                <span className="unit">21</span>
                                <span className="unit">40</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CommandBar>
                    <CommandBarItem icon="ion-md-add" />
                    <CommandBarItem icon="ion-md-trash" />
                    <CommandBarItem icon="ion-md-more" />
                </CommandBar>
            </div>
        );
    }
}