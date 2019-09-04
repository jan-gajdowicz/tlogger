import React, { Component } from 'react';
import './TaskItem.css';
import { connect } from 'react-redux'
import { deleteTask } from '../../actions'


const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (state) => dispatch(deleteTask(state)),
    }
}

class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.deleteTask = this.deleteTask.bind(this)
    }
    deleteTask() {
        this.props.deleteTask(this.props.item.taskID)
    }
    render() {
        return (
        <div className="task-item">
            <div>{this.props.item.taskName}</div>
            <div>{this.props.item.taskTimeFormatted}</div>   
            <div>
                <button onClick={this.deleteTask}>Delete task</button>
            </div>   
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);
