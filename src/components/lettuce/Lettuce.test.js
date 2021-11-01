import { shallow } from 'enzyme'

import { Lettuce } from 'components/lettuce'

describe('Test App Entry point', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Lettuce />)
    expect(wrapper.contains(<Lettuce />))
  })
})
