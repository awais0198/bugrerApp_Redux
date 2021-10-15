import { LowerBurger, UpperBurger } from 'components/'
import { BurgerItems, BottomFunctions } from 'containers/'
import { BurgerComponent } from 'containers/burger/styles'

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
