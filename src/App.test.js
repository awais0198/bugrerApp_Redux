import { shallow } from 'enzyme'

import { Bacon } from 'components/bacon'

describe('Test App Entry point', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Bacon />)
    expect(wrapper.contains(<Bacon />))
  })
})
