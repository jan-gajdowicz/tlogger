import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import './TaskCreator.css';
  
const mapDispatchToProps = dispatch => {
    return {
        createTask: (state) => dispatch(createTask(state)),
    }
}

class TaskCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: '',
            taskTime: '',
            timer: null, 
            timerFired: false
        };
        this.createTask = this.createTask.bind(this)
        this.trackTime = this.trackTime.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    createTask() {
        if(this.state.taskName == '' || this.state.taskTime == '') {
            return false
        }
        this.props.createTask(this.state)
    }
    trackTime() {
        if(this.state.timerFired) {
            console.log(timer);
            clearInterval(timer)
            this.setState({taskTime: this.state.taskTime});
            return false
        }
        let counter = 0
        function timer() {
            this.setState({
                taskTime: counter
            })
            counter += 1000
        }
        timer = timer.bind(this)
        setInterval(timer, 1000)
        this.setState({timerFired: true})
    }
    render() {
        return (
        <div className="task-creator">
            <div>
                <input type="text" 
                    name="taskName"  
                    className="creator-input"
                    placeholder="Task Name"
                    onChange={this.handleInputChange}
                    value={this.state.taskName}
                />
            </div>
            <div>
                <input type="number" 
                    name="taskTime"  
                    className="creator-input"
                    placeholder="Time in ms"
                    onChange={this.handleInputChange}
                    value={this.state.taskTime}
                />
            </div>   
            <button onClick={this.trackTime} className="creator-button">Track Time</button>   
            <button onClick={this.createTask} className="creator-button button-main">Submit Task</button>   
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TaskCreator);