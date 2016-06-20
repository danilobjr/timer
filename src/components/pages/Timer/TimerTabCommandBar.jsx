import React, { Component, PropTypes } from 'react';
import { CommandBar, CommandBarItem } from 'components/common';

export class TimerTabCommandBar extends Component {
    render() {
        return (
            <CommandBar>
                {this.renderItems()}
                <CommandBarItem icon="moreHorizontal" title="More" />
            </CommandBar>
        );
    }

    renderItems() {
        const { isEditionEnabled, onClickEdit, onClickDone } = this.props;

        if (isEditionEnabled) {
            return [<CommandBarItem key="0" icon="check" title="Done" onClick={onClickDone} />];
        } else {
            const items = [<CommandBarItem key="0" to="/timer/new" icon="plus" title="New" />];
            this.props.hideEditButton || items.push(<CommandBarItem key="1" icon="checklist" title="Edit" onClick={onClickEdit} />);
            return items;
        }
    }
}

TimerTabCommandBar.propTypes = {
    isEditionEnabled: PropTypes.bool.isRequired,
    hideEditButton: PropTypes.bool,
    onClickEdit: PropTypes.func.isRequired,
    onClickDone: PropTypes.func.isRequired
};

TimerTabCommandBar.defaultProps = {
    isEditionEnabled: false,
    hideEditButton: true
};