import { Lettuce, Bacon, Cheese, Meat } from '..'
import './styling.css'

export const BurgerItems = ({ lettuceQuantity, baconQuantity, cheeseQuantity, meatQuantity }) => {
  let burger = []

  for (let i = 0; i < lettuceQuantity; i++) {
    burger.push(<Lettuce />)
  }
  for (let i = 0; i < baconQuantity; i++) {
    burger.push(<Bacon />)
  }
  for (let i = 0; i < cheeseQuantity; i++) {
    burger.push(<Cheese />)
  }
  for (let i = 0; i < meatQuantity; i++) {
    burger.push(<Meat />)
  }
  if (burger.length === 0) {
    burger.push(<p className={'default'}>PLEASE START ADDING YOUR ITEMS!</p>)
  }
  return burger
}
