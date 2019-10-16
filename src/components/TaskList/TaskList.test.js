import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import React from 'react'
import TaskList from './TaskList'

const mockStore = configureMockStore({})
const store = mockStore({
  tasks: {
    tasks: [
      {
        taskCreationTime: '2019-10-03T07:05:02.935Z',
        taskID: 'task_1570086302935',
        taskName: 'shopping',
        taskTimeFormatted: '00:00:01',
        taskTimeInMs: 1000
      }
    ]
  }
})

const wrapper = mount(
  <Provider store={store}>
    <TaskList />
  </Provider>
).debug()

it('tests against snapshot', () => {
  expect(wrapper).toMatchSnapshot()
})

// snapshot serializers