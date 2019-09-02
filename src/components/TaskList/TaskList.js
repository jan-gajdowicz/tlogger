import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import TaskCreator from '../TaskCreator/TaskCreator';
import './TaskList.css';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                {name: 'task one', time: 300000},
                {name: 'task two', time: 150000},
            ]
        };
    }   
    render() {
        return (
        <div className="task-list">
            <h1>Task List</h1>
            <TaskCreator />
            {this.state.items.map((item, index) => (
                <TaskItem item={item} key={index}/>
            ))}
        </div>
        );
    }
}

export default TaskList;