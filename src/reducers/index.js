import { ADD_ITEM, REMOVE_ITEM } from 'actions'

import { initialState } from 'initialState'

const reducers = (state = initialState.state, action) => {
  let itemQuantity = 0

  switch (action.type) {
    case ADD_ITEM:
      itemQuantity = state[action.payload.item] + 1
      state.price = state.price + initialState.pricesOfItems[action.payload.item]

      return {
        ...state,
        [action.payload.item]: itemQuantity
      }

    case REMOVE_ITEM:
      itemQuantity = state[action.payload.item] - 1
      state.price = state.price - initialState.pricesOfItems[action.payload.item]

      return {
        ...state,
        [action.payload.item]: itemQuantity
      }

    default:
      return state
  }
}

export default reducers
