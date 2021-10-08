import { useSelector } from 'react-redux'

import { BottomFunctions, BurgerItems, LowerBurger, UpperBurger } from '..'
import './styling.css'

export const Burger = () => {
  const lettuce = useSelector(state => state.lettuce)
  const bacon = useSelector(state => state.bacon)
  const cheese = useSelector(state => state.cheese)
  const meat = useSelector(state => state.meat)

  return (
    <>
      <div className={'burger'}>
        <UpperBurger />
        <BurgerItems
          lettuceQuantity={lettuce}
          baconQuantity={bacon}
          cheeseQuantity={cheese}
          meatQuantity={meat}
        />
        <LowerBurger />
      </div>
      <BottomFunctions />
    </>
  )
}
