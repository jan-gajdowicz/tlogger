import React, { Component } from 'react';
import './TaskCreator.css';

class TaskCreator extends Component {
    _trackTime() {
        console.log('tracking time', this);
    }
    render() {
        return (
        <div className="task-creator">
            <div>
                <input type="text" 
                    name="taskName"  
                    className="creator-input"
                    placeholder="Task Name"
                />
            </div>
            <div>
                <input type="number" 
                    name="taskTime"  
                    className="creator-input"
                    placeholder="Time in ms"
                />
            </div>   
            <button onClick={this._trackTime} className="creator-button">Track Time</button>   
            <button className="creator-button button-main">Submit Task</button>   
        </div>
        );
    }
}

export default TaskCreator;