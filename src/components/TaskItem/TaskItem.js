import React, { Component } from 'react';
import './TaskItem.css';
import { connect } from 'react-redux'
import { deleteTask, updateTask, updateModal } from '../../actions'
import moment from 'moment'

class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskID: null,
            taskName: '',
            taskTimeFormatted: '',
            taskCreationTime: '',
        }
    }
    deleteTask = () => {
        this.props.updateModal({
            modalOpen: true,
            modalHeader: 'Please confirm',
            modalContent: 'Are you positive you want to delete this task?',
            modalConfirm: { action :this.props.deleteTask, payload: this.props.item.taskID }
        })
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
            taskCreationTime: moment(this.props.item.taskCreationTime).format('DD-MM-YYYY'),
            taskTimeFormatted: this.props.item.taskTimeFormatted,
        })
    }
    render() {
        return (
        <div className="task-item">
            <div className="task-name">
                <input value={this.state.taskName}
                    className="task-field" 
                    name="taskName"  
                    type="text" 
                    onChange={this.editTask}
                    onBlur={this.updateTask}
                />
            </div>
            <div className="task-creation-time">
                <input value={this.state.taskCreationTime}
                    className="task-field" 
                    name="taskCreationTime"  
                    type="text" 
                    onChange={this.editTask}
                    onBlur={this.updateTask}
                />
            </div>   
            <div className="task-time">
                <input value={this.state.taskTimeFormatted}
                    className="task-field" 
                    name="taskTimeFormatted"  
                    type="text" 
                    onChange={this.editTask}
                    onBlur={this.updateTask}
                />
            </div>   
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
        updateModal: (state) => dispatch(updateModal(state))
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);
