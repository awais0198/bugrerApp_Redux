import { useDispatch, useSelector } from 'react-redux'

import { Functions } from '..'
import { ITEM_ADDED, ITEM_REMOVED } from '../../actions'
import store from '../../store'
import { BottomDiv, IngrDiv } from './styles'

const BURGER_ITEMS = ['lettuce', 'bacon', 'cheese', 'meat']

export const BottomFunctions = () => {
  const dispatch = useDispatch()

  const items = useSelector(state => state)

  return (
    <BottomDiv>
      <p>
        {' '}
        Current Price: <b> ${store.getState().price.toFixed(2)}</b>
      </p>

      <IngrDiv>
        {BURGER_ITEMS.map(ingredient => (
          <Functions
            key={ingredient}
            text={ingredient}
            handleAddItem={() => dispatch({ type: ITEM_ADDED, payload: { item: ingredient } })}
            handleRemoveItem={() => dispatch({ type: ITEM_REMOVED, payload: { item: ingredient } })}
            ingredientQuantity={items[ingredient]}
          />
        ))}
      </IngrDiv>
    </BottomDiv>
  )
}
