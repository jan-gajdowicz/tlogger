import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './buildSetup'

configure({ adapter: new Adapter() })