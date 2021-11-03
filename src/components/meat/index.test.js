import { shallow } from 'enzyme'

import { Meat } from 'components/meat'

describe('Test App Entry point', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Meat />)
    expect(wrapper).toHaveLength(1)
  })
})
