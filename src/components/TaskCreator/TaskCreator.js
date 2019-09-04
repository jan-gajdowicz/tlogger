import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../actions'
import { formatTime } from '../../functions'
import './TaskCreator.css'
  
class TaskCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskID: null,
            taskName: '',
            taskTimeInMs: '',
            taskTimeFormatted: '',
            timerTime: 0,
            timerInterval: null, 
            timerFired: false,
            creatorStateClass: ''
        }
    }
    handleInputChange = (event) => {
        event.persist()
        const target = event.target
        const value = target.value
        const name = target.name
        if(name === 'taskTimeFormatted') {
            this.setState({
                taskTimeInMs: value,
            })
        }
        this.setState({
            [name]: value
        });
    }
    createTask = () => {
        this.setState({creatorStateClass: ''})
        if(this.state.taskName === '' || this.state.taskTime === '') {
            this.setState({creatorStateClass: 'shake'})
            return false
        }
        const timeFormatted = formatTime(this.state.taskTimeInMs)
        this.props.createTask({
            taskID: Date.now(),
            taskName: this.state.taskName,
            taskTimeInMs: this.state.taskTimeInMs,
            taskTimeFormatted: timeFormatted
        })
        this.setState({
            taskName: '',
            taskTimeInMs: '',
            taskTimeFormatted: '',
            timerTime: 0
        })
    }
    trackTime = () => {
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
                taskTimeInMs: timeInMs,
                taskTimeFormatted: formatTime(timeInMs),
                timerTime : timeInMs
            })
        }
        this.setState({
            timerInterval: setInterval(updateTimer, 1000),
            timerFired: true
        })
    }
    render() {
        const isTimerFired = this.state.timerFired
        let trackingButtonContent
        if(isTimerFired) {
            trackingButtonContent = 
                <span className="button-inner">
                    <img alt="pause" className="button-icon" src="assets/pause-button.svg"></img>Pause
                </span>
        } else {
            trackingButtonContent = 
                <span className="button-inner">
                    <img alt="track" className="button-icon" src="assets/play-arrow.svg"></img>Track
                </span>
        }
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
                <input value={this.state.taskTimeFormatted}
                    type="text" 
                    name="taskTimeFormatted"  
                    className="creator-input"
                    placeholder="Duration (hh:mm:ss)"
                    onChange={this.handleInputChange}
                />
            </div>   
            <button onClick={this.trackTime} className="creator-button">
                {trackingButtonContent}
            </button>   
            <button onClick={this.createTask} className="creator-button button-main">
                <span className="button-inner">
                    <img alt="submit" className="button-icon" src="assets/circle-with-check-symbol.svg"></img>Submit
                </span>
            </button>   
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTask: (state) => dispatch(createTask(state)),
    }
}

export default connect(null, mapDispatchToProps)(TaskCreator);