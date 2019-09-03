import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import TaskCreator from '../TaskCreator/TaskCreator';
import { connect } from 'react-redux'
import { requestTasks } from '../../actions'
import './TaskList.css';

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks,
        isPending: state.tasks.isPending,
        error: state.tasks.error
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        onRequestTasks: () => dispatch(requestTasks())
    }
}

class TaskList extends Component {
    async componentDidMount() {
        await this.props.onRequestTasks()
    }
    render() {
        return (
        <div className="task-list">
            <h1>Task List</h1>
            <TaskCreator />
            <div className="task-items">
            {this.props.tasks.map((item, index) => (
                <TaskItem item={item} key={index}/>
            ))}
            </div>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList); //higher order component
