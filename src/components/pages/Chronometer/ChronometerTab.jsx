import React, { Component } from 'react';
import { Tab, TabContent, FlexBox } from 'components/common';

export class ChronometerTab extends Component {
    render() {
        return (
            <Tab>
                <TabContent>
                    <FlexBox justify='center'>
                        <h3>ChronometerTab</h3>
                    </FlexBox>
                </TabContent>
            </Tab>
        );
    }
}