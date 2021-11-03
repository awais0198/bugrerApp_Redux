import { initialState } from 'initialState'
import reducers from 'reducers'
import { ADD_ITEM, REMOVE_ITEM } from 'actions'

describe('Testing Reducer', () => {
  it('Should return default state', () => {
    const state = reducers(undefined, {})
    expect(state).toEqual(initialState.state)
  })

  it('Should return updated state after adding lettuce', () => {
    const data = { item: 'lettuce' }
    const expected = { bacon: 0, cheese: 0, lettuce: 1, meat: 0, price: 3.5 }
    const newState = reducers(undefined, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after adding bacon', () => {
    const data = { item: 'bacon' }
    const expected = { bacon: 1, cheese: 0, lettuce: 1, meat: 0, price: 4.2 }
    const newState = reducers(initialState.state, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after adding meat', () => {
    const data = { item: 'meat' }
    const expected = { bacon: 1, cheese: 0, lettuce: 1, meat: 1, price: 5.5 }
    const newState = reducers(undefined, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after adding cheese', () => {
    const data = { item: 'cheese' }
    const expected = { bacon: 1, cheese: 1, lettuce: 1, meat: 1, price: 5.9 }
    const newState = reducers(undefined, {
      type: ADD_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after removing cheese', () => {
    const data = { item: 'cheese' }
    const expected = { bacon: 1, cheese: 0, lettuce: 1, meat: 1, price: 5.5 }
    const newState = reducers(undefined, {
      type: REMOVE_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after removing meat', () => {
    const data = { item: 'meat' }
    const expected = { bacon: 1, cheese: 0, lettuce: 1, meat: 0, price: 4.2 }
    const newState = reducers(undefined, {
      type: REMOVE_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after removing bacon', () => {
    const data = { item: 'bacon' }
    const expected = { bacon: 0, cheese: 0, lettuce: 1, meat: 0, price: 3.5 }
    const newState = reducers(undefined, {
      type: REMOVE_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })

  it('Should return updated state after removing lettuce', () => {
    const data = { item: 'lettuce' }
    const expected = { bacon: 0, cheese: 0, lettuce: 0, meat: 0, price: 3 }
    const newState = reducers(undefined, {
      type: REMOVE_ITEM,
      payload: data
    })
    expect(newState).toEqual(expected)
  })
})
