import { shallow } from 'enzyme'

import { LowerBurger } from 'components/lowerBun'

describe('Test App Entry point', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<LowerBurger />)
    expect(wrapper).toHaveLength(1)
  })
})
