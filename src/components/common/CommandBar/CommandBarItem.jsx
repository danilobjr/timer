import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { IconChecklist, IconMoreHorizontal, IconPlus } from 'components/common/Icons';

const icons = {
    checklist: IconChecklist,
    moreHorizontal: IconMoreHorizontal,
    plus: IconPlus
};

const renderTo = (to) => to || '#' 

export const CommandBarItem = (props) =>
    <Link {...props} className="command-bar-item" to={renderTo(props.to)}>
        {React.createElement(icons[props.icon])}
    </Link>

CommandBarItem.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.string.isRequired
};