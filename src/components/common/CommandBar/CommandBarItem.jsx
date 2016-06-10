import React, { Component, PropTypes } from 'react';
import { IconChecklist, IconMoreHorizontal, IconPlus } from 'components/common/Icons';

const icons = {
    checklist: IconChecklist,
    moreHorizontal: IconMoreHorizontal,
    plus: IconPlus
};

const renderHref = (href) => href ? `#${href}` : '#' 

export const CommandBarItem = (props) =>
    <a {...props} className="command-bar-item" href={renderHref(props.href)}>
        {React.createElement(icons[props.icon])}
    </a>

CommandBarItem.propTypes = {
    icon: PropTypes.string.isRequired
};