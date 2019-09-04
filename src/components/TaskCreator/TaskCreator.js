import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../actions'
import moment from 'moment'
import './TaskCreator.css'
  
const mapDispatchToProps = dispatch => {
    return {
        createTask: (state) => dispatch(createTask(state)),
    }
}

class TaskCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskID: null,
            taskName: '',
            taskTime: '',
            timerTime: 0,
            timerInterval: null, 
            timerFired: false,
            creatorStateClass: ''
        }
        this.createTask = this.createTask.bind(this)
        this.trackTime = this.trackTime.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        });
    }
    createTask() {
        this.setState({creatorStateClass: ''})
        if(this.state.taskName === '' || this.state.taskTime === '') {
            this.setState({creatorStateClass: 'shake'})
            return false
        }
        this.props.createTask({
            taskID: Date.now(),
            taskName: this.state.taskName,
            taskTime: this.state.taskTime
        })
        this.setState({
            taskName: '',
            taskTime: '',
            timerTime: 0
        })
    }
    formatTime(timeInMs) {
        const duration = moment.duration(timeInMs)
        const format = (timeUnit) => {
            return duration[timeUnit]() >= 10 ? duration[timeUnit]() : `0${duration[timeUnit]()}`
        }
        return `${format('hours')}:${format('minutes')}:${format('seconds')}`
    }
    trackTime() {
        if(this.state.timerFired) {
            clearInterval(this.state.timerInterval)
            this.setState({
                timerInterval: null,
                timerFired: false
            })
            return false
        }
        let timeInMs = this.state.timerTime
        const updateTimer = () => {
            timeInMs += 1000
            this.setState({ 
                taskTime: this.formatTime(timeInMs),
                timerTime : timeInMs
            })
        }
        this.setState({
            timerInterval: setInterval(updateTimer, 1000),
            timerFired: true
        })
    }
    render() {
        return (
        <div className={`task-creator ${this.state.creatorStateClass}`}>
            <div>
                <input value={this.state.taskName} 
                    type="text" 
                    name="taskName"  
                    className="creator-input"
                    placeholder="Task Name"
                    onChange={this.handleInputChange}
                />
            </div>
            <div>
                <input value={this.state.taskTime}
                    type="text" 
                    name="taskTime"  
                    className="creator-input"
                    placeholder="Time in ms"
                    onChange={this.handleInputChange}
                />
            </div>   
            <button onClick={this.trackTime} className="creator-button">Track Time</button>   
            <button onClick={this.createTask} className="creator-button button-main">Submit Task</button>   
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TaskCreator);