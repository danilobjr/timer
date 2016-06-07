import React, { Component } from 'react';
import classNames from 'classnames';

export class BaseComponent extends Component {
    classNames() {
        return classNames.apply(null, arguments);
    }
}