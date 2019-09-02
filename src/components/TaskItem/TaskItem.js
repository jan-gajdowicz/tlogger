import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
    render() {
        return (
        <div className="task-item">
            <div>{this.props.item.name}</div>
            <div>{this.props.item.time}</div>   
        </div>
        );
    }
}

export default TaskItem;