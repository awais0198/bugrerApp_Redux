import { Image, Div } from './styles'

import cheeseImage from '../../assets/images/cheese.jpg'

export const Cheese = () => (
  <Div>
    <Image alt={'image'} src={`${cheeseImage}`}></Image>
  </Div>
)
