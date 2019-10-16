import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todaysTasks: null
    }
  }

  render() {
    return (
      <div className="task-list">
        <h1>Zee Dashboard</h1>
        <Link to="/task-list">
          <button className="creator-button">Go to tracker</button>
        </Link>
      </div>
    )
  }
}

export default Dashboard
