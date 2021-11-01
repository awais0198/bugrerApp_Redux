import { initialState } from 'initialState'
import reducers from 'reducers'
import { ADD_ITEM } from 'actions'

describe('Testing Reducer', () => {
  it('Should return default state', () => {
    const state = reducers(undefined, {})
    expect(state).toEqual(initialState.state)
  })

  it('Should return updated state', () => {
    const data = { item: 'lettuce' }
    const expected = { bacon: 0, cheese: 0, lettuce: 1, meat: 0, price: 3.5 }
    const newState = reducers(undefined, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state', () => {
    const data = { item: 'bacon' }
    const expected = { bacon: 1, cheese: 0, lettuce: 1, meat: 0, price: 4.2 }
    const newState = reducers(initialState.state, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state', () => {
    const data = { item: 'meat' }
    const expected = { bacon: 1, cheese: 0, lettuce: 1, meat: 1, price: 5.5 }
    const newState = reducers(undefined, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })
})
