import React, { Component } from 'react';
import classNames from 'classnames';

export const Tab = (props) => 
    <div className={classNames('tab', props.className)}>{props.children}</div>