import { useDispatch, useSelector } from 'react-redux'

import { Functions } from '..'
import { ITEM_ADDED, ITEM_REMOVED } from '../../actions'
import store from '../../store'
import './styling.css'

export const BottomFunctions = () => {
  const dispatch = useDispatch()

  const items = useSelector(state => state)

  return (
    <div className={'bottom-div'}>
      <p>
        {' '}
        Current Price: <b> ${store.getState().price.toFixed(2)}</b>
      </p>

      <div className={'ingredients-div'}>
        <Functions
          text={'lettuce'}
          handleAddItem={() => dispatch({ type: ITEM_ADDED, payload: { item: 'lettuce' } })}
          handleRemoveItem={() => dispatch({ type: ITEM_REMOVED, payload: { item: 'lettuce' } })}
          ingredientQuantity={items.lettuce}
        />

        <Functions
          text={'bacon'}
          handleAddItem={() => dispatch({ type: ITEM_ADDED, payload: { item: 'bacon' } })}
          handleRemoveItem={() => dispatch({ type: ITEM_REMOVED, payload: { item: 'bacon' } })}
          ingredientQuantity={items.bacon}
        />

        <Functions
          text={'cheese'}
          handleAddItem={() => dispatch({ type: ITEM_ADDED, payload: { item: 'cheese' } })}
          handleRemoveItem={() => dispatch({ type: ITEM_REMOVED, payload: { item: 'cheese' } })}
          ingredientQuantity={items.cheese}
        />

        <Functions
          text={'meat'}
          handleAddItem={() => dispatch({ type: ITEM_ADDED, payload: { item: 'meat' } })}
          handleRemoveItem={() => dispatch({ type: ITEM_REMOVED, payload: { item: 'meat' } })}
          ingredientQuantity={items.meat}
        />
      </div>
    </div>
  )
}
