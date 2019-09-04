import React, { Component } from 'react';
import './TaskItem.css';
import { connect } from 'react-redux'
import { deleteTask, updateTask } from '../../actions'

class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskID: null,
            taskName: '',
            taskTimeFormatted: '',
        }
    }
    //proptypes!!!
    deleteTask = () => {
        this.props.deleteTask(this.props.item.taskID)
    }
    updateTask = () => {
        this.props.updateTask(this.state)
    }
    editTask = (event) => {
        event.persist()
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        this.setState({
            taskID: this.props.item.taskID,
            taskName: this.props.item.taskName,
            taskTimeFormatted: this.props.item.taskTimeFormatted,
        })
    }
    render() {
        return (
        <div className="task-item">
            <div className="task-name">
                <input value={this.state.taskName}
                    name="taskName"  
                    type="text" 
                    onChange={this.editTask}
                    onBlur={this.updateTask}
                />
            </div>
            <div className="task-time">{this.state.taskTimeFormatted}</div>   
            <div className="task-utils">
                <div className="button-delete" onClick={this.deleteTask}>
                    <img alt="delete task" className="button-icon" src="assets/rubbish-bin-delete-button.svg"/>
                </div>
            </div>   
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (state) => dispatch(deleteTask(state)),
        updateTask: (state) => dispatch(updateTask(state)),
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);
