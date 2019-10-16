import Dashboard from './Dashboard.js'

const shallow = shallowSetup(Dashboard, {})
const mount = mountSetup(Dashboard, {})

describe('Dashboard', () => {
  it('Displays text', () => {
    const wrapper = shallow({})
    expect(wrapper.find('h1').html()).toContain('Zee Dashboard')
  }) 
  
  it('Clicks the button', () => {
    const wrapper = shallow({})
    const mockCallBack = jest.fn()
    const button = (wrapper.find('.creator-button').html())
    console.log(button)
    button.simulate('click')
  }) 
})
