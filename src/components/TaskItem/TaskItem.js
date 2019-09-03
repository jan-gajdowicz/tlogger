import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
    render() {
        return (
        <div className="task-item">
            <div>{this.props.item.taskName}</div>
            <div>{this.props.item.taskTime}</div>   
        </div>
        );
    }
}

export default TaskItem;