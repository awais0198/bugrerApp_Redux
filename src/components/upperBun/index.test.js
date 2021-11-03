import { shallow } from 'enzyme'

import { UpperBurger } from 'components/upperBun'

describe('Test App Entry point', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<UpperBurger />)
    expect(wrapper).toHaveLength(1)
  })
})
