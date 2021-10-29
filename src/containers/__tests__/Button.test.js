import { shallow } from 'enzyme'

import { Button } from 'components/button/Button'

describe('test entry point', () => {
  it('Testing Button Render', () => {
    const nothing = () => {}

    const wrapper = shallow(<Button text={'ADD'} onClick={nothing} disabled={true} />)
    expect(wrapper.contains(<Button text={'ADD'} onClick={nothing} disabled={true} />))
  })

  it('Testing button Click', () => {
    const mockCallBack = jest.fn()
    const button = shallow(
      <Button text={'ADD'} onClick={mockCallBack} disabled={true}>
        Ok!
      </Button>
    )
    button.simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
