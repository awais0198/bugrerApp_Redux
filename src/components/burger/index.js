import { BottomFunctions, BurgerItems, LowerBurger, UpperBurger } from '..'
import './styles.css'

export const Burger = () => {
  return (
    <>
      <div className={'burger'}>
        <UpperBurger />
        <BurgerItems />
        <LowerBurger />
      </div>
      <BottomFunctions />
    </>
  )
}
