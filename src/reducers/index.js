import { ITEM_ADDED, ITEM_REMOVED } from '../actions'

const pricesOfItems = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

let initialState = {
  lettuce: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
  price: 3.0
}

const reducers = (state = initialState, action) => {
  let itemQuantity = 0

  switch (action.type) {
    case ITEM_ADDED:
      itemQuantity = state[action.payload.item] + 1
      state.price = state.price + pricesOfItems[action.payload.item]

      return {
        ...state,
        [action.payload.item]: itemQuantity
      }

    case ITEM_REMOVED:
      itemQuantity = state[action.payload.item] - 1
      state.price = state.price - pricesOfItems[action.payload.item]

      return {
        ...state,
        [action.payload.item]: itemQuantity
      }

    default:
      return state
  }
}

export default reducers
