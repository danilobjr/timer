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
            return [
                <CommandBarItem key="0" to="/timer/new" icon="plus" title="New" />,
                <CommandBarItem key="1" icon="checklist" title="Edit" onClick={onClickEdit} />
            ];
        }
    }
}

TimerTabCommandBar.propTypes = {
    isEditionEnabled: PropTypes.bool.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDone: PropTypes.func.isRequired
};