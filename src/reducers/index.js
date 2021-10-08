import { ITEM_ADDED, ITEM_REMOVED } from '../actions'

const pricesOfItems = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

let burger = {
  lettuce: 0,
  bacon: 0,
  cheese: 0,
  meat: 0,
  price: 3.0
}

const reducers = (state = burger, action) => {
  let itemQuantity = 0

  switch (action.type) {
    case ITEM_ADDED:
      itemQuantity = burger[action.payload.item]
      itemQuantity = itemQuantity + 1
      burger.price = burger.price + pricesOfItems[action.payload.item]

      return (burger = { ...state, [action.payload.item]: itemQuantity })

    case ITEM_REMOVED:
      itemQuantity = burger[action.payload.item]
      itemQuantity = itemQuantity - 1
      burger.price = burger.price - pricesOfItems[action.payload.item]

      return (burger = { ...state, [action.payload.item]: itemQuantity })

    default:
      return state
  }
}

export default reducers
