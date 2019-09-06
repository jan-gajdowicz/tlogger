import React, { Component } from 'react';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <div className="app">
        <TaskList/>
        <Modal/>
      </div>
    );
  }
}

export default App;