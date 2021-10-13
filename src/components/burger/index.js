import { BottomFunctions, BurgerItems, LowerBurger, UpperBurger } from '..'
import { BurgerComponent } from './styles'

export const Burger = () => {
  return (
    <>
      <BurgerComponent>
        <UpperBurger />
        <BurgerItems />
        <LowerBurger />
      </BurgerComponent>
      <BottomFunctions />
    </>
  )
}
