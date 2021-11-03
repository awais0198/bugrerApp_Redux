import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import { ADD_ITEM, REMOVE_ITEM } from 'actions'
import { Functions } from 'containers'

let store,
  wrapper = undefined

const setup = (store, ingredient) =>
  mount(
    <Provider store={store}>
      <Functions
        text={ingredient}
        handleAddItem={() => handleAddItem(ingredient)}
        handleRemoveItem={() => handleRemoveItem(ingredient)}
        ingredientQuantity={'1'}
      />
    </Provider>
  )
const handleAddItem = ingredient =>
  store.dispatch({ type: ADD_ITEM, payload: { item: ingredient } })
const handleRemoveItem = ingredient =>
  store.dispatch({ type: REMOVE_ITEM, payload: { item: ingredient } })

const middlewares = []
const mockStore = configureStore(middlewares)
let initialState = {
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
  beforeEach(() => {
    store = mockStore(() => initialState)
  })

  it('component should render lettuce', () => {
    wrapper = setup(store, 'lettuce')
    expect(wrapper).toHaveLength(1)
  })

  it('Checking Add Button for lettuce', () => {
    const expectedResult = { type: 'ADD_ITEM', payload: { item: 'lettuce' } }
    wrapper = setup(store, 'lettuce')
    const buttons = wrapper.find('Button')
    const button = buttons.at(0)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('component should render bacon', () => {
    wrapper = setup(store, 'bacon')
    expect(wrapper).toHaveLength(1)
  })

  it('Checking Add Button for bacon', () => {
    const expectedResult = { type: 'ADD_ITEM', payload: { item: 'bacon' } }
    wrapper = setup(store, 'bacon')
    const buttons = wrapper.find('Button')
    const button = buttons.at(0)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('component should render cheese', () => {
    wrapper = setup(store, 'cheese')
    expect(wrapper).toHaveLength(1)
  })

  it('Checking Add Button for cheese', () => {
    const expectedResult = { type: 'ADD_ITEM', payload: { item: 'cheese' } }
    wrapper = setup(store, 'cheese')
    const buttons = wrapper.find('Button')
    const button = buttons.at(0)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('component should render meat', () => {
    wrapper = setup(store, 'meat')
    expect(wrapper).toHaveLength(1)
  })

  it('Checking Add Button for meat', () => {
    const expectedResult = { type: 'ADD_ITEM', payload: { item: 'meat' } }
    wrapper = setup(store, 'meat')
    const buttons = wrapper.find('Button')
    const button = buttons.at(0)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('Checking Remove Button for lettuce', () => {
    const expectedResult = { type: 'REMOVE_ITEM', payload: { item: 'lettuce' } }
    wrapper = setup(store, 'lettuce')
    const buttons = wrapper.find('Button')
    const button = buttons.at(1)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('Checking Remove Button for bacon', () => {
    const expectedResult = { type: 'REMOVE_ITEM', payload: { item: 'bacon' } }
    wrapper = setup(store, 'bacon')
    const buttons = wrapper.find('Button')
    const button = buttons.at(1)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('Checking Remove Button for meat', () => {
    const expectedResult = { type: 'REMOVE_ITEM', payload: { item: 'meat' } }
    wrapper = setup(store, 'meat')
    const buttons = wrapper.find('Button')
    const button = buttons.at(1)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })

  it('Checking Remove Button for cheese', () => {
    const expectedResult = { type: 'REMOVE_ITEM', payload: { item: 'cheese' } }
    wrapper = setup(store, 'cheese')
    const buttons = wrapper.find('Button')
    const button = buttons.at(1)
    button.simulate('click')
    expect(button).toHaveLength(1)
    expect(store.getActions()).toEqual([expectedResult])
  })
})
