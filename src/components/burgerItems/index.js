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
    burger.push(<Lettuce key={'lettuce ' + i} />)
    console.log(`Pushing lettuce ${i} times`)
  }
  for (let i = 0; i < bacon; i++) {
    burger.push(<Bacon key={'bacon ' + i} />)
    console.log('bacon ' + i)
  }
  for (let i = 0; i < cheese; i++) {
    burger.push(<Cheese key={'cheese ' + i} />)
    console.log('cheese ' + i)
  }
  for (let i = 0; i < meat; i++) {
    burger.push(<Meat key={'meat ' + i} />)
    console.log('meat ' + i)
  }
  if (burger.length === 0) {
    burger.push(<Paragraph key={'default'}> PLEASE START ADDING YOUR ITEMS! </Paragraph>)
  }
  return burger
}
