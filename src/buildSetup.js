import React from 'react'
import { shallow, mount } from 'enzyme'

global.shallowSetup = (TestComponent, props = {}) => (override = {}) =>
  shallow(<TestComponent {...props} {...override} />)

global.mountSetup = (TestComponent, props = {}) => (override = {}) =>
  mount(<TestComponent {...props} {...override} />)
