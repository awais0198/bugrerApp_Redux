import { useSelector } from 'react-redux'

import { Lettuce, Bacon, Cheese, Meat } from '..'
import { Paragraph } from './styles'

export const BurgerItems = () => {
  let burger = []

  const lettuce = useSelector(state => state.lettuce)
  const bacon = useSelector(state => state.bacon)
  const cheese = useSelector(state => state.cheese)
  const meat = useSelector(state => state.meat)

  for (let i = 0; i < lettuce; i++) {
    burger.push(<Lettuce />)
  }
  for (let i = 0; i < bacon; i++) {
    burger.push(<Bacon />)
  }
  for (let i = 0; i < cheese; i++) {
    burger.push(<Cheese />)
  }
  for (let i = 0; i < meat; i++) {
    burger.push(<Meat />)
  }
  if (burger.length === 0) {
    burger.push(<Paragraph> PLEASE START ADDING YOUR ITEMS! </Paragraph>)
  }
  return burger
}
