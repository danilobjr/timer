import React, { Component } from 'react';

export class PageHeader extends Component {
    render() {
        return <h3 className="page-header">{this.props.children}</h3>;
    }
}