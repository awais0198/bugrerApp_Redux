/* eslint-disable no-undef */
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import { ADD_ITEM, REMOVE_ITEM } from 'actions'
import { findByTestAttr } from 'utils'
import { Functions } from 'containers'

let store,
  wrapper = undefined

const setup = store =>
  mount(
    <Provider store={store}>
      <Functions
        text={'lettuce'}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        ingredientQuantity={'1'}
      />
    </Provider>
  )
const handleAddItem = () => store.dispatch({ type: ADD_ITEM, payload: { item: 'lettuce' } })
const handleRemoveItem = () => store.dispatch({ type: REMOVE_ITEM, payload: { item: 'lettuce' } })

const mockStore = configureStore()
const initialState = {
  pricesOfItems: {
    lettuce: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
  },
  state: {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    price: 3.0
  }
}

describe('Checking state on button click', () => {
  beforeAll(() => {
    store = mockStore(initialState)
  })
  beforeEach(() => {
    wrapper = setup(store)
  })

  it('component should render', () => {
    expect(wrapper.length).toBe(1)
  })

  it('Checking Add Button', () => {
    const buttons = wrapper.find('Button')
    const button = buttons.at(0)
    button.simulate('click', handleAddItem)
    console.log(store.getState())
    expect(button.length).toBe(1)
  })
})
