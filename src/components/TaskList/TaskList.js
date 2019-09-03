import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { connect } from 'react-redux'
import { createTask, requestTasks } from '../../actions'
import TaskCreator from '../TaskCreator/TaskCreator';
import './TaskList.css';

const mapStateToProps = state => {
    return {
      tasks: state.requestTasks.tasks,
      isPending: state.requestTasks.isPending,
      error: state.requestTasks.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onCreateTask: event => dispatch(createTask(event.target.value)),
      onRequestTasks: () => dispatch(requestTasks())
    }
  }

class TaskList extends Component {
    async componentDidMount() {
        await this.props.onRequestTasks()
    }
    createTask() {
        this.props.createTask()
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
