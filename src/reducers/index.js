import { ADD_ITEM, REMOVE_ITEM } from 'actions'

import { initialState } from 'initialState'

const reducers = (state = initialState.state, action) => {
  let itemQuantity = 0

  switch (action.type) {
    case ADD_ITEM:
      itemQuantity = state[action.payload.item] + 1
      state.price = state.price + initialState.pricesOfItems[action.payload.item]
      state[action.payload.item] = itemQuantity

      return {
        ...state
      }

    case REMOVE_ITEM:
      itemQuantity = state[action.payload.item] - 1
      state.price = state.price - initialState.pricesOfItems[action.payload.item]
      state[action.payload.item] = itemQuantity

      return {
        ...state
      }

    default:
      return state
  }
}

export default reducers
