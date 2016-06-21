import React, { Component } from 'react';
import { FlexBox, Tab, TabContent, Timer } from 'components/common';
import { ChronometerResults } from './ChronometerResults';

export class ChronometerTab extends Component {
    render() {
        return (
            <Tab>
                <TabContent>
                    <FlexBox column alignItems='center'>
                        <Timer />
                        <ChronometerResults />
                    </FlexBox>
                </TabContent>
            </Tab>
        );
    }
}