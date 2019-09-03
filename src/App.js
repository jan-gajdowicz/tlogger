import React, { Component } from 'react';
import TaskList from './components/TaskList/TaskList';
import './App.css';
import { createTask, requestTasks } from './actions'



class App extends Component {
  render() {
    return (
      <TaskList/>
    );
  }
}

export default App; //higher order component