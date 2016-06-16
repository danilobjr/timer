import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { IconCheck, IconChecklist, IconMoreHorizontal, IconPlus, 
    IconFloppy } from 'components/common/Icons';

const icons = {
    check: IconCheck,
    checklist: IconChecklist,
    moreHorizontal: IconMoreHorizontal,
    plus: IconPlus,
    floppy: IconFloppy
};

const renderTo = (to) => to || '' 

export const CommandBarItem = (props) =>
    <Link {...props} className="command-bar-item" to={renderTo(props.to)}>
        {React.createElement(icons[props.icon])}
    </Link>

CommandBarItem.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.string.isRequired
};