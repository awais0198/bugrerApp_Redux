import { shallow } from 'enzyme'

import { Cheese } from 'components/cheese'

describe('Test App Entry point', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Cheese />)
    expect(wrapper).toHaveLength(1)
  })
})
