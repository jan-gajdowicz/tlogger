import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestTasks } from '../../actions'
import './TaskIDs.css'

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

class TaskIDs extends Component {
  render() {
    return (
      <div className="task-list">
        <h1>Task IDs</h1>
        <div className="task-items">
          Task ID: {this.props.match.params.taskID}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TaskIDs) // higher order component
