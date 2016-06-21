import React, { Component } from 'react';
import { FlexBox, Tab, TabContent, Timer } from 'components/common';
import { ChronometerResults } from './ChronometerResults';

export class ChronometerTab extends Component {
    render() {
        return (
            <Tab className="chronometer-tab">
                <TabContent>
                    <Timer />
                    <ChronometerResults />
                </TabContent>
            </Tab>
        );
    }
}